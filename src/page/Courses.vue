<template>
    <div id="pages">
        <div class="tag">
            <el-tag>标签一</el-tag>
            <el-tag type="success">标签二</el-tag>
            <el-tag type="info">标签三</el-tag>
            <el-tag type="warning">标签四</el-tag>
            <el-tag type="danger">标签五</el-tag>
        </div>
        <div class="text_container">
            <ul class="row">
                <div class="col-sm-4 col-xl-4" v-for="item in items">
                    <div class="card mb-4">
                        <div class="w-100">
                            <a href="javascript:void(0)" class="card-img-top d-block ui-rect-60 ui-bg-cover" style="background-image: url('../../static/images/courses/1.jpg');">
                                <div class="d-flex justify-content-between align-items-end ui-rect-content p-3">
                                    <div class="flex-shrink-1">
                                        <span class="badge badge-primary">Java</span>
                                    </div>
                                    <div class="text-big">
                                        <div class="badge badge-dark font-weight-bold">$15.99</div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="card-body">
                            <h5 class="mb-3">
                                <a href="javascript:void(0)" class="text-dark">{{item.title}}</a>
                            </h5>
                            <p class="text-muted mb-3">{{item.sub}}</p>
                            <div class="media">
                                <div class="media-body">
                                    <el-rate
                                            v-model="item.star"
                                            disabled
                                            show-score
                                            text-color="#ff9900"
                                    >
                                    </el-rate>
                                </div>
                                <div class="text-muted small">
                                    <i class="ion ion-md-time text-primary"></i>
                                    <span>{{item.time}}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ul>
            <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="1000">
            </el-pagination>
        </div>
    </div>
</template>

<script>
export default {
    data () {
    return {
        items:[
            {title:'Complete Java Masterclass',sub:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec odio ligula, rhoncus scelerisque ullamcorper iaculis.',star:3,time:'12h'},
            {title:'Complete Java Masterclass',sub:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec odio ligula, rhoncus scelerisque ullamcorper iaculis.',star:2,time:'12h'},
            {title:'Complete Java Masterclass',sub:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec odio ligula, rhoncus scelerisque ullamcorper iaculis.',star:5,time:'12h'},
            {title:'Complete Java Masterclass',sub:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec odio ligula, rhoncus scelerisque ullamcorper iaculis.',star:4,time:'12h'},
            {title:'Complete Java Masterclass',sub:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec odio ligula, rhoncus scelerisque ullamcorper iaculis.',star:5,time:'12h'},
            {title:'Complete Java Masterclass',sub:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec odio ligula, rhoncus scelerisque ullamcorper iaculis.',star:3,time:'12h'},
            ]
    }
    },
    mounted() {

    },
    methods: {

    },
    components: {

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    @import "../../static/css/bootstrap.css";
    @import "../../static/css/ele.css";
    #pages {
        position: absolute;
        top:0;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        overflow-y: scroll;
        display: block;
        margin: 0 auto;
        background-color: #F2F2F2;
        padding-bottom: 80px;
    }
    .tag {
        width: 96%;
        overflow: hidden;
        display: block;
        margin: 0 auto;
        margin-top: 20px;
        margin-bottom: 20px;
    }
    .tag .el-tag {
        float: left;
        margin-left: 10px;
        margin-right: 10px;
    }
    .w-100 {
        width: 100% !important;
    }
    .d-block {
        display: block !important;
    }
    .ui-rect-60 {
        padding-top: 60% !important;
    }
    .ui-bg-cover {
        background-color: transparent;
        background-position: center center;
        background-size: cover;
    }
    .card-img-top {
        width: 100%;
        border-top-left-radius: calc(.25rem - 1px);
        border-top-right-radius: calc(.25rem - 1px);
    }
    .badge-primary {
        background-color: #26B4FF;
        color: #fff;
        margin-left: 20px;
        margin-bottom: 10px;
        float: left;
        margin-left: 20px;
    }
    .badge {
        display: inline-block;
        min-width: 10px;
        padding: 3px 7px;
        font-size: 12px;
        font-weight: bold;
        line-height: 1;
        vertical-align: baseline;
        white-space: nowrap;
        text-align: center;
        border-radius: 10px;
    }
    .text-big .badge {
        float: right;
        margin-right: 10px;
    }
    .flex-shrink-1 {
        width: 50%;
        float: left;
        -ms-flex-negative: 1 !important;
        flex-shrink: 1 !important;
    }
    .text-big {
        width: 50%;
        float: right;
        font-size: 112% !important;
    }
    .ui-rect-content {
        position: relative;
        bottom: 10px;
        width: 100%;
        overflow: hidden;
        display: block;
        margin: 0 auto;
    }
    .card-body {
        -webkit-box-flex: 1;
        -ms-flex: 1 1 auto;
        flex: 1 1 auto;
        padding: 1.5rem;
    }
    .text-muted {
        color: #a3a4a6 !important;
        text-align: left;
    }
    .text-dark {
        color: #4E5155 !important;
    }
    .ui-stars {
        display: inline-block;
        vertical-align: middle;
        white-space: nowrap;
    }
    .ui-star>*:first-child {
        z-index: 10;
        display: none;
        overflow: hidden;
        color: #FFE924;
    }
    .ui-star>*, .ui-star>*::before, .ui-star>*::after {
        position: absolute;
        left: .55em;
        height: 100%;
        font-size: 1em;
        line-height: 1;
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%);
    }
    .media-body {
        width: 40%;
        float: left;
    }
    .small {
        width: 40%;
        float: right;
        text-align: right;
    }
</style>
