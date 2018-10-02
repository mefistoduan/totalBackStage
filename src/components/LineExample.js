import { Line } from './BaseCharts'

export default {
    extends: Line,
    data () {
        return {
        }
    },
    props: {
        firstDate: {  // 必须提供字段
            required: true,
            default:false
        },
        labels: {  // 必须提供字段
            required: true,
            default:false
        },
    },
    mounted () {
        this.renderChart({
            labels: this.labels,
            datasets:this.firstDate
        }, {responsive: true, maintainAspectRatio: false})
    }
}