<template>
    <div id="pages">
        <div class="container">
            <div class="row">

            </div>
        </div>
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
    @import "../../static/css/ele.css";
    #pages {
        position: absolute;
        top:0;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        overflow-y: scroll;
        display: block;
        margin: 0 auto;
        background-color: #F2F2F2;
        padding-bottom: 80px;
    }
</style>
