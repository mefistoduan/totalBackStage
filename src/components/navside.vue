<template>
    <div id="navside" :class="[{'wild':wildState == 0},{'short':wildState != 0}]">
        <header class="logo-env">
            <div class="logo">
                <router-link :to="{path: '/main'}" class="logo-expanded">
                    <img src="/static/images/comm/logo.svg" alt="">
                    <p>  {{ appname }}</p>
                </router-link>
            </div>
            <ul id="main-menu" class="main-menu" data-clmid="0" data-url="">
                <li v-for="(nav,index) in navs" :key="index" v-show="nav.show == 1">
                    <a @click="handleNodeClick(nav,index)">
                        <i :class="nav.icon"></i>
                        <span class="title">{{nav.clmname}}</span>
                    </a>
                    <ul class="hide_tap" v-show="childs && index == hasChilds" >
                        <li v-for="child in childs">
                            <a @click="handleNodeClick(child,index)">
                                <i class="el-icon-info"></i>
                                <span class="title">{{child.clmname}}</span>
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </header>
    </div>
</template>

<script>
    import axios from 'axios';
    let qs = require('qs');
    export default {
        data() {
            return {
                wildState:0,
                appname:'洗车服务管理平台',
                hasChilds:'',
                navs: [],
                childs: [],
                navs2: [
                    {name: '首页', link: '/#/main', icon: 'el-icon-menu'},
                    {
                        name: '常用页面', link: '/#', icon: 'el-icon-menu',
                        child: [
                            {name: '404', link: '/#/recharge'},
                            {name: '表格', link: '/#/table'},
                            {name: 'pricing', link: '/#/pricing'},
                            {name: 'form', link: '/#/form'},
                            {name: 'Courses', link: '/#/Courses'},
                            {name: 'message', link: '/#/message'},
                        ]
                    },
                    {
                        name: '常用组件', link: '/#', icon: 'el-icon-menu',
                        child: [
                            {name: 'typography', link: '/#/typography'},
                            {name: '按钮', link: '/#/button'},
                            {name: 'badges', link: '/#/badges'},
                            {name: 'dropdown', link: '/#/dropdown'},
                            {name: 'page', link: '/#/page'},
                        ]
                    }
                    ,
                    {
                        name: '图表', link: '/#', icon: 'el-icon-menu',
                        child: [
                            {name: '柱状图', link: '/#/chart_bar'},
                            {name: '线图', link: '/#/chart_line'},
                            {name: '环形图', link: '/#/chart_dona'},
                        ]
                    },
                    {name: '退出', link: '/logout', icon: 'el-icon-sold-out'},
                ],
                navshow: [false, false, false],
            }
        },
        mounted() {
            this.getTableQuery();
        },
        methods: {
            hidePanel() {
                this.wildState = 1;
            },
            showPanel() {
                this.wildState = 0;
            },
            getTableQuery(){
                let that = this;
                let url =  '/?ctl=ajax&mod=index&act=menu';
                let param = {
                    'clmid':0,
                };
                let postdata = qs.stringify(param);
                axios.post(url, postdata).then(function(data){
                    let json = data.data;
                    if(json.code == 0){
                        that.navs = json.rs;
                    }else{
                        that.navs = '';
                    }
                },function(response){
                    console.info(response);
                });
            },
            handleNodeClick: function (menudata, index) {
                let that = this;
                let clmid = menudata['clmid'];
                let url =  '/?ctl=ajax&mod=index&act=menu';
                let param = {
                    'clmid':clmid,
                };
                let postdata = qs.stringify(param);
                axios.post(url, postdata).then(function(data){
                    let json = data.data;
                    that.childs = json.rs;
                    that.hasChilds = index;
                    if(that.childs.length == 0){//没有子节点时才开始判断跳转
                        if (menudata.clmname == '退出系统') {
                            that.$confirm('此操作将退出当前账号, 是否继续?', '提示', {
                                confirmButtonText: '确定',
                                cancelButtonText: '取消',
                                type: 'warning'
                            }).then(() => {
                                that.$router.push({path: '/login'});
                            }).catch(() => {
//                            nothing
                            });
                        } else {
                            that.$emit('navOpen', menudata);
                        }
                    }
                },function(response){
                    console.info(response);
                });
            },
            navshowClick: function (index) {
                this.navshow = [false, false, false];
                this.navshow[index] = true;
            }
        },
        components: {}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    @import "../../static/css/bootstrap.css";
    @import "../../static/css/xenon-core.css";

    #navside {
        position: absolute;
        height: 100%;
        overflow: hidden;
        z-index: 2000;
        background-color: #2c2e2f;
        color: #333;
        text-align: center;
        line-height: 200px;
    }
    .wild {
        width: 230px;
    }
    .short {
        width: 0px!important;
    }
    .logo {
        width: 100%;
        overflow: hidden;
        display: block;
        margin: 0 auto;
        margin-bottom: 30px;
        height: 140px;
    }

    .main-menu li {
        width: 100%;
        overflow: hidden;
        display: block;
        margin: 0 auto;
        cursor: pointer;
    }

    .main-menu li a {
        width: 100%;
        overflow: hidden;
        display: block;
        margin: 0 auto;
        height: 30px;
        color: #979898;
        font-size: 18px;
    }

    .main-menu li a:hover {
        color: #fff;
    }

    .main-menu a i {
        float: left;
    }

    .main-menu a span {
        width: 100px;
        float: left;
        text-align: left;
        height: 20px;
        text-indent: 10px;
        line-height: 20px;
    }
</style>
