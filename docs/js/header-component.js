Vue.component('header-component', {
    props: ['global', 'self'],
    filters: {
        format(item) {
            
        },
        convertX(x) {
            return Math.floor(x * 100) / 100
        }
    },
    computed: {
        worldName() {
            let name = ''
            Object.values(datacenters).forEach(worlds => {
                const a = worlds.find(w => w.id == this.global.currentWorldId)
                if (a) {
                    name = a.name
                }
            })
            return name
        },
        zoneName() {
            const zone = zones[this.global.zoneId]
            return zone ? `zone.${this.global.zoneId}` : ''
        },
        zoneInstance() {
            return (this.global.zoneInstance > 0) ? `(ins${this.global.zoneInstance})` : ''
        }
    },
    template: `
        <div class="header">
            <h4>{{this.self.name}} in {{this.worldName}} {{$t(this.zoneName)}}{{this.zoneInstance}} </h4>
        </div>
    `
})
