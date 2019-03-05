<template>
    <div class="container" :style="background">
        <div class="row">
            <div class="header_logo">
                <img id="logo" src="../../static/images/login/logo.png"/>
            </div>
            <h5 class="title">{{company.app}}</h5>

        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                year: new Date().getFullYear(),
                overtime: '',
                modal_register: false,
                modal_retrieve: false,
                modal_ruler: false,
                pwd_login: true,
                sms_login: false,
                registerFunc: false,//注册入口
                changeLoginType: false,//登陆方式切换
                // valImgSrc: headapi + 'sys/mod/index/login_validcode.php',//测试用路径
                valImgSrc: '/static/images/login/valid_img.png',//测试用路径
                company: globalCompany(),
                background: {
                    backgroundImage: "url(" + require("../../static/images/login/bg.jpg") + ")",
                    backgroundRepeat: "no-repeat",
                },
            }
        },
    }
</script>

<style scoped>

</style>