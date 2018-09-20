<template>
    <div class="container">
        <div class="row">
            <div class="header_logo">
                logo
            </div>
            <h5 class="title">{{company.app}}</h5>
            <!--login start-->
            <div class="control">
                <div class="login col-lg-12 col-xs-12">
                    <ul class="col-lg-12 col-xs-12" id="pwd_login" v-show="pwd_login">
                        <li class="form-group">
                            <input type="text" class="form-control" id="username" ref="username" placeholder="手机号/用户名">
                        </li>
                        <li class="form-group">
                            <input type="password" class="form-control" id="userpwd" ref="userpwd" placeholder="请输入密码">
                        </li>
                        <li class="form-group">
                            <button type="submit" class="btn btn-default login_btn" id="login_btn" @click="login_btn">
                                登录
                            </button>
                        </li>
                    </ul>
                    <ul class="col-lg-12 col-xs-12" id="sms_login" v-show="sms_login">
                        <li class="form-group">
                            <input type="text" class="form-control" id="sms_username" ref="sms_username"
                                   placeholder="手机号/用户名">
                        </li>
                        <li class="form-group">
                            <input type="text" class="form-control" id="valid_img" ref="imgValid"
                                   placeholder="请输入图形验证码">
                            <img src="/static/images/login/valid_img.png" alt="点击刷新" class="valid_code">
                        </li>
                        <li class="form-group item">
                            <input type="password" class="form-control" id="userValid" ref="userValid"
                                   placeholder="请输入验证码">
                            <button id="valid_btn" @click="get_phone_valid">获取验证码</button>
                        </li>
                        <li class="form-group">
                            <button type="submit" class="btn btn-default login_btn" id="valid_login_btn"
                                    @click="valid_login_btn">登录
                            </button>
                        </li>
                    </ul>
                    <div class="info">
                        <span>客服电话：{{company.tel}}</span>
                        <button id="register" @click="register">注册账户</button>
                    </div>
                    <div class="change_container">
                        <button id="change_login" @click="change_login">切换验证码登录</button>
                    </div>
                </div>
                <!--</form>-->
                <footer class="footer navbar-fixed-bottom ">
                    <div class="container  ">
                        <div class="row text-center">
                            Copyright © 2018
                            <a href="" target="_blank">
                                {{company.name}}
                            </a>.
                            All Rights Reserved. 版权所有 &nbsp;&nbsp;&nbsp;
                        </div>
                    </div>
                </footer>
            </div>
            <!--login end-->
        </div>
        <div class="modal_simle" id="modal_register" v-show="modal_register">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" @click="close_modal">×</button>
                        <h4 class="modal-title text-center">注册</h4>
                    </div>
                    <form id="register_user" data-url="" method="post" novalidate="novalidate">
                        <div class="modal-body">
                            <div class="form-group">
                                <label class="control-label">姓名</label>
                                <input type="text" name="re_name" class="form-control" id="re_name"
                                       placeholder="请输入注册人的姓名">
                            </div>
                            <div class="form-group">
                                <label class="control-label">手机号 <em class="red">*必填</em></label>
                                <input type="text" name="re_phone" class="form-control" id="re_phone"
                                       placeholder="请输入要注册的手机号,手机号将会作为登录名">
                            </div>
                            <div class="form-group">
                                <label class="control-label">手机验证码 <em class="red">*必填</em></label>
                                <div class="input-group input-group-sm input-group-minimal">
                                    <input type="text" name="re_phonevalid" id="re_phonevalid"
                                           class="form-control  no-right-border " placeholder="请输入手机验证码">
                                    <span class="input-group-btn"> <input type="button"
                                                                          class="btn btn-warning phone_valid"
                                                                          id="get_phone_valid" name="get_phone_valid"
                                                                          value="获取手机验证码"></span>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="control-label">密码 <em class="red">*必填</em></label>
                                <input type="password" class="form-control" name="first_pwd" id="first_pwd"
                                       placeholder="请输入密码">
                            </div>
                            <div class="form-group">
                                <label class="control-label">重复密码 <em class="red">*必填</em></label>
                                <input type="password" class="form-control" name="confirm_pwd" id="confirm_pwd"
                                       placeholder="请再次输入密码">
                            </div>
                        </div>
                        <div class="modal-footer form-block">
                            <button type="submit"
                                    class="btn btn-success center-block btn-lg col-lg-12 col-md-12 col-sm-12"
                                    id="register_btn">注 册
                            </button>
                        </div>
                        <div class="form-group">
                            <label class="ruler_container">
                                <div class="checkbox-custom checkbox-default">
                                    <input type="checkbox" id="agree" name="agree">
                                    <label for="agree"></label>
                                </div>
                                <a href="#" @click="openruler">我同意注册协议条款</a>
                            </label>
                            <span class="right">
                              <button type="button" class="close blue" @click="close_modal">登录</button>
                              <em>已有账户</em>
                         </span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <!--modal_ruler-->
        <div class="modal_simle" id="modal_ruler" aria-hidden="true" v-show="modal_ruler">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" @click="close_rule">×</button>
                        <h4 class="modal-title text-center">注册协议条款</h4>
                    </div>
                    <div class="modal-body" style="height: 700px;overflow-y: scroll">
                        <p class="row col-lg-12">
                            注册协议内容巴拉巴拉巴拉巴拉
                        </p>
                    </div>
                    <div class="modal-footer">
                        <input type="button" class="btn btn-success center-block btn-lg col-lg-12 col-md-12 col-sm-12"
                               @click="close_rule" value="关闭">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                modal_register: false,
                modal_retrieve: false,
                modal_ruler: false,
                pwd_login: true,
                sms_login: false,
                company: {
                    name: 'XXX公司',
                    tel: '123-5678-91011',
                    app: 'xxx应用管理后台',
                }
            }
        },
        methods: {
//            切换验证
            change_login: function () {
                let that = this;
                if (that.pwd_login == true) {
                    that.pwd_login = false;
                    that.sms_login = true;
                } else {
                    that.pwd_login = true;
                    that.sms_login = false;
                }
            },
            // pwd登录
            login_btn: function () {
                let username = this.$refs.username.value;
                let userpwd = this.$refs.userpwd.value;
                if (!this.valid(username, 2, 17, '用户名')) return;
                if (!this.valid(userpwd, 5, 17, '密码')) return;
                this.loginInfo();
            },
            valid_login_btn: function () {
                let sms_username = this.$refs.sms_username.value;
                let userValid = this.$refs.userValid.value;
                if (!this.valid(sms_username, 2, 17, '手机号')) return;
                if (!this.valid(userValid, 4, 6, '短信验证码')) return;
                this.loginInfo();
            },
            //获取注册手机验证码
            get_phone_valid: function () {
                let img_valid = this.$refs.imgValid.value;
                let tel = this.$refs.sms_username.value;
                let that = this;
                if (!tel) {
                    this.$message.error('手机号码不能为空');
                    return false
                }
                if (!this.valid(tel, 10, 12, '手机号')) return;
                if (!img_valid) {
                    this.$message.error('图形验证码不能为空');
                    return false
                }
                if (img_valid.length != 4) {
                    this.$message.error('图形验证码位数不正确');
                    return false
                }
                let url = this.headapi + '?ctl=ajax&mod=index&act=regsend';
                let param = {
                    phone: tel,
                    tcode: img_valid,
                    smstype: 3,
                };
                let postdata = qs.stringify(param);
                axios.post(url, postdata).then(function (data) {
                    let json = data.data;
                    let code = json.code;
                    if (code == 1) {
                        let countdown = 60;
                        that.valid_button = countdown + "秒";
                        let timer = setInterval(() => {
                            if (countdown == 0) {
                                clearInterval(timer);//停止计时器
                                that.valid_button = "重新发送";
                                that.button_state = false;
                            }
                            else {
                                countdown--;
                                that.valid_button = countdown + "秒";
                                that.button_state = true
                            }
                        }, 1000);
                        this.$message({
                            message: '短信已发送，请注意查收',
                            type: 'success'
                        });

                    } else {
                        this.$message({
                            message: json.memo,
                            type: 'warning'
                        });
                    }
                }, function (response) {
                    console.info(response);
                })
            },
//            重置密码 todo
            bk_get_phone: function () {
                let img_valid = this.$refs.imgValid.value;
                let tel = this.$refs.sms_username.value;
                let that = this;
                if (!tel) {
                    this.$message.error('手机号码不能为空');
                    return false
                }
                if (!this.valid(tel, 10, 12, '手机号')) return;
                if (!img_valid) {
                    this.$message.error('图形验证码不能为空');
                    return false
                }
                if (img_valid.length != 4) {
                    this.$message.error('图形验证码位数不正确');
                    return false
                }
                let url = this.headapi + '?ctl=ajax&mod=index&act=regsend';
                let param = {
                    phone: tel,
                    tcode: img_valid,
                    smstype: 3,
                };
                let postdata = qs.stringify(param);
                axios.post(url, postdata).then(function (data) {
                    let json = data.data;
                    let code = json.code;
                    if (code == 1) {
                        let countdown = 60;
                        that.valid_button = countdown + "秒";
                        let timer = setInterval(() => {
                            if (countdown == 0) {
                                clearInterval(timer);//停止计时器
                                that.valid_button = "重新发送";
                                that.button_state = false;
                            }
                            else {
                                countdown--;
                                that.valid_button = countdown + "秒";
                                that.button_state = true
                            }
                        }, 1000);
                        this.$message({
                            message: '短信已发送，请注意查收',
                            type: 'success'
                        });

                    } else {
                        this.$message({
                            message: json.memo,
                            type: 'warning'
                        });
                    }
                }, function (response) {
                    console.info(response);
                })
            },
            register: function () {
                this.modal_register = true;
            },
            openruler: function () {
                this.modal_register = false;
                this.modal_ruler = true;
            },
            close_rule: function () {
                this.modal_ruler = false;
                this.modal_register = true;
            },
            close_modal: function () {
                this.modal_register = false;
                this.modal_retrieve = false;
            },

        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    @import "../../static/css/customer.css";
    @import "../../static/css/bootstrap.css";

    ul, li {
        list-style: none;
    }

    .header_logo .logo {
        width: 176px;
        height: 101px;
        overflow: hidden;
        display: block;
        margin: 0 auto;
        z-index: 99999;
        border-radius: 5px;
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
        background: url("/static/images/login/bg.png");
        background-repeat: no-repeat;
        background-position: top center;
        background-size: 100% 100%;
    }

    .footer .container {
        background: none;
    }

    .container .row {
        position: absolute;
        top: 5%;
        left: 0;
        right: 0;
        overflow: hidden;
        margin-left: 0;
        margin-right: 0;
    }

    .form-group {
        width: 100%;
        overflow: hidden;
        display: block;
        margin: 0 auto;
        margin-bottom: 10px;
    }

    .row .middle_logo {
        display: block;
        margin: 0 auto;
        margin-bottom: 20px;
    }

    .row .title {
        font-size: 25px;
        text-align: center;
        color: #fff;
        font-family: "Microsoft YaHei";
        margin-top: 20px;
        margin-bottom: 20px;
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

    #imgValidcode {
        position: relative;
        float: right;
        bottom: 30px;
        margin-right: 10px;
    }

    .login_btn {
        width: 100%;
        background-color: #FFB100;
        color: #fff;
        text-align: center;
        font-size: 20px;
        border: none;
        letter-spacing: 5px;
    }

    .login_btn:hover {
        background-color: #de9e00;
        color: #fff;
    }

    .info {
        width: 100%;
        overflow: hidden;
        display: block;
        margin: 0 auto;
        padding-left: 15px;
        padding-right: 15px;
    }

    .info span {
        color: #fff;
        text-align: left;
        float: left;
    }

    .info button {
        border: none;
        outline: none;
        float: right;
        color: #FFB100;
        background: none;
    }

    #sms_login {
        display: block;
    }

    #valid_btn {
        width: 40%;
        float: right;
        height: 45px;
        background: #25CC42;
        color: #fff;
        text-align: center;
        line-height: 45px;
        font-size: 16px;
        border: none;
        outline: none;
    }

    #valid_btn:hover {
        background: #24c240;
    }

    .item {
        width: 100%;
        overflow: hidden;
        display: block;
        margin: 0 auto;
        height: 45px;
        margin-bottom: 15px;
    }

    .change_container {
        width: 100%;
        padding-left: 15px;
        padding-right: 15px;
        overflow: hidden;
        display: block;
        margin: 0 auto;
    }

    #userValid {
        width: 60% !important;
        float: left;
    }

    #change_login {
        width: 100%;
        height: 47px;
        line-height: 47px;
        overflow: hidden;
        display: block;
        margin: 0 auto;
        border: 2px solid #fff;
        color: #fff;
        text-align: center;
        background: none;
        border-radius: 250px;
        font-size: 18px;
        margin-top: 23px;
        outline: none;
    }

    .form-group .turn_register {
        width: 100%;
        display: block;
        text-align: center;
        color: #fff;
        cursor: pointer;
        letter-spacing: 3px;
    }

    .form-group .turn_register:hover {
        color: #00F071;
    }

    .header_logo {
        width: 100%;
        overflow: hidden;
        margin: 0 auto;
        margin-top: 10%;
        display: block;
    }

    .control {
        width: 30%;
        display: block;
        overflow: hidden;
        margin: 0 auto;
    }

    .register {
        width: 30%;
        display: none;
        overflow: hidden;
        margin: 0 auto;
        background-color: #43bbee;
        border-radius: 4px;
    }

    .register ul {
    }

    .bottom_tips {
        width: 100%;
        height: 20px;
        display: block;
        overflow: hidden;
        margin: 0 auto;
        margin-top: 10px;
        margin-bottom: 10px;
        color: #262626;
        font-size: 16px;
        text-align: center;
    }

    .register .register_title {
        width: 100%;
        height: 20px;
        line-height: 50px;
        display: block;
        font-size: 18px;
        text-align: center;
        color: #0068A9;
        margin-top: 10px;
        margin-bottom: 10px;
    }

    .register .back_login {
        position: relative;
        bottom: 20px;
        float: right;
        width: 60px;
        height: 30px;
        border-radius: 4px;
        background-color: #EFAC4D;
        color: #fff;
        text-align: center;
        line-height: 30px;
        font-style: normal;
        cursor: pointer;
    }

    .form-control-short {
        width: 60% !important;
        float: left;
        border-right: none;
    }

    .white {
        overflow: hidden;
        background-color: #fff;
        border: 1px solid #ccc;
        border-radius: 4px;
    }

    .white input {
        border: none;
    }

    #question_icon {
        width: 30px;
        height: 43px;
        text-align: center;
        line-height: 45px;
        float: right;
        color: #F3C300;
        background-color: #fff;
        cursor: pointer;
    }

    #btnGetAlid {
        height: 45px;
        background-color: #fff;
        float: right;
        border: none;
        border-left: 1px solid #43bbee;
        border-radius: 0;
        text-align: center;
        padding: 5px 10px;

    }

    .register_btn {
        width: 100%;
        border-radius: 4px;
        background-color: #EFAD4D;
        color: #fff;
        text-align: center;
        font-size: 20px;
        letter-spacing: 5px;
    }

    .footer {
        width: 100%;
        height: 30px;
        overflow: hidden;
        display: block;
        margin: 0 auto;
        color: #fff;
    }

    .footer a {
        color: #fff;
    }

    .ruler_container {
        width: 200px;
        float: left;
        margin-top: 10px;
    }

    .ruler_container input {
        width: 18px;
        height: 18px;
        float: left;
        border: 1px solid #707070;
        -moz-appearance: none;
        -webkit-appearance: none;
        margin-right: 13px;
    }

    .ruler_container a {
        float: left;
        color: #0D62C7;
        line-height: 20px;
        font-size: 12px;
        text-decoration: underline;
    }

    .checkbox-custom {
        position: relative;
        padding: 0 0 0 25px;
        margin-bottom: 7px;
        margin-top: 10px;
        float: left;
    }

    #valid_img {
        width: 60%;
        float: left;
    }

    .valid_code {
        width: 40%;
        height: 45px;
        float: right;
    }

    .modal_simle .modal-content {
        padding: 10px;
    }

    .modal_simle .form-group label {
        font-weight: normal;
        text-align: left;
        float: left;
    }

    .modal_simle .input-group {
        width: 100%;
        overflow: hidden;
        display: block;
        margin: 0 auto;
    }

    #re_phonevalid {
        width: 80%;
    }

    /*
    å°†åˆå§‹çš„checkboxçš„æ ·å¼æ”¹å˜
    */
    .checkbox-custom input[type="checkbox"] {
        opacity: 0; /*å°†åˆå§‹çš„checkboxéšè—èµ·æ¥*/
        position: absolute;
        cursor: pointer;
        z-index: 2;
        margin: -6px 0 0 0;
        top: 50%;
        left: 3px;

    }

    /*
    è®¾è®¡æ–°çš„checkboxï¼Œä½ç½®
    */
    .checkbox-custom label:before {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        margin-top: -9px;
        width: 19px;
        height: 18px;
        display: inline-block;
        border-radius: 2px;
        border: 1px solid #bbb;
        background: #fff;
    }

    .checkbox-custom input[type="checkbox"]:checked + label:after {
        position: absolute;
        display: inline-block;
        font-family: 'FontAwesome';
        content: '\F00C';
        top: 50%;
        left: 4px;
        margin-top: -5px;
        font-size: 11px;
        line-height: 1;
        width: 16px;
        height: 16px;
        color: #333;
    }

    .checkbox-custom label {
        cursor: pointer;
        line-height: 1.2;
        font-weight: normal; /*æ”¹å˜äº†remembermeçš„å­—ä½“*/
        margin-bottom: 0;
        text-align: left;
    }

    #modal_ruler .modal-body {
        color: #000;
    }

    .right {
        width: 200px;
        float: right;
        margin-top: 10px;
        text-align: right;
        color: #8E8E8E;
    }

    .right em {
        margin-top: 3px;
        float: right;
        font-style: normal;
        font-weight: normal;
    }

    .blue {
        width: 67px;
        height: 24px;
        line-height: 24px;
        border: 1px solid #03B1FF !important;
        color: #03B1FF !important;
        float: right;
        font-size: 12px;
        margin-left: 10px;
        opacity: 1 !important;
    }

    .valid_container {
        width: 9%;
        background-color: #f5f5f5;
        padding: 7px 26px;
    }

    label.error {
        float: right;
        padding-bottom: 2px;
    }

    @media only screen and (max-width: 940px) {
        .control {
            width: 100%;
        }

        .register {
            width: 100%;
        }

        #question_icon {
            width: 18px;
        }

        .form-control-short {
            width: 63% !important;
        }

        .header_logo {
            height: 90px;
        }
    }
</style>
