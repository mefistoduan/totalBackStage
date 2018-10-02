<template>
    <div class="container">
        <div class="Chart">
            <Line-example
                :firstDate="firstDate"
                :labels="labels"
                :width="1200"
                :height="200"
            />
        </div>
    </div>
</template>

<script>
    // import BarExample from './BarExample'
    import LineExample from './LineExample'
    export default {
        data () {
            return {
                dataPoints: null,
                height: 20,
                labels:['1月', '2月', '3月', '4月', '5月', '6月', '7月'],
                firstDate: [
                    {
                        label: '用户数',
                        backgroundColor: '#f87979',
                        data: [40, 39, 10, 40, 39, 30, 40]
                    },
                    {
                        label: '洗车数',
                        backgroundColor: 'rgb(162, 210, 0)',
                        data: [32, 39, 10, 44, 39, 80, 40]
                    },
                    {
                        label: '收入',
                        backgroundColor: 'rgb(92, 200, 234)',
                        data: [55, 32, 33, 40, 39, 62, 40]
                    }
                ]
            }
        },
        components: {
            // BarExample
            LineExample
        },
    }
</script>

<style>
    .container {
        width: 100%;
        height: 210px;
        margin: 0 auto;
    }
</style>