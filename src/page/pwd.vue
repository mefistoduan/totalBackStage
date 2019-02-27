<template>
    <div id="pages">
        <ul>
            <li>
                <span>原密码:</span>
                <el-input type="password" v-model="old" placeholder="请输入内容"></el-input>
            </li>
            <li>
                <span>新密码:</span>
                <el-input type="password" v-model="newpwd" placeholder="请输入内容"></el-input>
                <s>
                    <i class="el-icon-warning"></i><em>密码由6~32位字母、数字及下划线组成</em>
                </s>
            </li>
            <li>
                <span>确认密码:</span>
                <el-input type="password" v-model="again" placeholder="请输入内容" v-on:blur="blur()"></el-input>
            </li>
            <li>
                <span></span>
                <el-button type="primary" @click="submitPwd">确认</el-button>
            </li>
        </ul>
    </div>
</template>

<script>
    import axios from 'axios';
    let qs = require('qs');
    import Global from '../Global.js'
    export default {
        data() {
            return {
                old: '',
                newpwd: '',
                again: '',
            }
        },
        methods: {
            // 确认密码blur
            blur() {
                const that = this;
                if (that.again != that.newpwd) {
                    that.$message.error('错了哦，确认密码与新密码不一致');
                    return false;
                }
            },
            // 密码确认提交
            submitPwd() {
                const that = this;
                if (!that.old) {
                    that.$message.error('错了哦，原密码不能为空');
                    return false
                }
                if (!that.newpwd) {
                    that.$message.error('错了哦，新密码不能为空');
                    return false
                }
                if (!that.again) {
                    that.$message.error('错了哦，确认密码不能为空');
                    return false
                }
                if (that.again != that.newpwd) {
                    that.$message.error('错了哦，确认密码与新密码不一致');
                    return false
                }
                if (that.newpwd.length > 32) {
                    that.$message.error('错了哦，密码长度超长');
                    return false
                }
                let re = /^[0-9a-zA-Z_]{1,}$/;
                if (that.newpwd.search(re) == -1) {
                    that.$message.error('密码只能由字母、数字及下划线组成');
                    return false
                }
                let url = headapi + '?ctl=ajax&mod=index&act=modPwd';
                let param = {
                    oldPwd: that.old,
                    newPwd: that.newpwd,
                };
                let postdata = qs.stringify(param);
                axios.post(url, postdata).then(function (data) {
                    let json = data.data;
                    if (json.code == 0) {
                        that.$message.success('密码修改成功');
                        // clean info
                        that.old = '';
                        that.newpwd = '';
                        that.again = '';
                        that.logout();
                    } else {
                        that.$message.error(json.memo);
                    }
                }, function (response) {
                    console.info(response);
                })

            },
            // 重登录
            logout(){
                const that = this;
                let url =  headapi+'?ctl=ajax&mod=index&act=logout';
                let param = {};
                let postdata = qs.stringify(param);
                axios.post(url, postdata).then(function(data){
                    let json = data.data;
                    window.top.location.href = '/?act=login#/login?status=1'
                },function(response){
                    console.info(response);
                })
            }
        },
        components: {}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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

    ul {
        width: 50%;
        overflow: hidden;
        float: left;
        margin-top: 20px;
        margin-left: 20px;
        background: #fff;
        padding: 20px;
    }

    li {
        width: 100%;
        overflow: hidden;
        display: block;
        margin: 0 auto;
        list-style: none;
        height: 50px;
    }

    li span {
        width: 60px;
        float: left;
        height: 40px;
        line-height: 40px;
    }

    /deep/ .el-input {
        width: 50%;
        float: left;
    }

    li s {
        height: 50px;
        line-height: 40px;
        padding-left: 20px;
        text-decoration: none;
        font-style: normal;
    }

    li i {
        color: red;
    }

    li s em {
        font-style: normal;
    }
</style>
