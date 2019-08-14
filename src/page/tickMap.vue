<template>
    <div class="container">
        <mapDistrict @drag="dragMap" lat="36.655859" lng="117.064164"></mapDistrict>
    </div>
</template>

<script>
    let qs = require('qs');
    import mapDistrict from '../../src/components/mapDistrict';

    export default {
        data() {
            return {
            }
        },
        mounted() {
        },
        methods: {
            dragMap() {
            }
        },
        components: {
            mapDistrict
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    @import "../assets/css/panel.css";

    .container {
        width: 100%;
        overflow: hidden;
        display: block;
        margin: 0 auto;
        padding: 20px;
    }

</style>
