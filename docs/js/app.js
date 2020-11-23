let localeStrings = {
    'English': {
        target: 'Target',
        distance: 'Distance',
    },
    'French': {
        target: 'Cible',
        distance: 'Distance',
    },
    'Japanese': {
        target: 'ターゲット',
        distance: '距離',
    },
};

// Create VueI18n instance with options
const i18n = new VueI18n({
    locale: 'ja', // set locale
    messages, // set locale messages
})
  
 

const app = new Vue({
    i18n: i18n,
    el: "#app",
    vuetify: new Vuetify({}),
    data () {
        return {
            zone: null,
            global: {},
            self: {
                name: 'unknown',
                worldId: 0,
                x: 0,
                y: 0,
                z: 0,
                heading: 0.0
            },
            mobs: [
            ],
            reports: [

            ],
            cache: [],
            item: {
                world: "Hades",
                area: "laaaa",
                instance: 1
            },
            updated: false,
            locked: false,
            collapsed: false,
            target: null,
            entries: null,
            myEntry: null,
            hide: false,
            strings: {},
        }
    },
    methods: {
        update: function(e) {
            this.global = e.global
            this.zone = zones[String(e.global.zoneId)]
            if (this.zone == null) {
                this.$refs.canvas.draw(null)
                return
            }
            this.self = {
                name: e.self.name,
                worldId: e.self.worldId,
                x: (e.self.posX + this.zone.scale.offset)/50,
                y: (e.self.posY + this.zone.scale.offset)/50,
                z: (e.self.posZ),
                heading: e.self.heading
            }
            this.mobs = e.mobs.map(m => {
                const xdiff = Math.abs(m.posX-e.self.posX)
                const ydiff = Math.abs(m.posY-e.self.posY)
                const mobIndex = this.zone.mobs.findIndex(item => item.id == m.bNpcNameId)
                const mob2Index = this.zone.type==2 ? this.zone.mobs2.findIndex(item => item.id == m.bNpcNameId) : -1
                return {
                    id: m.bNpcNameId,
                    name: m.name,
                    x: (m.posX + this.zone.scale.offset)/50,
                    y: (m.posY + this.zone.scale.offset)/50,
                    z: (m.posZ),
                    heading: m.heading,
                    hpp: m.hpp,
                    distance: Math.sqrt(xdiff*xdiff+ydiff*ydiff),
                    distanceZ: m.posZ - e.self.posZ,
                    mobIndex: mobIndex,
                    mob2Index: mob2Index,
                    rank: mobIndex >= 0 ? (this.zone.mobs[mobIndex].rank) : 
                         (mob2Index >= 0 ? (this.zone.mobs2[mob2Index].rank) : undefined)
                }
            })

            this.mobs = this.mobs.map(m => {
                if (m.name == 'ウヌクアルハイ') {
                    m.mobIndex = 0
                    m.rank = 'S'
                }
                return m
            })

            const timestamp = new Date()
            //const rankedMobs = this.mobs.filter(m => m.mobIndex >= 0)
            const rankedMobs = this.mobs.filter(m => m.rank != undefined)
            rankedMobs.forEach(m => {
                const updateReport = this.reports.find(r => {
                    return r.mob.id == m.id && 
                        r.worldId == this.global.currentWorldId &&
                        r.zoneId == this.global.zoneId
                })
                if (updateReport) {
                    if (updateReport.mob.hpp == 1.0 && m.hpp < 1.0 && (m.rank == 'S' || m.rank == 'SS')) {
                        window.callOverlayHandler({ call: 'say', text: `討伐開始` })
                    }
                    else if (updateReport.mob.hpp > 0.0 && m.hpp == 0.0) {
                        if (m.mobIndex >= 0 && m.rank == 'B') {
                            setTimeout(function() {
                                window.callOverlayHandler({ call: 'say', text: `Bモブリポップ` })
                            }, 11000)
                        }
                        updateReport.tod = timestamp
                    }
                    updateReport.mob = m
                    updateReport.lastUpdate = timestamp
                    updateReport.locationIndex = this.getNearestLocationIndex(m)
                }
                else {
                    window.callOverlayHandler({ call: 'say', text: `${m.name} ${m.rank}` })
                    this.reports.push({
                        mob: m,
                        lastUpdate: timestamp,
                        locationIndex: this.getNearestLocationIndex(m),
                        worldId: this.global.currentWorldId,
                        zoneId: this.global.zoneId,
                        tod : m.hpp > 0 ? undefined : timestamp
                    })
                    console.log('added ' + m.hpp, this.reports)
                }
            })
            this.reports = this.reports.filter(r => {
                return (r.lastUpdate >= timestamp || r.tod == null)
            })
            this.$refs.canvas.draw()
        },
        processChangeZone(e) {
            this.zone = e.zone
            console.log(e)
        },
        processChangeZoneInstance(e) {
            console.log(e)
        },
        processLogLine(e) {
            //console.log(e)
        },
        updateState(e) {
            this.locked = e.detail.isLocked;
        },
        getNearestLocationIndex(loc) {
            // this.zone内で一番近いLocationのIndexを返す
            // 近いLocationがない場合は-1を返す
            if (!this.zone) {
                return -1
            }
            let minDistance = 50
            let minIndex = -1
            this.zone.mobLocations.forEach((v, i) => {
                const distance = Math.sqrt((v.x-loc.x)*(v.x-loc.x)+
                                        (v.y-loc.y)*(v.y-loc.y));
                if (distance < minDistance) {
                    minDistance = distance
                    minIndex = i
                }
            })
            return (minDistance < 0.9) ? minIndex : -1;
        }
    },
    created() {
        //window.callOverlayHandler({ call: 'centurionSay', text: 'はじまるよ' })
        window.callOverlayHandler({ call: 'getLanguage' }).then((msg) => {
            if (msg.language in localeStrings)
                this.strings = localeStrings[msg.language];
            else
                this.strings = localeStrings['English'];
            this.language = msg.language;

            window.addOverlayListener('HuntMobData', this.update);
            window.addOverlayListener('ChangeZone', this.processChangeZone);
            window.addOverlayListener('ChangeZoneInstance', this.processChangeZoneInstance);
            window.addOverlayListener('LogLine', this.processLogLine);
            document.addEventListener('onOverlayStateUpdate', this.updateState);
            window.startOverlayEvents();
        });
    },
    destroyed: function () {
        window.removeOverlayListener('HuntMobData', this.update);
        window.removeOverlayListener('ChangeZone', this.processChangeZone);
        window.removeOverlayListener('ChangeZoneInstance', this.processChangeZoneInstance);
        window.removeOverlayListener('LogLine', this.processLogLine);
        document.removeEventListener('onOverlayStateUpdate', this.updateState);
        console.log('destroyed')
    },
    template: `
        <v-app id="app">
            <header-component v-bind:global="global" v-bind:self="self" />
            <canvas-component ref="canvas" v-bind:global="global" v-bind:self="self" v-bind:mobs="mobs" v-bind:zone="zone" v-bind:reports="reports"/>
            <footer-component v-bind:global="global" v-bind:self="self" v-bind:reports="reports" />
        </v-app>
    `
})