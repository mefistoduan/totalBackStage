<template>
    <div id="pages">
        <div class="container">
            <div class="demo-image__placeholder">
                <div class="block">
                    <span class="demonstration">默认</span>
                    <el-image :src="src"
                              @click="showBig(src)"
                    ></el-image>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    let qs = require('qs');
    import Global from '../Global.js'
export default {
    data () {
    return {
        src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
    }
    },
    mounted() {

    },
    methods: {
        // showBig
        showBig(src){
            this.$alert('<span style="width: 100%;height: 500px;display: block;overflow-y: scroll"><img src="'+src+'" width="100%"/></span>', {
                dangerouslyUseHTMLString: true
            });
        },
    },
    components: {

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    @import "../assets/css/panel.css";
</style>
