<template>
    <div id="navside" :class="[{'wild':wildState == 0},{'short':wildState != 0}]">
        <header class="logo-env">
            <div class="logo">
                <router-link :to="{path: '/main'}" class="logo-expanded">
                    <img src="/static/images/comm/logo.svg" alt="">
                </router-link>
            </div>
            <ul id="main-menu" class="main-menu" data-clmid="0" data-url="">
                <li v-for="(nav,index) in navs" :key="index">
                    <a @click="handleNodeClick(nav,index,nav.child)">
                        <i :class="nav.icon"></i>
                        <span class="title">{{nav.name}}</span>
                    </a>
                    <ul class="hide_tap" v-if="nav.child" v-show="navshow[index]">
                        <li v-for="child in nav.child">
                            <a @click="handleNodeClick(child,index)">
                                <i class="el-icon-info"></i>
                                <span class="title">{{child.name}}</span>
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </header>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                wildState:0,
                navs: [
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

        },
        methods: {
            hidePanel() {
                this.wildState = 1;
            },
            showPanel() {
                this.wildState = 0;
            },
            handleNodeClick: function (data, index, child) {
                let that = this;
                if (child) {
                    this.navshowClick(index);
                } else {
                    if (data.name == '退出') {
                        this.$confirm('此操作将退出当前账号, 是否继续?', '提示', {
                            confirmButtonText: '确定',
                            cancelButtonText: '取消',
                            type: 'warning'
                        }).then(() => {
//                           ajax todo
                            that.$router.push({path: '/login'});
                        }).catch(() => {
                        });
                    } else {
                        console.log(data);
                        this.$emit('navOpen', data);
                    }
                }

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
