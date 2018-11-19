<template>
    <div id="pages">
        <div class="container">
            <h1 class="text-center font-weight-bolder head_title"> Pricing plans </h1>
            <div class="text-center text-muted text-large font-weight-light">
                Choose the best plan that fits your needs
            </div>
            <div class="row no-gutters row-bordered ui-bordered text-center">
                <div class="d-flex col-md flex-column py-4">
                    <div class="display-1 text-primary my-4">
                        <i class="lnr lnr-briefcase text-big"></i>
                    </div>
                    <h5 class="m-0">Professional</h5>
                    <div class="flex-grow-1">
                        <div class="py-4 my-2">
                            <span class="d-inline-block text-muted text-big align-middle mr-2">$</span>
                            <span class="display-3 d-inline-block font-weight-bold align-middle">12</span>
                            <span class="d-inline-block text-muted text-big align-middle ml-2">/ mo</span>
                        </div>
                        <div class="pb-5">
                            <p class="ui-company-text mb-2">5 users</p>
                            <p class="ui-company-text mb-2">10 projects</p>
                            <p class="ui-company-text mb-0">100GB space</p>
                        </div>
                    </div>
                    <div class="px-md-3 px-lg-5">
                        <a href="javascript:void(0)" class="btn btn-outline-primary btn-lg btn-round">Get Started</a>
                    </div>
                </div>
                <div class="d-flex col-md flex-column py-4">
                    <div class="display-1 text-primary my-4">
                        <i class="lnr lnr-store text-big"></i>
                    </div>
                    <h5 class="m-0">Small Buisness</h5>
                    <div class="flex-grow-1">
                        <div class="py-4 my-2">
                            <span class="d-inline-block text-muted text-big align-middle mr-2">$</span>
                            <span class="display-3 d-inline-block font-weight-bold align-middle">20</span>
                            <span class="d-inline-block text-muted text-big align-middle ml-2">/ mo</span>
                        </div>
                        <div class="pb-5">
                            <p class="ui-company-text mb-2">20 users</p>
                            <p class="ui-company-text mb-2">100 projects</p>
                            <p class="ui-company-text mb-0">300GB space</p>
                        </div>
                    </div>
                    <div class="px-md-3 px-lg-5">
                        <a href="javascript:void(0)" class="btn btn-primary btn-lg btn-round">Get Started</a>
                    </div>
                </div>
                <div class="d-flex col-md flex-column py-4">
                    <div class="display-1 text-primary my-4">
                        <i class="lnr lnr-apartment text-big"></i>
                    </div>
                    <h5 class="m-0">Enterprise</h5>
                    <div class="flex-grow-1">
                        <div class="py-4 my-2">
                            <span class="d-inline-block text-muted text-big align-middle mr-2">$</span>
                            <span class="display-3 d-inline-block font-weight-bold align-middle">50</span>
                            <span class="d-inline-block text-muted text-big align-middle ml-2">/ mo</span>
                        </div>
                        <div class="pb-5">
                            <p class="ui-company-text mb-2">Unlimited users</p>
                            <p class="ui-company-text mb-2">Unlimited projects</p>
                            <p class="ui-company-text mb-0">1000GB space</p>
                        </div>
                    </div>
                    <div class="px-md-3 px-lg-5">
                        <a href="javascript:void(0)" class="btn btn-outline-primary btn-lg btn-round">Get Started</a>
                    </div>
                </div>
            </div>
            <h3 class="text-center font-weight-light my-5">Frequently Asked Questions</h3>
            <div class="row">
                <div class="col-md-6">
                    <h5 class="mb-2">Dapibus ac facilisis in?</h5>
                    <p class="ui-company-text text-muted mb-4"> Lorem ipsum dolor sit amet, ius virtute suscipit te. Ius prima euismod consequat eu. </p>
                    <h5 class="mb-2">Cras justo odio?</h5>
                    <p class="ui-company-text text-muted mb-4"> Etiam vivendo eu sea, purto ponderum mediocritatem at pro. </p>
                    <h5 class="mb-2">Porta ac consectetur ac?</h5>
                    <p class="ui-company-text text-muted mb-4"> Iuvaret deleniti vulputate nec ne, id vix lucilius legendos deseruisse. </p>
                    <h5 class="mb-2">Ne ornatus albucius ius?</h5>
                    <p class="ui-company-text text-muted mb-4"> Lorem ipsum dolor sit amet, mea in pertinax hendrerit gloriatur. </p>
                </div>
                <div class="col-md-6">
                    <h5 class="mb-2">Ne ornatus albucius ius?</h5>
                    <p class="ui-company-text text-muted mb-4"> Lorem ipsum dolor sit amet, mea in pertinax hendrerit gloriatur.` </p>
                    <h5 class="mb-2">Quo insolens intellegam dissentiet at?</h5>
                    <p class="ui-company-text text-muted mb-4"> Ex fugit legimus fuisset per. Ex quidam option diceret ius. </p>
                    <h5 class="mb-2">Ad his assum delenit blandit?</h5>
                    <p class="ui-company-text text-muted mb-4"> Ne ornatus albucius ius, nostrum dignissim repudiandae an usu. </p>
                    <h5 class="mb-2">Dapibus ac facilisis in?</h5>
                    <p class="ui-company-text text-muted mb-4"> Lorem ipsum dolor sit amet, ius virtute suscipit te. Ius prima euismod consequat eu. </p>
                </div>
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
    .container {
        width: 100%;
        overflow: hidden;
        display: block;
        margin: 0 auto;
        padding-top: 20px;
    }
    .head_title {
        font-weight: bold;
        color: #333;
        margin-top: 10px;
        margin-bottom: 10px;
        font-size: 40px;
    }
    .font-weight-light {
        color: #a3a4a6;
        font-size: 24px;
    }
    .ui-bordered {
        width: 100%;
        overflow: hidden;
        display: block;
        margin: 0 auto;
        margin-top: 20px;
    }
    .flex-column {
        width: 33%;
        float: left;
        border-left: 1px solid #ddd;
    }
</style>
