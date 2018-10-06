<template>
    <div class="container">
        <div class="Chart">
            <doughnut-example
                :firstDate="firstDate"
                :labels="labels"
                :width="1200"
                :height="200"
            />
        </div>
    </div>
</template>

<script>
    import DoughnutExample from './DoughnutExample'
    export default {
        data () {
            return {
                dataPoints: null,
                height: 20,
                labels:['1月', '2月', '3月', '4月'],
                firstDate: [
                    {
                        backgroundColor: [
                            '#41B883',
                            '#E46651',
                            '#00D8FF',
                            '#DD1B16'
                        ],
                        data: [40, 20, 80, 10]
                    },
                ]
            }
        },
        components: {
            DoughnutExample
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