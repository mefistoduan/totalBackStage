<template>
    <div id="pages">
        <div class="container">
            <h5>拖拽上传</h5>
            <button @click="  this.$refs.upload.clearFiles()">清除图片</button>
            <!--拖拽上传-->
            <el-upload
                    class="upload-demo"
                    drag
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :auto-upload="false"
                    :on-change="handleChange"
                    :limit="1"
                    list-type="picture"
                    ref="upload"
                    >
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    let qs = require('qs');
    import Global from '../Global.js'

    export default {
        data() {
            return {}
        },
        mounted() {
            // 清除图片
            this.$refs.upload.clearFiles();
        },
        methods: {
            // uploading star
            handleChange(file, fileList)
            {
                let that = this;
                if (file.size > 4259249) {
                    that.$message.error('上传文件容量超过4MB，请重新选择图片文件上传');
                    that.fileList = [];
                    that.fileContainer = '';
                    return false
                }
                that.fileContainer = file;
                that.filename = file.name
            }
            ,
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
                // 转换base64
                let reader = new FileReader();
                reader.readAsDataURL(curfile);
                reader.onload = function (t) {
                    let img = t.target.result;
                    img =  img.replace('data:image/png;base64,', '');
                    img =  img.replace('data:image/jpeg;base64,', '');

                    let param = {
                        userid: that.modal.userid,//用户id
                        chargemoney: that.modal.chargemoney,//充值金额
                        proofsn: that.modal.proofsn,//充值信息
                        ifmeal: that.modal.radio,//:是否选择优惠套餐 0 无优惠 1优惠
                        bankinfo: that.modal.bankinfo,//支付方式
                        memo: that.modal.memo,
                        proofpic: img,
                        pictype: curfile.type
                    };
                    let postdata = qs.stringify(param);
                    axios.post(url, postdata).then(function (data) {
                        let JSON = data.data;
                        glClearAndLogout(that, JSON.rtnCode);
                        if (JSON.rtnCode == 1) {
                            that.dialog_state = false;
                            that.getTableQuery();
                            that.$message.success(JSON.rtnMemo);
                        } else {
                            that.$message.error(JSON.rtnMemo);
                        }
                    }, function (response) {
                        console.info(response);
                    })
                };
            },
        },
        components: {}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    @import "../assets/css/panel.css";

    /deep/ input[type="file"] {
        display: none !important;
    }
</style>
