<template>
    <div id="pages">
        <div class="four-grids">
            <div class="col-md-3 four-grid">
                <div class="four-agileits">
                    <div class="icon">
                        <img src="static/images/main/m1.png" alt="">
                    </div>
                    <div class="four-text">
                        <h3>用户数</h3>
                        <h4>{{User}}</h4>
                    </div>
                </div>
            </div>
            <div class="col-md-3 four-grid">
                <div class="four-agileinfo">
                    <div class="icon">
                        <img src="static/images/main/m2.png" alt="">
                    </div>
                    <div class="four-text">
                        <h3>新用户</h3>
                        <h4>{{Clients}}</h4>
                    </div>
                </div>
            </div>
            <div class="col-md-3 four-grid">
                <div class="four-w3ls">
                    <div class="icon">
                        <img src="static/images/main/m3.png" alt="">
                    </div>
                    <div class="four-text">
                        <h3>拨打数</h3>
                        <h4>{{Projects}}</h4>
                    </div>
                </div>
            </div>
            <div class="col-md-3 four-grid">
                <div class="four-wthree">
                    <div class="icon">
                        <img src="static/images/main/m4.png" alt="">
                    </div>
                    <div class="four-text">
                        <h3>充值金额</h3>
                        <h4>{{Old}}</h4>
                    </div>
                </div>
            </div>
            <div class="clearfix"></div>
        </div>
        <mainChart ></mainChart>
        <div class="main_bottom">
            <div class="col-sm-4 wthree-crd">
                <div class="card">
                    <div class="card-body">
                        <div class="widget widget-report-table">
                            <header class="widget-header m-b-15">
                            </header>
                            <div class="row m-0 md-bg-grey-100 p-l-20 p-r-20">
                                <div class="col-md-6 col-sm-6 col-xs-6 w3layouts-aug">
                                    <h3>{{time}}</h3>
                                </div>
                                <div class="col-md-6 col-sm-6 col-xs-6 ">
                                    <h2 class="text-right c-teal f-300 m-t-20">￥{{money}}</h2>
                                </div>
                            </div>
                            <div class="widget-body p-15">
                                <table class="table table-bordered">
                                    <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>项目</th>
                                        <th>合计</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="table in tables">
                                        <td>{{table.id}}</td>
                                        <td>{{table.name}}</td>
                                        <td>{{table.amount}}</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-4 w3-agileits-crd">

                <div class="card card-contact-list">
                    <div class="agileinfo-cdr">
                        <div class="card-header">
                            <h3>联系人</h3>
                        </div>
                        <div class="card-body p-b-20">
                            <div class="list-group">
                                <a class="list-group-item media" href="" v-for="con in cons">
                                    <div class="pull-left">
                                    </div>
                                    <div class="media-body">
                                        <div class="pull-left">
                                            <div class="lg-item-heading">{{con.name}}</div>
                                            <small class="lg-item-text">{{con.mail}}</small>
                                        </div>
                                        <div class="pull-right">
                                            <div class="lg-item-heading">{{con.depart}}</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-4 w3-agile-crd">
                <div class="card">
                    <div class="card-body card-padding">
                        <div class="widget">
                            <header class="widget-header">
                                <h4 class="widget-title">最新活动</h4>
                            </header>
                            <hr class="widget-separator">
                            <div class="widget-body">
                                <div class="streamline">
                                    <div  :class="filterColor(act.level)"  v-for="act in actives">
                                        <div class="sl-content">
                                            <small class="text-muted">{{act.past_time}} 分钟之前</small>
                                            <p>{{act.active}}</p>
                                        </div>
                                    </div>
                                    <!--<div class="sl-item sl-danger">-->
                                        <!--<div class="sl-content">-->
                                            <!--<small class="text-muted">25 分钟之前</small>-->
                                            <!--<p>Jane has sent a request for access</p>-->
                                        <!--</div>-->
                                    <!--</div>-->
                                    <!--<div class="sl-item sl-success">-->
                                        <!--<div class="sl-content">-->
                                            <!--<small class="text-muted">40 分钟之前</small>-->
                                            <!--<p>Kate added you to her team</p>-->
                                        <!--</div>-->
                                    <!--</div>-->
                                    <!--<div class="sl-item">-->
                                        <!--<div class="sl-content">-->
                                            <!--<small class="text-muted">45 minutes ago</small>-->
                                            <!--<p>John has finished his task</p>-->
                                        <!--</div>-->
                                    <!--</div>-->
                                    <!--<div class="sl-item sl-warning">-->
                                        <!--<div class="sl-content">-->
                                            <!--<small class="text-muted">55 分钟之前</small>-->
                                            <!--<p>Jim shared a folder with you</p>-->
                                        <!--</div>-->
                                    <!--</div>-->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import mainChart from  '../../src/components/mainChart';
    import axios from 'axios';
    let qs = require('qs');
    export default {
        data() {
            return {
                User:'',
                Clients:'',
                Projects:'',
                Old:'',
                time:'',
                money:'',
                tables:[],
                actives:[],
                cons:[]
            }
        },
        mounted() {
//            主要数据获取
            this.mainQuery();
//            首页盈利数据
            this.profitQuery();
//            首页联系人数据
            this.contactQuery();
//            首页最新活动数据
            this.activeQuery();
        },
        methods: {
            mainQuery(){
                const that = this;
                let url = '/?ctl=ajax&mod=index&act=mainInfo';
                let param = {};
                let postdata = qs.stringify(param);
                axios.post(url, postdata).then(function(data){
                    let json = data.data;
                    if(json.code == 0){
                        that.User = json.rs[0].User;
                        that.Clients = json.rs[0].Clients;
                        that.Projects = json.rs[0].Projects;
                        that.Old = json.rs[0].Old;
                    }else{
                        that.$message.error(json.memo);
                    }
                },function(response){
                    console.info(response);
                })
            },
            profitQuery(){
                const that = this;
                let url = '/?ctl=ajax&mod=index&act=profitQuery';
                let param = {};
                let postdata = qs.stringify(param);
                axios.post(url, postdata).then(function(data){
                    let json = data.data;
                    if(json.code == 0){
                        that.time = json.rs[0].time;
                        that.money = json.rs[0].money;
                        that.tables = json.rs[0].tables;
                    }else{
                        that.$message.error(json.memo);
                    }
                },function(response){
                    console.info(response);
                })
            },
            contactQuery(){
                const that = this;
                let url = '/?ctl=ajax&mod=index&act=contactQuery';
                let param = {};
                let postdata = qs.stringify(param);
                axios.post(url, postdata).then(function(data){
                    let json = data.data;
                    if(json.code == 0){
                        that.cons = json.rs[0].cons;
                    }else{
                        that.$message.error(json.memo);
                    }
                },function(response){
                    console.info(response);
                })
            },
            activeQuery(){
                const that = this;
                let url = '/?ctl=ajax&mod=index&act=activeQuery';
                let param = {};
                let postdata = qs.stringify(param);
                axios.post(url, postdata).then(function(data){
                    let json = data.data;
                    if(json.code == 0){
                        that.actives = json.rs[0].actives;
                    }else{
                        that.$message.error(json.memo);
                    }
                },function(response){
                    console.info(response);
                })
            },
            filterColor: function (cube) {
                let color = '';
                switch (parseInt(cube)){
                    case 1:
                        color = 'sl-item sl-primary';
                        break;
                    case 2:
                        color = 'sl-item sl-danger';
                        break;
                    case 3:
                        color = 'sl-item sl-success';
                        break;
                    case 0:
                        color = 'sl-item sl-warning';
                        break;
                }
                return color
            }
        },
        components: {
            mainChart
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    @import "../../static/css/bootstrap.css";
    @import "../../static/css/ui.css";
    @import "../../static/css/main.css";

    #pages {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        overflow: hidden;
        overflow-y: scroll;
        display: block;
        margin: 0 auto;
        background-color: #edecec;
        padding-left: 10px;
        padding-right: 40px;
        padding-bottom: 20px;
    }
</style>
