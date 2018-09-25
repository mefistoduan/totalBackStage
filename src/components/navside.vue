<template>
    <div id="navside">
        <header class="logo-env">
            <div class="logo">
                <router-link :to="{path: '/main'}" class="logo-expanded">
                    <img src="/static/images/comm/logo.svg" alt="">
                </router-link>
            </div>
                <ul id="main-menu" class="main-menu" data-clmid="0" data-url="">
                    <li>
                        <a href="javascript:void(null);" data-url="/?ctl=&amp;act=main" data-title="首页" id="">
                            <i class="fa-home"></i>
                            <span class="title">首页</span>
                        </a>
                    </li>
                 
                </ul>
        </header>
    </div>
</template>

<script>
export default {
    data () {
    return {
        defaultProps: {
            children: 'children',
            label: 'label'
        }
    }
    },
    mounted() {

    },
    methods: {
        handleNodeClick(data) {
            console.log(data);
            this.$emit('navOpen');
        }
    },
    components: {

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
        height: 140px;
    }
</style>
