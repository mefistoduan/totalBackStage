<template>
    <div class="chart_container">
        <div class="Chart">
            <Line-example
                :firstDate="firstDate"
                :labels="labels"
            />
        </div>
    </div>
</template>

<script>
    import LineExample from './LineExample'
    export default {
        data () {
            return {
                dataPoints: null,
                height: 20,
                labels:['1月', '2月', '3月', '4月', '5月', '6月', '7月','8月', '9月', '10月'],
                firstDate: [
                    {
                        label: '用户数',
                        backgroundColor: 'rgba(32,163,222,0.4)',
                        data: [40, 39, 10, 40, 39, 30, 40,40, 139, 51,]
                    },
                    {
                        label: '洗车数',
                        backgroundColor: 'rgba(17,146,204,0.65)',
                        data: [32, 39, 10, 44, 39, 80, 40,140, 22, 30,]
                    },
                    {
                        label: '收入',
                        backgroundColor: 'rgba(16,132,184,7)',
                        data: [55, 32, 33, 40, 39, 62, 40,20, 39, 44,]
                    }
                ]
            }
        },
        components: {
            LineExample
        },
    }
</script>

<style>
    .chart_container {
        width: 100%;
        height: 400px;
        margin: 0 auto;
        background-color: #fff;
    }
</style>