<template>
    <div class="container">
        <div class="tile">
            <h2 class="tile-title" style="font-size: 16px">探测中......</h2>
            <div class="p-t-10 p-r-5 p-b-5">
                <div id="dynamic-chart" style="height: 400px;background: black"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                data: [],
            }
        },
        mounted() {
            this.run();

        },
        beforeDestroy () {
            clearInterval(this.timer);
        },
        methods: {
            getRandomData() {
                let totalPoints = 300;
                let that = this;
                if (that.data.length > 0)
                    that.data = that.data.slice(1);

                while (that.data.length < totalPoints) {
                    var prev = that.data.length > 0 ? that.data[that.data.length - 1] : 50,
                        y = prev + Math.random() * 10 - 5;
                    if (y < 0) {
                        y = 0;
                    } else if (y > 90) {
                        y = 90;
                    }

                    that.data.push(y);
                }

                var res = [];
                for (var i = 0; i < that.data.length; ++i) {
                    res.push([i, that.data[i]])
                }
                // console.log(res);
                return res;
            },
            run() {
                let that = this;
                let plot = $.plot($("#dynamic-chart"), [ that.getRandomData()], {
                    series: {
                        label: "Data",
                        lines: {
                            show: true,
                            lineWidth: 1,
                            fill: 0.25,
                        },
                        color: 'rgba(255,255,255,0.2)',
                        shadowSize: 0,
                    },
                    yaxis: {
                        min: 0,
                        max: 200,
                        tickColor: 'rgba(255,255,255,0.15)',
                        font: {
                            lineHeight: 13,
                            style: "normal",
                            color: "rgba(255,255,255,0.8)",
                        },
                        shadowSize: 0,
                    },
                    xaxis: {
                        tickColor: 'rgba(255,255,255,0.15)',
                        show: true,
                        font: {
                            lineHeight: 13,
                            style: "normal",
                            color: "rgba(255,255,255,0.8)",
                        },
                        shadowSize: 0,
                        min: 0,
                        max: 300
                    },
                    grid: {
                        borderWidth: 1,
                        borderColor: 'rgba(255,255,255,0.25)',
                        labelMargin: 10,
                        hoverable: false,
                        clickable: false,
                        mouseActiveRadius: 6,
                    },
                    legend: {
                        show: false
                    },
                    clickable: false,
                    hoverable: false
                });

                this.timer = setInterval(() => {
                    plot.setData([that.getRandomData()]);
                    plot.draw();
                },1000);
            }
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
