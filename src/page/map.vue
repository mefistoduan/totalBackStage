<template>
    <div class="container">
        <mapDrag @drag="dragMap" lat="36.655859" lng="117.064164"></mapDrag>
    </div>
</template>

<script>
    import axios from 'axios';
    let qs = require('qs');
    import Global from '../Global.js'
    import mapDrag from '../../src/components/mapDrag';
export default {
    data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
    },
    mounted() {
    },
    methods: {
        dragMap(){
        }
    },
    components: {
        mapDrag
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    @import "../assets/css/panel.css";
</style>
