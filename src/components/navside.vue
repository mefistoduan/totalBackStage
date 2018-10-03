<template>
    <div id="navside">
        <header class="logo-env">
            <div class="logo">
                <router-link :to="{path: '/main'}" class="logo-expanded">
                    <img src="/static/images/comm/logo.svg" alt="">
                </router-link>
            </div>
                <ul id="main-menu" class="main-menu" data-clmid="0" data-url="">
                    <li v-for="(nav,index) in navs" :key="index">
                        <a @click="handleNodeClick(nav,nav.child,index)">
                           <i :class="nav.icon"></i>
                            <span class="title">{{nav.name}}</span>
                        </a>
                        <ul class="hide_tap" v-if="nav.child" v-show="navshow[index]">
                            <li v-for="child in nav.child">
                                <a @click="handleNodeClick(child)">
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
    data () {
    return {
        navs:[
            {name:'首页',link:'/#',icon:'el-icon-menu'},
            {name:'费用管理',link:'/#',icon:'el-icon-menu',
                child:[
                    {name:'充值缴费',link:'/#/recharge'},
                    {name:'充值记录',link:'/#/bill'},
                    ]
            },
            {name:'图表信息',link:'/#',icon:'el-icon-menu',
                child:[
                    {name:'柱状图',link:'/#/chart_bar'},
                    {name:'线型图',link:'/#/chart_line'},
                    {name:'环形图',link:'/#/chart_dona'},
                ]
            },
            {name:'退出',link:'/logout',icon:'el-icon-sold-out'},
        ],
        navshow:[],
    }
    },
    mounted() {
        let that = this;
        let navShowLength = this.navs.length;
        for (let i = 0; i < navShowLength ; i++) {
            that.navshow.push(false);
        }
    },
    methods: {
        handleNodeClick:function (data,child,index)  {
            if(child){
                this.navshowClick(index);
            }else{
                this.$emit('navOpen',data);
            }

        },
        navshowClick:function (index) {
            this.navshow = [false,false,false];
            this.navshow[index] = true;
        }
    },
    components: {

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    @import "../../static/css/bootstrap.css";
    @import "../../static/css/xenon-core.css";
    #navside{
        position: absolute;
        width: 230px;
        height: 100%;
        overflow: hidden;
        z-index: 2222;
        background-color: #2c2e2f;
        color: #333;
        text-align: center;
        line-height: 200px;
    }
    .logo {
        width: 100%;
        overflow: hidden;
        display: block;
        margin: 0 auto;
        margin-bottom: 30px;
        height: 140px;
    }
    #main-menu {
        width: 100%;
        overflow: hidden;
        display: block;
        margin: 0 auto;
        padding-left: 10px;
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
        height: 35px;
        line-height: 30px;
        padding-top: 10px;
        padding-left: 20px;
        padding-bottom: 5px;
        color: #979898;
        border-left: 4px solid #333333;
    }
    .main-menu li a:hover {
        background: #1b93e1;
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
