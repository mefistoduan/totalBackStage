<template>
    <div class="chart_container">
        <div class="Chart">
            <Line-example
                    :url="url"
            ></Line-example>

        </div>
    </div>
</template>

<script>
    import LineExample from './LineExample'
    import axios from 'axios';
    let qs = require('qs');
    export default {
        data () {
            return {
                dataPoints: null,
                url: '/?ctl=ajax&mod=index&act=mainChart',
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