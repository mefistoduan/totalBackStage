<template>
    <div id="pages">
        <div class="container">
            <div class="row">
                <div class="cur_modal">
                    <ul class="row">
                        <li class="form-group">
                            <em><i class="red">*</i>类型:</em>
                            <div class="fm_rt userinfo">
                                <div class="row">
                                    <el-radio label="1" v-model="modal.appType">安卓</el-radio>
                                    <el-radio label="2" v-model="modal.appType">苹果</el-radio>
                                </div>
                            </div>
                        </li>
                        <li class="form-group">
                            <em><i class="red">*</i>版本:</em>
                            <div class="fm_rt userinfo">
                                <div class="row">
                                    <input type="text" placeholder="请输入版本" class="modal_input"
                                           v-model="modal.version ">
                                </div>
                            </div>
                        </li>
                        <li class="form-group">
                            <em><i class="red">*</i>更新内容:</em>
                            <div class="fm_rt userinfo">
                                <div class="row">
                                    <el-input type="textarea" class="modal_input" v-model="modal.updateContent "
                                              placeholder="请输入更新内容"></el-input>
                                </div>
                            </div>
                        </li>
                        <li class="form-group">
                            <em><i class="red">*</i>上传文件:</em>
                            <div class="fm_rt userinfo">
                                <div class="row">
                                    <el-button type="warning" @click="selectFile">上传文件</el-button>
                                    <input type="file" id="file_input" ref="modal_file" @change="handlePreview" v-show="false">
                                    <div slot="tip" class="el-upload__tip">只能上传APK文件，且不超过20MB</div>
                                    <span>{{ filename }}</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <el-button type="primary"  @click="dialog_ok">上传</el-button>
                        </li>
                    </ul>
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
    data () {
    return {
        fileList: [],
        fileContainer: '',
        filename: '',
        modal: {
            appType: "1",// 0 立即开始 1手动开始
            version: '',// 0 立即开始 1手动开始
            updateContent: '',// 0 立即开始 1手动开始
            file: '',// 0 立即开始 1手动开始
        },
        tableData: [],
    }
    },
    mounted() {

    },
    methods: {
        // uploading star
        handlePreview(file) {
            let that = this;
            if (file.target.files[0].type != 'application/vnd.android.package-archive') {
                that.$message.error('上传文件格式不正确，请重新选择apk文件上传');
                that.fileList = [];
                that.fileContainer = '';
                return false
            }
            if (file.target.files[0].size > 42592499) {
                that.$message.error('上传文件容量超过40MB，请重新选择apk文件上传');
                that.fileList = [];
                that.fileContainer = '';
                return false
            }
            that.fileContainer = file;
            that.filename = that.fileContainer.target.files[0].name;
        },
        selectFile(){
            document.getElementById('file_input').click();
        },
        // uploading end
        // 确认
        dialog_ok() {
            let that = this;
            if (!that.modal.version) {
                that.$message.error('版本不能为空');
                return false
            }
            if (!that.modal.updateContent) {
                that.$message.error('更新内容不能为空');
                return false
            }
            if (!that.fileContainer.target.files[0].name) {
                that.$message.error('app安装文件不能为空');
                return false
            }
            let url = headapi + 'xxx/xxx/xxx/xxx';
            let formData = new FormData();
            formData.append('token', localStorage.token);
            formData.append('appType', that.modal.appType);
            formData.append('version', that.modal.version);
            formData.append('updateContent', that.modal.updateContent);
            formData.append('file', document.querySelector('input[type=file]').files[0]);
            axios.post(url, formData).then(function (data) {
                let json = data.data;
                if (json.Code == 0) {
                    that.$message.success('文件：' + that.fileList.name + '上传成功！');
                    that.dialog_state = false;
                    that.getTableQuery();
                } else {
                    that.$message.error(json.Memo);
                }
            }, function (response) {
                console.info(response);
            });
            that.dialog_state = false;
        },
    },
    components: {

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    @import "../assets/css/panel.css";
    ul,li {
        margin: 0;
        list-style: none;
    }
    em,i {
        font-style: normal;
    }
    .cur_modal {
        width: 100%;
        overflow: hidden;
        display: block;
        margin: 0 auto;
        background: #fff;
        padding: 20px 15px;
    }
    .form-group {
        width: 100%;
        overflow: hidden;
        display: block;
        margin: 0 auto;
        margin-top: 10px;
        margin-bottom: 5px;
    }
    .form-group em {
        width: 200px;
        float: left;
    }
    /deep/ .el-textarea {
        width: 300px!important;
        float: left!important;
    }
    /deep/ .el-textarea__inner {

    }
</style>
