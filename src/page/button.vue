<template>
    <div id="pages">
        <h2>按钮</h2>
        <div class="btn_contianer">
            <h5>基础用法</h5>
            <el-row>
                <el-button>默认按钮</el-button>
                <el-button type="primary">主要按钮</el-button>
                <el-button type="success">成功按钮</el-button>
                <el-button type="info">信息按钮</el-button>
                <el-button type="warning">警告按钮</el-button>
                <el-button type="danger">危险按钮</el-button>
            </el-row>

            <el-row>
                <el-button plain>朴素按钮</el-button>
                <el-button type="primary" plain>主要按钮</el-button>
                <el-button type="success" plain>成功按钮</el-button>
                <el-button type="info" plain>信息按钮</el-button>
                <el-button type="warning" plain>警告按钮</el-button>
                <el-button type="danger" plain>危险按钮</el-button>
            </el-row>

            <el-row>
                <el-button round>圆角按钮</el-button>
                <el-button type="primary" round>主要按钮</el-button>
                <el-button type="success" round>成功按钮</el-button>
                <el-button type="info" round>信息按钮</el-button>
                <el-button type="warning" round>警告按钮</el-button>
                <el-button type="danger" round>危险按钮</el-button>
            </el-row>

            <el-row>
                <el-button icon="el-icon-search" circle></el-button>
                <el-button type="primary" icon="el-icon-edit" circle></el-button>
                <el-button type="success" icon="el-icon-check" circle></el-button>
                <el-button type="info" icon="el-icon-message" circle></el-button>
                <el-button type="warning" icon="el-icon-star-off" circle></el-button>
                <el-button type="danger" icon="el-icon-delete" circle></el-button>
            </el-row>
        </div>
        <div class="btn_container">
            <h5>禁用状态</h5>
            <el-row>
                <el-button disabled>默认按钮</el-button>
                <el-button type="primary" disabled>主要按钮</el-button>
                <el-button type="success" disabled>成功按钮</el-button>
                <el-button type="info" disabled>信息按钮</el-button>
                <el-button type="warning" disabled>警告按钮</el-button>
                <el-button type="danger" disabled>危险按钮</el-button>
            </el-row>

            <el-row>
                <el-button plain disabled>朴素按钮</el-button>
                <el-button type="primary" plain disabled>主要按钮</el-button>
                <el-button type="success" plain disabled>成功按钮</el-button>
                <el-button type="info" plain disabled>信息按钮</el-button>
                <el-button type="warning" plain disabled>警告按钮</el-button>
                <el-button type="danger" plain disabled>危险按钮</el-button>
            </el-row>
        </div>
        <div class="btn_contianer">
            <h5>图标按钮</h5>
            <el-button type="primary" icon="el-icon-edit"></el-button>
            <el-button type="primary" icon="el-icon-share"></el-button>
            <el-button type="primary" icon="el-icon-delete"></el-button>
            <el-button type="primary" icon="el-icon-search">搜索</el-button>
            <el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
        </div>

        <div class="btn_contianer">
            <h5>加载中</h5>
            <p>要设置为 loading 状态，只要设置loading属性为true即可。</p>
            <el-button type="primary" :loading="true">加载中</el-button>
        </div>

        <div class="btn_contianer">
            <h5>不同尺寸</h5>
            <p>medium、small、mini，通过设置size属性来配置它们</p>
            <el-row>
                <el-button>默认按钮</el-button>
                <el-button size="medium">中等按钮</el-button>
                <el-button size="small">小型按钮</el-button>
                <el-button size="mini">超小按钮</el-button>
            </el-row>
            <el-row>
                <el-button round>默认按钮</el-button>
                <el-button size="medium" round>中等按钮</el-button>
                <el-button size="small" round>小型按钮</el-button>
                <el-button size="mini" round>超小按钮</el-button>
            </el-row>
        </div>
    </div>
</template>

<script>
export default {
    data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
    },
    mounted() {

    },
    methods: {

    },
    components: {

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    @import "../../static/css/ele.css";
    #pages {
        position: absolute;
        top:0;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        overflow-y: scroll;
        display: block;
        margin: 0 auto;
        background-color: #F2F2F2;
        padding-bottom: 80px;
    }
    .btn_contianer {
        width: 100%;
        overflow: hidden;
        display: block;
        margin: 0 auto;
    }
    .el-row {
        margin-bottom: 20px;
    }
</style>
