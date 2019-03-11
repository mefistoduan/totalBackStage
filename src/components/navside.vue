<template>
    <div id="navside" :class="[{'wild':wildState == 0},{'short':wildState != 0}]">
        <header class="logo-env">
            <div class="logo">
                <router-link :to="{path: '/main'}" class="logo-expanded">
                    <img src="/static/images/comm/logo.png" alt="">
                    <p>  {{ appname }}</p>
                </router-link>
            </div>
            <ul id="main-menu" class="main-menu" data-clmid="0" data-url="">
                <li v-for="(nav,index) in navs" :key="index" >
                    <a @click="handleNodeClick(nav,index)">
                        <i :class="nav.icon"></i>
                        <span class="title" :data-url="nav.clmurl">{{nav.clmname}}</span>
                        <div v-if="nav.childs != ''  && nav.clmname != '退出系统' && nav.clmname != '首页' ">
                            <i class="el-icon-arrow-up" v-if="childs && index == hasChilds && showChilds"></i>
                            <i class="el-icon-arrow-down" v-else></i>
                        </div>
                    </a>
                    <ul class="hide_tap" v-show="childs && index == hasChilds && showChilds" >
                        <li v-for="(child,j) in nav.childs" v-bind:key="j" >
                            <a @click="handleNodeClick(child,index)">
                                <i class="el-icon-info"></i>
                                <span class="title" :data-url="child.clmurl">{{child.clmname}}</span>
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
                appname:'',
                showChilds:false,
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
                let url = '/?ctl=ajax&mod=index&act=menu';
                let param = {};
                let postdata = qs.stringify(param);
                axios.post(url, postdata).then(function(data){
                    let json = data.data;
                    if(json.length == 0){
                        // 无token退回登陆页
                        that.$router.push({path: '/login',query: { status: 1}});
                    }else{
                        that.navs = json.rs;
                    }
                },function(response){
                    console.info(response);
                });
            },
            handleNodeClick: function (menudata, index) {
                let that = this;
                let clmurl = menudata['clmurl'];
                if (menudata.clmname == '退出系统') {
                    that.$confirm('此操作将退出当前账号, 是否继续?', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {
                        that.logout();
                    }).catch(() => {
                        that.$message({
                            showClose: true,
                            message: '您已取消退出操作',
                        });
                    });
                } else {
                    if(!clmurl){
                        that.hasChilds = index;
                        that.showChilds =  !that.showChilds;
                    }else{
                        that.$emit('navOpen', menudata);
                    }
                }
            },
            navshowClick: function (index) {
                this.navshow = [false, false, false];
                this.navshow[index] = true;
            },
            // 注销
            logout(){
                const that = this;
                let url =  headapi+'?ctl=ajax&mod=index&act=logout';
                let param = {};
                let postdata = qs.stringify(param);
                axios.post(url, postdata).then(function(data){
                    let json = data.data;
                    that.$router.push({path: '/login',query: { status: 1}});
                },function(response){
                    console.info(response);
                })
            }
        },
        components: {}
    }
</script>

<style scoped>
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
