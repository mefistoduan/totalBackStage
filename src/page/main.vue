<template>
    <div id="pages">
        <navside></navside>
        <headside></headside>
        <footside></footside>
    </div>
</template>

<script>
    import navside from  '../../src/components/navside';
    import headside from  '../../src/components/headside';
    import footside from  '../../src/components/footside';
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
        navside,headside,footside
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
        background-color: #F2F2F2;
    }
</style>
