<template>
    <div id="pages">
            <h5>404</h5>
            <span @click="$router.back(-1)">返回上一页</span>
    </div>
</template>

<script>
export default {
    data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
        background: url("../../static/images/four/bg.jpg")top center no-repeat;
        background-size: 100% 100%;
    }
    h5 {
        width: 100%;
        overflow: hidden;
        display: block;
        margin: 0 auto;
        font-size: 160px;
        text-align: center;
        margin-top: 10%;
        color: #fff;
        font-weight: normal;
    }
    span {
        width: 200px;
        height: 45px;
        overflow: hidden;
        display: block;
        margin: 0 auto;
        margin-top: 10%;
        background:#22beef ;
        color: #fff;
        font-size: 18px;
        text-align: center;
        border-radius: 250px;
        line-height: 45px;
        cursor: pointer;
    }
    span:hover {
        background: #2298c6;
    }
</style>
