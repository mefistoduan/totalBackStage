import {Line} from './BaseCharts'
import axios from 'axios';

let qs = require('qs');
export default {
    extends: Line,
    data() {
        return {
            labels: [],
            datasets: [],
        }
    },
    props: ['url'],
    mounted() {
        this.renderChart({
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [
                {
                    label: 'Data One',
                    backgroundColor: '#f87979',
                    data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
                }
            ]
        }, {responsive: false, maintainAspectRatio: false})
    }
}
