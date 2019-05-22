<template>
    <div id="footside">
        <footer class="main-footer sticky footer-type-1  col-lg-12">
            <div class="footer-inner col-lg-12">
                <div class="footer-text text-center col-lg-12">
                    © {{year}} - <a :href="url" target="_blank"><span>Copyright ©  {{url}}  {{name}}版权所有 </span></a> -
                    All rights reserved
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                year: companyInfo.year,
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
    #footside {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 90%;
        overflow: hidden;
        float: right;
        z-index: 1111;
        padding-top: 15px;
        padding-bottom: 15px;
        background: #E6E6E6;
    }
    .footer-text {
        color: #A5A5A5;
        font-size: 14px;
    }
    .footer-text a {
        color: #A5A5A5;
    }
</style>
