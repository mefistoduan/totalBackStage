<template>
    <div id="forget">
        <h5>忘记密码</h5>
        <div class="form_container">
            <el-form ref="form" :model="form" :rules="rules">
                <el-form-item label="" prop="phone">
                    <el-input v-model="form.phone" type="text" placeholder="请输入手机号"></el-input>
                </el-form-item>
                <el-form-item label="" prop="imgValid">
                    <el-input v-model="form.imgValid" type="text" placeholder="请输入图形验证码"></el-input>
                    <img class="imgValidcode"
                         :src="valImgSrc"
                         title="看不清？刷一下试试！" @click="changeValImg"/>
                </el-form-item>
                <el-form-item label="" prop="re_phonevalid">
                    <el-input v-model="form.re_phonevalid" type="text"
                              placeholder="请输入手机验证码"></el-input>
                    <el-button class="imgValidcode vlidcodeBtn" type="primary" @click="get_phone_valid"
                               :disabled="phone_valid_state"
                    >
                        获取验证码
                    </el-button>
                </el-form-item>
                <el-form-item label="" prop="newpwd">
                    <el-input v-model="form.newpwd" type="password" placeholder="请输入新密码"></el-input>
                </el-form-item>
                <el-form-item label="" prop="again">
                    <el-input v-model="form.again" type="password" placeholder="重复密码"></el-input>
                </el-form-item>
                <el-button type="primary" @click="forgetBtn" class="registerBtn">确 认</el-button>
                <el-button type="text" @click="pageGoToLogin" class="typelogin">返回登录</el-button>
            </el-form>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    let qs = require('qs');
    import Global from '../Global.js'

    export default {
        data() {
            let samepass = (rule, value, callback) => {
                if (value !== this.form.newpwd) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            let pwdPass = (rule, value, callback) => {
                let re = /^[0-9a-zA-Z_]{1,}$/;
                if (value.search(re) == -1) {
                    callback(new Error('错了哦，密码只能由字母、数字及下划线组成'));
                } else {
                    callback()
                }
            };
            let phonetest = (rule, value, callback) => {
                let re = /^1[3|4|5|7|8|9][0-9]\d{8}$/;
                if (value.search(re) == -1) {
                    callback(new Error('错了哦，手机号码格式不正确'));
                } else {
                    callback()
                }
            };
            let notphone = (rule, value, callback) => {
                let re = /^1[3|4|5|7|8|9][0-9]\d{8}$/;
                if (value.search(re) == -1) {
                    callback();
                } else {
                    callback(new Error('错了哦，用户名不能是手机号码'))
                }
            };
            let uservalidPass = (rule, value, callback) => {
                if (value <= 9999 && value > 0) {
                    callback()
                } else {
                    callback(new Error('错了哦，图形验证码必须为数字'));
                }
            };
            return {
                dialogVisible: false,
                valid_button: '获取验证码',
                phone_valid_state: false,
                valImgSrc: headapi + 'login_validcode.php',//生产用路径
                // valImgSrc: '/static/images/login/valid_img.png',//测试用路径
                form: {
                    username: '',
                    phone: '',
                    re_phonevalid: '',
                    imgValid: '',
                    nickname: '',
                    newpwd: '',
                    again: '',
                    protocol: true,
                },
                rules: {
                    username: [
                        {required: true, message: '请输入用户名', trigger: 'blur'},
                        {min: 6, max: 32, message: '长度在 6 到 32 个字符', trigger: 'blur'},
                        {validator: notphone, trigger: 'blur'}
                    ],
                    phone: [
                        {required: true, message: '请输入手机号', trigger: 'blur'},
                        {min: 11, max: 12, message: '手机号长度是11位', trigger: 'blur'},
                        {validator: phonetest, trigger: 'blur'}
                    ],
                    imgValid: [
                        {required: true, message: '请输入图形验证码', trigger: 'blur'},
                        {min: 4, max: 4, message: '长度在 4 个字符', trigger: 'blur'},
                        {validator: uservalidPass, trigger: 'blur'}
                    ],
                    re_phonevalid: [
                        {required: true, message: '请输入验证码', trigger: 'blur'},
                        {min: 6, max: 6, message: '长度在 6 个字符', trigger: 'blur'},
                    ],
                    newpwd: [
                        {required: true, message: '请输入新密码', trigger: 'blur'},
                        {min: 6, max: 32, message: '长度在 6 到 32 个字符', trigger: 'blur'},
                        {validator: pwdPass, trigger: 'blur'}
                    ],
                    again: [
                        {required: true, message: '请输入确认密码', trigger: 'blur'},
                        {min: 6, max: 32, message: '长度在 6 到 32 个字符', trigger: 'blur'},
                        {validator: pwdPass, trigger: 'blur'},
                        {validator: samepass, trigger: 'blur'},
                    ],
                },
            }
        },
        mounted() {

        },
        methods: {
            // 点击验证码切换
            changeValImg: function () {
                let that = this;
                that.valImgSrc = that.valImgSrc + '?' + Math.random();
            },
            //手机登陆
            get_phone_valid() {
                let that = this;
                let phone = this.form.phone;
                let uservalid = this.form.imgValid;
                if (!globalCheckPhone(phone)) {
                    that.$message({
                        showClose: true,
                        message: '错了哦，手机号格式不正确',
                        type: 'error'
                    });
                    return false
                }
                if (!uservalid || uservalid.length != 4) {
                    that.$message({
                        showClose: true,
                        message: '错了哦，图形验证码不正确',
                        type: 'error'
                    });
                    return false
                }
                let url = headapi + '?ctl=ajax&mod=index&act=getsms';
                let param = {
                    phone: phone,
                    tcode: uservalid,
                    smstype: 2,//1 注册，2 重置 ， 3 登陆
                    logintype: 1,
                };
                that.phone_valid_state = true;
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
                                that.phone_valid_state = false;
                            } else {
                                countdown--;
                                that.valid_button = countdown + "秒";
                                that.phone_valid_state = true
                            }
                        }, 1000);
                        that.$message({
                            message: '短信已发送，请注意查收',
                            type: 'success'
                        });
                    } else {
                        that.phone_valid_state = false;
                        that.$message({
                            message: json.memo,
                            type: 'warning'
                        });
                    }
                }, function (response) {
                    console.info(response);
                })
            },
            // BoBox登陆页面
            pageGoToLogin() {
                this.$emit('pageGoToLogin');
            },
            forgetBtn(){
                let that = this;
                // 重置验证码超时
                that.overtime = new Date();
                this.$refs['form'].validate((valid) => {
                    if (valid) {
                        that.forgetInfo();
                    } else {
                        that.$message({
                            showClose: true,
                            message: '错误哦，登陆信息有误',
                            type: 'warning'
                        });
                        return false;
                    }
                });
            },
            forgetInfo(){
                const that = this;
                let url = headapi + 'forgetpwd';
                let current = new Date();
                let betweenTime = current - that.overtime;
                let s = 120;
                if (betweenTime > s * 1000) {
                    that.changeValImg();
                    that.$message.error('验证码已超时，请重新输入');
                    return false
                }
                let param = {
                    'phone': this.form.phone,
                    'vcode': this.form.re_phonevalid,
                    'newPwd': this.form.newpwd,
                };
                let postdata = qs.stringify(param);
                axios.post(url, postdata).then(function (data) {
                    let json = data.data;
                    if (json.code == 0) {
                        let username = that.form.username;
                        let pwd = that.form.newpwd;
                        that.$emit('registerlogin',username,pwd);
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
            },
        },
        components: {}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    ul, li {
        list-style: none;
    }

    #register {
        overflow: hidden;
        display: block;
        margin: 0 auto;
        background: #fff;
    }

    h5 {
        width: 100%;
        overflow: hidden;
        display: block;
        margin: 0 auto;
        text-align: center;
        margin-top: 66px;
        margin-bottom: 34px;
        font-size: 22px;
        font-weight: bold;
    }

    /deep/ .el-tabs--card > .el-tabs__header .el-tabs__item.is-active {
        color: #fff;
        border-top-left-radius: 22px;
        border-top-right-radius: 22px;
        background: #03B1FF;
        padding-left: 40px;
        padding-right: 40px;
        border: none;
        z-index: 22;
    }

    /deep/ .el-tabs--card > .el-tabs__header .el-tabs__item {
        color: #303030;
        border-top-left-radius: 22px;
        border-top-right-radius: 22px;
        background: #fff;
        padding-left: 40px;
        padding-right: 40px;
        border: none;
    }

    /deep/ .el-tabs__header {
        padding-bottom: 0;
        margin-bottom: 0;
    }

    /deep/ .el-tabs__content {
        width: 100%;
        overflow: hidden;
        display: block;
        margin: 0 auto;
        background: #fff;
        height: 508px;
    }

    /deep/ .el-tabs--card > .el-tabs__header .el-tabs__nav {
        border: none;
    }

    /deep/ .el-tabs--card > .el-tabs__header .el-tabs__item:nth-child(2) {
        position: relative;
        left: -10px;
        z-index: 11;
    }

    .el-form-item {
        margin-bottom: 5px;
    }

    /deep/ .el-form-item__content {
        height: 55px;
        overflow: hidden;
    }

    /deep/ .el-form-item__error {
        top: 40px;
    }

    #forget h5 {
        margin-top: 40px;
        margin-bottom: 28px;
    }

    input.form-control {
        width: 409px;
        height: 40px;
        line-height: 40px;
        overflow: hidden;
        display: block;
        margin: 0 auto;
        border-radius: 2px;
        background: #fff;
    }

    .form-group {
        width: 410px;
        height: 40px;
        overflow: hidden;
        display: block;
        margin: 0 auto;
        margin-bottom: 20px;
    }

    .imgValidcode {
        width: 105px;
        height: 40px;
        position: relative;
        float: right;
        bottom: 40px;
        border-left: 3px solid #fff;
    }

    .info {
        width: 100%;
        overflow: hidden;
        display: block;
        margin: 0 auto;
    }

    .info .el-button--text {
        color: #8E8E8E;
        margin-left: 20px;
    }

    .loginBtn {
        width: 100%;
        overflow: hidden;
        display: block;
        margin: 0 auto;
        background: #03B1FF;
        font-size: 18px;
        letter-spacing: 5px;
        border-radius: 10px;
    }

    .textBtn {
        width: 100%;
        overflow: hidden;
        display: block;
        margin: 0 auto;
        background: #fff;
        font-size: 16px;
        letter-spacing: 2px;
        border-radius: 10px;
        color: #03B1FF;
    }

    .registerBtn {
        width: 410px;
        overflow: hidden;
        display: block;
        margin: 0 auto;
        background: #03B1FF;
        font-size: 18px;
        letter-spacing: 5px;
        border-radius: 10px;
    }

    .typelogin {
        width: 410px;
        overflow: hidden;
        display: block;
        margin: 0 auto;
    }

</style>
