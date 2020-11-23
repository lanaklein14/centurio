Vue.component('footer-component', {
    props: ['global', 'reports', 'self'],
    filters: {
        formatTime(dateTime) {
            return dateTime ? moment(dateTime).format('HH:mm:ss') : '-'
        }
    },
    methods: {
        
    },
    computed: {
    },
    template: `
        <div class="footer">
            <table border="1">
                <tr>
                <th>name</th>
                <th>x</th>
                <th>y</th>
                <th>hpp</th>
                <th>lastUpdate</th>
                <th>tod</th>
                <th>locIndex</th>
                <th>worldId</th>
                <th>zoneId</th>
                <th>distanceZ</th>
                </tr>
                <tr v-for="(report, index) in this.reports">
                <td>{{report.mob.name}}</td>
                <td>{{Math.floor(report.mob.x*10)/10}}</td>
                <td>{{Math.floor(report.mob.y*10)/10}}</td>
                <td>{{Math.floor(report.mob.hpp*1000)/10}}%</td>
                <td>{{report.lastUpdate | formatTime}}</td>
                <td>{{report.tod | formatTime}}</td>
                <td>{{report.locationIndex}}</td>
                <td>{{report.worldId}}</td>
                <td>{{report.zoneId}}</td>
                <td>{{Math.floor(report.mob.distanceZ*10)/10}}</td>
                </tr>
            </table>    
            <h4>{{global.countPcs}}</h4>
        </div>
    `
})
