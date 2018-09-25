<template>
    <div id="pages">
        <navside @navOpen="navOpen" ></navside>
        <headside></headside>
        <footside></footside>
        <div id="tabs" class="ui-tabs ui-widget ui-widget-content ui-corner-all">
            <ul class="ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all ui-sortable"
                role="tablist">
                <li class="ui-state-default ui-corner-top ui-tabs-active ui-state-active ui-sortable-handle" v-for="(tab,index) in tabs">
                    <a class="tabref ui-tabs-anchor" @click="openNav(tab.link)">{{tab.name}}</a>
                    <span class="el-icon-close" @click="closeNav(index)"></span>
                </li>
            </ul>
            <div id="tabs-0" aria-labelledby="ui-id-1" class="ui-tabs-panel ui-widget-content ui-corner-bottom"
                 role="tabpanel" aria-hidden="false">
                <div class="tabIframeWrapper">
                    <iframe class="iframetab" :src="thisIframe" >Load Failed?</iframe>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import navside from  '../../src/components/navside';
    import headside from  '../../src/components/headside';
    import footside from  '../../src/components/footside';
export default {
    data () {
    return {
        tabs:[
            {name:'首页',link:'main'}
            ],
        thisIframe:'/#'
    }
    },
    mounted() {

    },
    methods: {
        openNav:function (link) {
            this.thisIframe = '/' + link
        },
        closeNav:function (index) {
            this.tabs.splice(0, index + 1);
            this.thisIframe = '/#/main'
        },
        navOpen:function () {
            console.log(123);
        }
    },
    components: {
        navside,headside,footside
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    @import "../../static/css/customer.css";
    @import "../../static/css/bootstrap.css";
    @import "../../static/css/index.css";
    @import "../../static/css/ui.css";
    #pages {
        position: absolute;
        top:0;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        overflow: hidden;
        display: block;
        margin: 0 auto;
        background-color: #F2F2F2;
    }
    .el-icon-close {
        font-size: 12px;
        margin-top: 10px;
        margin-right: 5px;
    }
</style>
