<template>
    <div class="container">
        <div class="row">
            <div class="header_logo">
                <img id="logo" src="../../static/images/login/logo.png"/>
            </div>
            <h5 class="title">{{company.app}}</h5>
            <div class="control">
                <div class="login col-lg-12 col-xs-12">
                    <ul class="col-lg-12 col-xs-12 white_cube" id="pwd_login" v-show="pwd_login">
                        <li class="form-group">
                            <input type="text" class="form-control" id="username" placeholder="手机号/用户名"
                                   ref="username"
                                   style="border: 1px solid rgb(221, 221, 221);">
                        </li>
                        <li class="form-group">
                            <input type="password" class="form-control" id="userpwd" placeholder="请输入密码"
                                   ref="userpwd"
                                   style="border: 1px solid rgb(221, 221, 221);">
                        </li>
                        <li class="form-group" v-if="true">
                            <input type="text" class="form-control" id="uservalid_img" placeholder="验证码"
                                   @keyup.13="pwdLoginBtn"
                                   ref="uservalid"
                                   style="border: 1px solid rgb(221, 221, 221);">
                            <!--onclick="this.src = this.src + '?'+ Math.random();" title="看不清？刷一下试试！">-->
                            <!--/sys/mod/index/login_validcode.php-->
                            <img id="imgValidcode"
                                 :src="valImgSrc"
                                 title="看不清？刷一下试试！" @click="changeValImg"/>
                        </li>
                        <li class="form-group">
                            <el-button type="primary" round size="medium" @click="pwdLoginBtn" class="btn-default">登录</el-button>
                        </li>
                    </ul>
                </div>
            </div>
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
            }
        },
    }
</script>

<style scoped>
    ul, li {
        list-style: none;
    }
    .container {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        overflow: hidden;
        display: block;
        margin: 0 auto;
        background-repeat: no-repeat;
        background-position: top center;
        background-size: 100% 100%;
        background: #2c2e2f;
    }
    .header_logo #logo {
        width: 176px;
        overflow: hidden;
        display: block;
        margin: 0 auto;
        margin-top: 8%;
        z-index: 99999;
        border-radius: 5px;
    }
    .row .middle_logo {
        display: block;
        margin: 0 auto;
        margin-bottom: 20px;
    }
    .row .title {
        font-size: 40px;
        font-weight: normal;
        text-align: center;
        color: #fff;
        font-family: "Microsoft YaHei";
        margin-top: 20px;
        margin-bottom: 60px;
        text-shadow: 3px 2px 3px #000;
    }
    .row .form-control {
        height: 45px;
        background-color: #fff;
        border: 1px solid #fff;
        color: #333;
    }
    .row .form-control::placeholder {
        color: #B8B8B8;
    }
    .container .white_cube {
        width: 300px;
        min-height: 288px;
        overflow: hidden;
        display: block;
        margin: 0 auto;
        background: #fff;
        border-radius: 5px;
        float: none;
        padding-top: 20px;
        padding-bottom: 20px;
        box-shadow: 0 3px 6px rgba(0,0,0,0.16);
    }
    #imgValidcode {
        width: 90px;
        height: 30px;
        position: relative;
        float: right;
        bottom: 37px;
        margin-right: 10px;
    }
.btn-default {
    width: 271px;
    font-size: 20px;
    letter-spacing: 5px;
}
</style>