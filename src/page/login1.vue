<template>
    <div class="container" :style="bk">
        <div class="row">
            <div class="header_logo">
                <!--<img id="logo" src="../../static/images/login/logo.png"/>-->
            </div>
            <h5 class="title">{{company.app}}</h5>
            <!--login start-->
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
                            <button type="submit" class="btn btn-default login_btn" id="login_btn" @click="pwdLoginBtn">
                                登录
                            </button>
                        </li>
                    </ul>
                    <ul class="col-lg-12 col-xs-12 white_cube" id="sms_login" v-show="sms_login">
                        <li class="form-group">
                            <input type="text" class="form-control" id="sms_username" placeholder="手机号/用户名"
                                   ref="sms_username"
                                   style="border: 1px solid rgb(221, 221, 221);">
                        </li>
                        <li class="form-group">
                            <input type="text" class="form-control" id="uservalid_sms" placeholder="验证码"
                                   ref="imgValid"
                                   style="border: 1px solid rgb(221, 221, 221);">
                            <img id="imgValidcode2"
                                 :src="valImgSrc"
                                 title="看不清？刷一下试试！" @click="changeValImg"/>
                        </li>
                        <li class="form-group item">
                            <input type="password" class="form-control" id="userValid" placeholder="请输入验证码"
                                   ref="sms_valid"
                                   @keyup.13="smsLoginBtn"
                                   style="border: 1px solid rgb(221, 221, 221);">
                            <button id="valid_btn" data-url="" @click="valid_btn">获取验证码</button>
                        </li>
                        <li class="form-group">

                            <button type="submit" class="btn btn-default login_btn" id="valid_login_btn"
                                    @click="smsLoginBtn">登录
                            </button>
                        </li>
                    </ul>
                    <div class="info" v-if="registerFunc">
                        您还没有注册账号？
                        <button id="register" @click="register">注册
                        </button>
                    </div>
                    <div class="change_container" v-if="changeLoginType">
                        <button id="change_login" @click="change_login">切换验证码登录</button>
                    </div>
                </div>
                <footer class="footer navbar-fixed-bottom ">
                    <span class="tel">客服电话：400-000-0000</span>
                    <div class="container">
                        <div class="row text-center">
                            Copyright © {{year}}
                            <a :href="company.url" target="_blank">
                                {{company.url}}
                            </a>.
                            All Rights Reserved. {{company.name}}版权所有 &nbsp;&nbsp;&nbsp;
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
                    <div class="modal-body">
                        <div class="form-group">
                            <label class="control-label">姓名</label>
                            <input type="text" name="re_name" class="form-control" id="re_name" ref="re_name"
                                   placeholder="请输入注册人的姓名">
                        </div>
                        <div class="form-group">
                            <label class="control-label">手机号 <em class="red">*必填</em></label>
                            <input type="text" name="re_phone" class="form-control" id="re_phone" ref="re_phone"
                                   placeholder="请输入要注册的手机号,手机号将会作为登录名">
                        </div>
                        <div class="form-group">
                            <label class="control-label">手机验证码 <em class="red">*必填</em></label>
                            <div class="input-group input-group-sm input-group-minimal">
                                <input type="text" name="re_phonevalid" id="re_phonevalid"
                                       class="form-control  no-right-border " placeholder="请输入手机验证码"
                                       ref="re_phonevalid">
                                <span class="input-group-btn">
                                        <input type="button" class="btn btn-warning phone_valid" id="get_phone_valid"
                                               name="get_phone_valid" value="获取手机验证码" @click="get_phone_valid">
                                    </span>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label">密码 <em class="red">*必填</em></label>
                            <input type="password" class="form-control" name="first_pwd" id="first_pwd" ref="first_pwd"
                                   placeholder="请输入密码">
                        </div>
                        <div class="form-group">
                            <label class="control-label">重复密码 <em class="red">*必填</em></label>
                            <input type="password" class="form-control" name="confirm_pwd" id="confirm_pwd"
                                   ref="confirm_pwd"
                                   placeholder="请再次输入密码">
                        </div>
                    </div>
                    <div class="modal-footer form-block">
                        <button type="submit"
                                class="btn btn-success center-block btn-lg col-lg-12 col-md-12 col-sm-12"
                                id="register_btn" @click="register_user">注 册
                        </button>
                    </div>
                    <div class="form-group">
                        <label class="ruler_container">
                            <div class="checkbox-custom checkbox-default">
                                <input type="checkbox" id="agree" name="agree" ref="agree">
                                <label for="agree"></label>
                            </div>
                            <a href="#" @click="openruler">我同意注册协议条款</a>
                        </label>
                        <span class="right">
                              <button type="button" class="close blue" @click="close_modal">登录</button>
                              <em>已有账户</em>
                         </span>
                    </div>
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
    import axios from 'axios';
    let qs = require('qs');
    import Global from '../Global.js'
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
                bk: {
                    backgroundImage: "url(" + require("../../static/images/login/bg.jpg") + ")",
                    backgroundRepeat: "no-repeat",
                },
            }
        },
        mounted() {
            this.overtime = new Date();
            // 如果是手动退出用户
            if (this.$route.query.status == 1) {
                // 刷新验证图
                this.changeValImg();
                // 重置倒计时
                this.overtime = new Date();
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
//            点击验证码切换
            changeValImg: function () {
                let that = this;
                that.valImgSrc = that.valImgSrc + '?' + Math.random();
            },
            // pwd登录
            pwdLoginBtn: function () {
                let that = this;
                let username = this.$refs.username.value;
                let userpwd = this.$refs.userpwd.value;
                let uservalid = this.$refs.uservalid.value;
                // 重置验证码超时
                that.overtime = new Date();
                if (!globalValid(username, 2, 17, '用户名', that)) return;
                if (!globalValid(userpwd, 5, 17, '密码', that)) return;
                if (!globalValid(uservalid, 3, 5, '验证码', that)) return;
                this.loginInfo();
            },
//            sms 登陆
            smsLoginBtn: function () {
                let sms_username = this.$refs.sms_username.value;
                let sms_valid = this.$refs.sms_valid.value;
                if (!globalValid(sms_username, 2, 17, '手机号', that)) return;
                if (!globalValid(sms_valid, 4, 6, '短信验证码', that)) return;
                this.sms_loginInfo();
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
                if (!globalValid(tel, 10, 12, '手机号', that)) return;
                if (!img_valid) {
                    this.$message.error('图形验证码不能为空');
                    return false
                }
                if (img_valid.length != 4) {
                    this.$message.error('图形验证码位数不正确');
                    return false
                }
                let url = headapi + '?ctl=ajax&mod=index&act=xxx';
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
                            } else {
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
            valid_btn: function () {
                let img_valid = this.$refs.imgValid.value;
                let tel = this.$refs.sms_username.value;
                let that = this;
                if (!tel) {
                    this.$message.error('手机号码不能为空');
                    return false
                }
                if (!globalValid(tel, 10, 12, '手机号', that)) return;
                if (!img_valid) {
                    this.$message.error('图形验证码不能为空');
                    return false
                }
                if (img_valid.length != 4) {
                    this.$message.error('图形验证码位数不正确');
                    return false
                }
                let url = headapi + '?ctl=ajax&mod=index&act=xxx';
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
                            } else {
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
                if (!globalValid(tel, 10, 12, '手机号', that)) return;
                if (!img_valid) {
                    this.$message.error('图形验证码不能为空');
                    return false
                }
                if (img_valid.length != 4) {
                    this.$message.error('图形验证码位数不正确');
                    return false
                }
                let url = headapi + '?ctl=ajax&mod=index&act=regsend';
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
                            } else {
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
            // 注册
            register_user: function () {
                let that = this;
                let re_name = this.$refs.re_name.value;
                let re_phone = this.$refs.re_phone.value;
                let re_phonevalid = this.$refs.re_phonevalid.value;
                let first_pwd = this.$refs.first_pwd.value;
                let confirm_pwd = this.$refs.confirm_pwd.value;
                let agree = this.$refs.agree.checked;
                if (!globalValid(re_phone, 10, 12, '手机', that)) return;
                if (!globalValid(re_phonevalid, 5, 7, '验证码', that)) return;
                if (!globalValid(first_pwd, 5, 7, '密码', that)) return;
                if (first_pwd != confirm_pwd) {
                    that.$message({
                        message: '两遍密码不一致！',
                        type: 'warning'
                    });
                    return false
                }
                if (!agree) {
                    that.$message({
                        message: '请先阅读并同意注册协议！',
                        type: 'warning'
                    });
                    return false
                }
                let url = headapi + '?ctl=ajax&mod=index&act=xxx';
                let param = {};
                let postdata = qs.stringify(param);
                axios.post(url, postdata).then(function (data) {
                    let json = data.data;
                    if (json.code == 0) {
                        that.plates = json.rs;
                    } else {
                        this.$notify({
                            title: '警告',
                            message: JSON.memo,
                            type: 'warning'
                        });
                    }
                }, function (response) {
                    console.info(response);
                })
            },
//            pwd登陆
            loginInfo: function () {
                const that = this;
                let url = headapi + '?ctl=ajax&mod=index&act=login';
                let username = this.$refs.username.value;
                let userpwd = this.$refs.userpwd.value;
                let uservalid = this.$refs.uservalid.value;
                let current = new Date();
                let betweenTime = current - that.overtime;
                let s = 120;
                if (betweenTime > s * 1000) {
                    that.changeValImg();
                    that.$message.error('验证码已超时，请重新输入');
                    return false
                }
                let param = {
                    'usercode': username,
                    'passwd': userpwd,
                    'vcode': uservalid,
                    'logintype': 1,
                    'accounttype': 3,
                    'src': 'pc'
                };
                let postdata = qs.stringify(param);
                axios.post(url, postdata).then(function (data) {
                    let json = data.data;
                    if (json.code == 0) {
                        that.userName = json.userName;
                        localStorage.userName = json.username;
                        that.$router.push({path: '/'});
                    } else {
                        that.$notify({
                            title: '警告',
                            message: json.memo,
                            type: 'warning'
                        });
                    }
                }, function (response) {
                    console.info(response);
                })
            }
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    @import "../../static/css/customer.css";
    @import "../../static/css/login.css";
</style>
