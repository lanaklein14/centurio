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
    data: {
        zone: null,
        global: {},
        self: {
            name: 'unknown',
            worldId: 0,
            x: 0,
            y: 0,
            //z: 0,
            heading: 0.0
        },
        mobs: [
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
                heading: e.self.heading
            }
            this.mobs = e.mobs.map(m => {
                const xdiff = Math.abs(m.posX-e.self.posX)
                const ydiff = Math.abs(m.posY-e.self.posY)
                return {
                    id: m.bNpcNameId,
                    name: m.name,
                    x: (m.posX + this.zone.scale.offset)/50,
                    y: (m.posY + this.zone.scale.offset)/50,
                    heading: m.heading,
                    hpp: m.hpp,
                    distance: Math.sqrt(xdiff*xdiff+ydiff+ydiff)
                }
            })
            this.$refs.canvas.draw()
            //console.log(this.mobs)
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
    },
    created() {
        window.callOverlayHandler({ call: 'centurionSay', text: 'はじまるよ' })
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
        <v-app>
            <header-component v-bind:global="global" v-bind:self="self" />
            <canvas-component ref="canvas" v-bind:global="global" v-bind:self="self" v-bind:mobs="mobs" v-bind:zone="zone"/>
        </v-app>
    `
})