import {Doughnut} from './BaseCharts'

export default {
    extends: Doughnut,
    props: {
        firstDate: {  // 必须提供字段
            required: true,
            default: false
        },
        labels: {
            type: Array
        },
        width: {
            default: 140,
            type: Number
        },
        height: {
            default: 140,
            type: Number
        },
    },
    watch: {
        // 动态加载
        firstDate(curVal, oldVal) {
            const that = this;
            if (curVal) {
                this.firstDate = curVal;
                that.renderChart({
                    datasets: this.firstDate,
                    labels: this.labels
                }, {
                    responsive: true,
                    maintainAspectRatio: false,
                    cutoutPercentage: 80,//环粗细
                    showTooltips:true,
                    title: {
                        display: true,
                        text: 'Chart.js Doughnut Chart'
                    },
                    tooltips:{
                        enabled:true,
                        intersect:true
                    },
                    legend: {
                        position:'bottom',
                        labels: {
                            boxWidth:12,
                            fontSize:10,
                            labels: {
                                fontColor: 'rgb(0, 0, 0)'
                            }
                        }
                    },
                })
            }
        },
    },
    mounted() {
        const that = this;
        that.renderChart({
            datasets: this.firstDate,
            labels: this.labels
        }, {
            responsive: true,
            maintainAspectRatio: false,
            cutoutPercentage: 80,//环粗细
            showTooltips:true,
            title: {
                display: true,
                text: 'Chart.js Doughnut Chart'
            },
            tooltips:{
                enabled:true,
                intersect:true
            },
            legend: {
                position:'bottom',
                labels: {
                    boxWidth:12,
                    fontSize:10,
                    labels: {
                        fontColor: 'rgb(0, 0, 0)'
                    }
                }
            },
        })
    }
}
