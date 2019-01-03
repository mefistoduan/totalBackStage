<template>
    <div id="pages">
        <div class="container">
            <h1 class="text-center font-weight-bolder head_title"> 充值续费 </h1>
            <div class="text-center text-muted text-large font-weight-light">
                氪就完事了
            </div>
            <div class="row no-gutters row-bordered ui-bordered text-center">
                <div class="d-flex col-md flex-column py-4" v-for="(pricing,index) in pricings">
                    <div class="display-1 text-primary my-4">
                        <img src="/static/images/pricing/user.png" alt="" v-if="index == 0">
                        <img src="/static/images/pricing/add%20user.png" alt="" v-if="index == 1">
                        <img src="/static/images/pricing/team.png" alt="" v-if="index == 2">
                    </div>
                    <h5 class="m-0">{{pricing.level}}</h5>
                    <div class="flex-grow-1">
                        <div class="py-4 my-2">
                            <span class="d-inline-block text-muted text-big align-middle mr-2">$</span>
                            <span class="display-3 d-inline-block font-weight-bold align-middle">{{pricing.price}}</span>
                            <span class="d-inline-block text-muted text-big align-middle ml-2">/ 每月</span>
                        </div>
                        <div class="pb-5">
                            <p class="ui-company-text mb-2">外观洗车 {{pricing.cc}} 次</p>
                            <p class="ui-company-text mb-2">标准洗车 {{pricing.stand_cc}} 次</p>
                            <p class="ui-company-text mb-0">机油赠送 {{pricing.gift}} 升</p>
                        </div>
                    </div>
                    <div class="px-md-3 px-lg-5">
                        <button class="btn btn-outline-primary btn-lg btn-round">立即购买</button>
                    </div>
                </div>
            </div>
            <h3 class="text-center font-weight-light my-5">解释与说明</h3>
            <div class="row">
                <div class="col-md-6">
                    <h5 class="mb-2">Dapibus ac facilisis in?</h5>
                    <p class="ui-company-text text-muted mb-4">
                        Lorem ipsum dolor sit amet, ius virtute suscipit te. Ius prima euismod consequat eu. </p>
                    <h5 class="mb-2">Cras justo odio?</h5>
                    <p class="ui-company-text text-muted mb-4">
                        Etiam vivendo eu sea, purto ponderum mediocritatem at pro. </p>
                    <h5 class="mb-2">Porta ac consectetur ac?</h5>
                    <p class="ui-company-text text-muted mb-4">
                        Iuvaret deleniti vulputate nec ne, id vix lucilius legendos deseruisse. </p>
                    <h5 class="mb-2">Ne ornatus albucius ius?</h5>
                    <p class="ui-company-text text-muted mb-4">
                        Lorem ipsum dolor sit amet, mea in pertinax hendrerit gloriatur. </p>
                </div>
                <div class="col-md-6">
                    <h5 class="mb-2">Ne ornatus albucius ius?</h5>
                    <p class="ui-company-text text-muted mb-4">
                        Lorem ipsum dolor sit amet, mea in pertinax hendrerit gloriatur.` </p>
                    <h5 class="mb-2">Quo insolens intellegam dissentiet at?</h5>
                    <p class="ui-company-text text-muted mb-4">
                        Ex fugit legimus fuisset per. Ex quidam option diceret ius. </p>
                    <h5 class="mb-2">Ad his assum delenit blandit?</h5>
                    <p class="ui-company-text text-muted mb-4">
                        Ne ornatus albucius ius, nostrum dignissim repudiandae an usu. </p>
                    <h5 class="mb-2">Dapibus ac facilisis in?</h5>
                    <p class="ui-company-text text-muted mb-4">
                        Lorem ipsum dolor sit amet, ius virtute suscipit te. Ius prima euismod consequat eu. </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    let qs = require('qs');
    export default {
        data() {
            return {
                msg: 'Welcome to Your Vue.js App',
                pricings: [],
            }
        },
        mounted() {
            this.pricingQuery();
        },
        methods: {
            pricingQuery(){
                const that = this;
                let url = '/?ctl=ajax&mod=index&act=pricingQuery';
                let param = {};
                let postdata = qs.stringify(param);
                axios.post(url, postdata).then(function(data){
                    let json = data.data;
                    if(json.code == 0){
                        console.log(json.rs);
                        that.pricings = json.rs;
                    }else{
                        that.$message.error(json.memo);
                    }
                },function(response){
                    console.info(response);
                })
            },
        },
        components: {}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    @import "../../static/css/bootstrap.css";
    @import "../../static/css/ele.css";

    #pages {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        overflow-y: scroll;
        display: block;
        margin: 0 auto;
        background-color: #fff;
        padding-bottom: 80px;
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

    .flex-column:nth-child(1) {
        border: none;
    }

    .m-0 {
        width: 100%;
        overflow: hidden;
        display: block;
        font-size: 20px;
    }

    .font-weight-bold {
        font-size: 30px;
    }

    .btn-outline-primary {
        width: 80%;
        overflow: hidden;
        display: block;
        margin: 0 auto;
        padding: 9px 12px;
        border-radius: 250px;
        background: transparent;
        color: #26B4FF;
        border: 1px solid #26B4FF;
        text-decoration: none;
    }

    .btn-outline-primary:hover {
        background: #26B4FF;
        color: #fff;
    }

    .px-md-3 {
        width: 100%;
        height: 80px;
        overflow: hidden;
        display: block;
        margin: 0 auto;
        margin-top: 30px;
    }

    .btn-primary {
        width: 80%;
        overflow: hidden;
        display: block;
        margin: 0 auto;
        padding: 9px 12px;
        border-radius: 250px;
        text-decoration: none;
        border-color: transparent;
        background: #26B4FF;
        color: #fff;
    }

    .col-md-6 {
        width: 50%;
        overflow: hidden;
        float: left;
    }
</style>
