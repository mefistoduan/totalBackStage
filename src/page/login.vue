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
                                   v-model="login.username"
                                   style="border: 1px solid rgb(221, 221, 221);">
                        </li>
                        <li class="form-group">
                            <input type="password" class="form-control" id="userpwd" placeholder="请输入密码"
                                   ref="userpwd"
                                   v-model="login.userpwd"
                                   style="border: 1px solid rgb(221, 221, 221);">
                        </li>
                        <li class="form-group" v-if="true">
                            <input type="text" class="form-control" id="uservalid_img" placeholder="验证码"
                                   @keyup.13="pwdLoginBtn"
                                   v-model="login.uservalid"
                                   ref="uservalid"
                                   style="border: 1px solid rgb(221, 221, 221);">
                            <!--onclick="this.src = this.src + '?'+ Math.random();" title="看不清？刷一下试试！">-->
                            <!--/sys/mod/index/login_validcode.php-->
                            <img id="imgValidcode"
                                 :src="valImgSrc"
                                 title="看不清？刷一下试试！" @click="changeValImg"/>
                        </li>
                        <li class="form-group">
                            <el-button type="primary" round size="medium" @click="pwdLoginBtn" class="btn-default">登录
                            </el-button>
                            <div class="info" v-if="register.registerFunc" >
                                <em class="pull-left">您还没有注册账号？</em>
                                <el-button type="text" class="pull-right" size="medium" @click="registerBtn" >注册
                                </el-button>
                            </div>
                        </li>
                    </ul>

                </div>
            </div>
        </div>

        <el-dialog
                title="注册"
                :visible.sync="register.registerEldialog"
                width="40%"
                >
            <div class="form_container">
                <el-form ref="form" :model="form" label-width="110px" :rules="rules">
                    <el-form-item label="用户名" prop="username">
                        <el-input v-model="form.username" type="text"></el-input>
                    </el-form-item>
                    <el-form-item label="手机号" prop="phone">
                        <el-input v-model="form.phone" type="text"></el-input>
                    </el-form-item>
                    <el-form-item label="图形验证码" prop="imgValid">
                        <el-input v-model="form.imgValid" type="text"></el-input>
                        <img id="imgValidcode2"
                             :src="valImgSrc"
                             title="看不清？刷一下试试！" @click="changeValImg"/>
                    </el-form-item>
                    <el-form-item label="手机验证码" prop="re_phonevalid">
                        <el-input v-model="form.re_phonevalid" type="text"></el-input>
                        <el-button id="imgValidbtn2" type="primary" @click="get_phone_valid">获取验证码</el-button>
                    </el-form-item>
                    <el-form-item label="昵称" prop="nickname">
                        <el-input v-model="form.nickname" type="text"></el-input>
                    </el-form-item>
                    <el-form-item label="新密码" prop="newpwd">
                        <el-input v-model="form.newpwd" type="password"></el-input>
                    </el-form-item>
                    <el-form-item label="确认密码" prop="again">
                        <el-input v-model="form.again" type="password"></el-input>
                    </el-form-item>
                    <s>
                        <i class="el-icon-warning"></i><em>密码由6~32位字母、数字及下划线组成</em>
                    </s>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit('form')">确认</el-button>
                        <el-button @click="resetForm('form')">重置</el-button>
                    </el-form-item>
                </el-form>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="register.registerEldialog = false">取 消</el-button>
                <el-button type="primary" @click="register.registerEldialog = false">确 定</el-button>
          </span>
        </el-dialog>

    </div>
</template>

<script>
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
            return {
                year: new Date().getFullYear(),
                overtime: '',
                pwd_login: true,
                sms_login: false,
                changeLoginType: false,//登陆方式切换
                // valImgSrc: headapi + 'sys/mod/index/login_validcode.php',//测试用路径
                valImgSrc: '/static/images/login/valid_img.png',//测试用路径
                company: globalCompany(),
                register:{
                    registerFunc: true,//注册入口
                    registerEldialog: true,//注册dialog
                },
                login: {
                    username: '',
                    userpwd: '',
                    uservalid: '',
                },
                form: {
                    username: '',
                    phone: '',
                    re_phonevalid: '',
                    imgValid: '',
                    nickname: '',
                    newpwd: '',
                    again: '',
                },
                rules: {
                    username: [
                        {required: true, message: '请输入用户名', trigger: 'blur'},
                        {min: 6, max: 32, message: '长度在 6 到 32 个字符', trigger: 'blur'},
                    ],
                    phone: [
                        {required: true, message: '请输入手机号', trigger: 'blur'},
                        {min: 11, max: 12, message: '手机号长度是11位', trigger: 'blur'},
                        {validator: phonetest, trigger: 'blur'}
                    ],
                    re_phonevalid: [
                        {required: true, message: '请输入验证码', trigger: 'blur'},
                        {min: 4, max: 4, message: '长度在 4 个字符', trigger: 'blur'},
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
                }
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
            // 点击验证码切换
            changeValImg: function () {
                let that = this;
                that.valImgSrc = that.valImgSrc + '?' + Math.random();
            },
            // pwd登录
            pwdLoginBtn: function () {
                let that = this;
                let username = this.username;
                let userpwd = this.userpwd;
                let uservalid = this.uservalid;
                // 重置验证码超时
                that.overtime = new Date();
                if (!globalValid(username, 2, 17, '用户名', that)) return;
                if (!globalValid(userpwd, 5, 17, '密码', that)) return;
                if (!globalValid(uservalid, 3, 5, '验证码', that)) return;
                this.loginInfo();
            },
            //            pwd登陆
            loginInfo: function () {
                const that = this;
                let url = headapi + '?ctl=ajax&mod=index&act=login';
                let username = this.username;
                let userpwd = this.userpwd;
                let uservalid = this.uservalid;
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
                        if (json.code == 10005) {
                            that.$refs.userpwd.value = '';
                            that.$notify({
                                title: '警告',
                                message: '密码错误，请重新输入',
                                type: 'warning'
                            });
                        } else {
                            that.$notify({
                                title: '警告',
                                message: json.memo,
                                type: 'warning'
                            });
                        }
                    }
                }, function (response) {
                    console.info(response);
                })
            },
            // 注册
            registerBtn() {
                this.register.registerEldialog = true;
            },
            onSubmit(formName) {
                let that = this;
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        that.submitPwd()
                    } else {
                        that.$message({
                            showClose: true,
                            message: '错了哦，提交新密码失败',
                            type: 'error'
                        });
                        that.form.newpwd = '';
                        that.form.again = '';
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            submitPwd() {
                let that = this;
                let url = headapi + '?ctl=ajax&mod=index&act=modPwd';
                let param = {
                    newPwd: that.form.newpwd,
                };
                let postdata = qs.stringify(param);
                axios.post(url, postdata).then(function (data) {
                    let json = data.data;
                    if (json.code == 0) {
                        that.$message({
                            showClose: true,
                            message: '密码修改成功',
                            type: 'success'
                        });
                        // clean info
                        that.newpwd = '';
                        that.again = '';
                    } else {
                        that.$message.error(json.memo);
                    }
                }, function (response) {
                    console.info(response);
                })
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
        padding-bottom: 1px;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
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
    .info em {
        height: 40px;
        line-height: 40px;
        font-style: normal;
    }
    #imgValidcode2 {
        width: 90px;
        height: 30px;
        position: relative;
        float: right;
        bottom: 37px;
        margin-right: 10px;
        margin-top: 4px;
    }
    #imgValidbtn2 {
        width: 90px;
        height: 30px;
        position: relative;
        float: right;
        bottom: 37px;
        margin-right: 10px;
        margin-top: 4px;
    }
    .el-form-item {
        height: 40px;
        overflow: hidden;
    }
</style>