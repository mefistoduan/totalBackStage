<template>
    <div id="pages">
        <h4 class="font-weight-bold py-3 mb-4">
            Typography
        </h4>
        <h6 class="text-muted small font-weight-bold py-3 my-4">
            Headings
        </h6>
        <h1>h1. Bootstrap heading
            <small class="text-muted">Secondary text</small>
        </h1>
        <h2>h2. Bootstrap heading
            <small class="text-muted">Secondary text</small>
        </h2>
        <h3>h3. Bootstrap heading
            <small class="text-muted">Secondary text</small>
        </h3>
        <h4>h4. Bootstrap heading
            <small class="text-muted">Secondary text</small>
        </h4>
        <h5>h5. Bootstrap heading
            <small class="text-muted">Secondary text</small>
        </h5>
        <h6>h6. Bootstrap heading
            <small class="text-muted">Secondary text</small>
        </h6>

        <h6 class="text-muted small font-weight-bold py-3 my-4">
            Addresses
        </h6>
        <address>
            <strong>Twitter, Inc.</strong>
            <br> 1355 Market Street, Suite 900
            <br> San Francisco, CA 94103
            <br>
            <abbr title="Phone">P:</abbr> (123) 456-7890
        </address>
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
    @import "../../static/css/customer.css";
    @import "../../static/css/bootstrap.css";
    @import "../../static/css/ui.css";
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
        padding-bottom: 20px;
    }
</style>
