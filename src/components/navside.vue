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
        box-shadow: 0px 0px 10px 0px rgb(58, 41, 31);
        -o-box-shadow: 0px 0px 10px 0px rgb(58, 41, 31);
        -webkit-box-shadow: 0px 0px 10px 0px rgb(58, 41, 31);
        -moz-box-shadow: 0px 0px 10px 0px rgb(58, 41, 31);
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
    .main-menu {
        width: 100%;
        overflow: hidden;
        display: block;
        margin: 0 auto;
    }

    .main-menu li {
        width: 100%;
        overflow: hidden;
        display: block;
        margin: 0 auto;
        cursor: pointer;
        border-bottom: 1px ridge rgba(255, 255, 255, 0.04);
    }

    .main-menu li a {
        width: 100%;
        overflow: hidden;
        display: block;
        margin: 0 auto;
        height: 46px;
        line-height: 46px;
        color: #fff;
    }

    .main-menu li a:hover {
        color: #fff;
        background-color: #008DE7;
    }

    .main-menu a i {
        float: left;
        margin-top: 14px;
        margin-left: 5px;
    }

    .main-menu a span {
        width: 100px;
        float: left;
        text-align: left;
        height: 46px;
        text-indent: 6px;
        line-height: 46px;
        font-size: 14px;
    }
    .el-icon-arrow-right {
        width: 10px;
        height: 13px;
        line-height: 13px;
        color: #fff;
        font-style: normal;
        float: right;
        font-size: 12px;
    }
</style>
