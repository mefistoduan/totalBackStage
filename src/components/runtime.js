import {Line} from './BaseCharts'
import axios from 'axios';

let qs = require('qs');
export default {
    extends: Line,
    data() {
        return {
            labels: [],
            datasets: [
                {
                    label: 'Data One',
                    data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
                }
            ],
        }
    },
    props: ['url'],
    mounted() {
        this.getInfo();
        this.timer = setInterval(() => {
            this.getDate()
        },800);

    },
    beforeDestroy () {
        clearInterval(this.getInfo);
    },
    methods:{
        getInfo(){
            this.renderChart({
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                datasets: this.datasets,
            }, {responsive: false, maintainAspectRatio: false})
        },
        getDate(){
            let newDate = parseInt(Math.random()*100);
            this.datasets[0].data.shift();
            this.datasets[0].data.push(newDate);
            this.runDate(this.datasets[0].data);
        },
    },
}
