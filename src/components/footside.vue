<template>
    <div id="footside">
        <footer class="main-footer sticky footer-type-1  col-lg-12">
            <div class="footer-inner col-lg-12">
                <div class="footer-text text-center col-lg-12">
                    © {{year}} - <a href="#" target="_blank"><span>Copyright ©  {{url}}  {{name}}版权所有 </span></a> -
                    All rights reserved
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                year:companyInfo.year,
                url: companyInfo.url,
                name: companyInfo.main
            }
        },
        mounted() {
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    @import "../../static/css/customer.css";
    @import "../../static/css/bootstrap.css";
    #footside {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 90%;
        overflow: hidden;
        float: right;
        z-index: 1111;
    }
</style>
