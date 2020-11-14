Vue.component('footer-component', {
    props: ['global'],
    filters: {
        name(id) {
            return `mob.${id}`
        }
    },
    methods: {
        
    },
    computed: {
        mobs() {
            const zone = zones[this.global.zoneId]
            return zone ? zone.mobs.map(m=>`mob.${m.id}`) : null
        },
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
        <div class="footer">
            <h4 v-for="mob in this.mobs">{{$t(mob)}}</h4>
        </div>
    `
})
