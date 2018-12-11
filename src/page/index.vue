<template>
    <div id="index">
        <navside @navOpen="navOpen" ref="mychild"></navside>
        <headside @left_hide_func="left_hide"  @navOpen="navOpen" @right_hide_func="right_hide" ></headside>
        <footside></footside>
        <div id="tabs" :class="[{'tabwild':tabwildState == 0},'ui-tabs', 'ui-widget', 'ui-widget-content', 'ui-corner-all']">
            <ul class="ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all ui-sortable"
                role="tablist">
                <li :class="{'ui-state-default ui-corner-top  ui-sortable-handle':true,'ui-tabs-active ui-state-active':index == thisClick}"
                    v-for="(tab,index) in tabs">
                    <a class="tabref ui-tabs-anchor" @click="openNav(tab.link,index)" :href="tab.link">{{tab.name}}</a>
                    <span class="el-icon-close" @click="closeNav(index)"></span>
                </li>
            </ul>
            <div id="tabs-0" aria-labelledby="ui-id-1" class="ui-tabs-panel ui-widget-content ui-corner-bottom"
                 role="tabpanel" aria-hidden="false">
                <div class="tabIframeWrapper">
                    <iframe :class="[{'iframetab_wild':tabwildState == 0},'iframetab']" :src="thisIframe">Load Failed?</iframe>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import navside from '../../src/components/navside';
    import headside from '../../src/components/headside';
    import footside from '../../src/components/footside';

    export default {
        data() {
            return {
                tabs: [
                    {name: '首页', link: '/#/main', icon: 'el-icon-menu'},
                ],
                thisIframe: '/#/main',
                thisClick: 0,
                tabwildState: 1,
            }
        },
        mounted() {

        },
        methods: {
            left_hide: function () {
                this.tabwildState = 0;
                this.$refs.mychild.hidePanel();
            },
            right_hide: function () {
                this.tabwildState = 1;
                this.$refs.mychild.showPanel();
            },
            openNav: function (link, index) {
                this.thisClick = index;
                this.thisIframe = link
            },
            closeNav: function (index) {
                if (index == 0) {
                    this.thisIframe = '/#/main'
                } else {
                    this.tabs.splice(index, index + 1);
                    this.thisIframe = '/#/main'
                }
            },
            navOpen: function (data) {
                let that = this;
                let r = [];
                let array = that.tabs;
                array.push({name: data.name, link: data.link});
                for (var i = 0, l = array.length; i < l; i++) {
                    for (var j = i + 1; j < l; j++)
                        if (array[i].link === array[j].link) j = ++i;
                    r.push(array[i]);
                }
                that.tabs = r;
                this.thisClick = that.tabs.length - 1;
                this.thisIframe = data.link;
            }
        },
        components: {
            navside, headside, footside
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    @import "../../static/css/customer.css";
    @import "../../static/css/bootstrap.css";
    @import "../../static/css/index.css";
    @import "../../static/css/ui.css";

    #index {
        position: absolute;
        top: 0;
        bottom: 0px;
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

    #tabs {
        position: absolute;
        top: 40px;
        height: 100%;
        overflow: hidden;
    }
    .tabwild {
        margin-left: 0!important;
    }

    .ui-tabs .ui-tabs-panel {
        width: 100%;
        height: 100%;
        overflow: hidden;
        display: block;
        margin: 0 auto;
    }

    .tabIframeWrapper {
        position: absolute;
        top: 45px;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        overflow: hidden;
        display: block;
        margin: 0 auto;
        background: #fff;
    }

    .iframetab {
        position: absolute;
        top: 0px;
        bottom: 10px;
        left: 0;
        right: 0;
        width: 90%;
        height: 100%;
        overflow: hidden;
        float: left;
    }
    .iframetab_wild {
        width: 100%!important;
    }

    .ui-tabs .ui-tabs-nav li.ui-tabs-active {

    }
</style>
