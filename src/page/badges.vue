<template>
    <div id="pages">
        <div class="container">
            <div class="row">
                <h5>
                    一般效果的
                </h5>
                <el-badge :value="12" class="item">
                    <el-button size="small">评论</el-button>
                </el-badge>
                <el-badge :value="3" class="item">
                    <el-button size="small">回复</el-button>
                </el-badge>
                <el-badge :value="1" class="item" type="primary">
                    <el-button size="small">评论</el-button>
                </el-badge>
                <el-badge :value="2" class="item" type="warning">
                    <el-button size="small">回复</el-button>
                </el-badge>

                <el-dropdown trigger="click">
  <span class="el-dropdown-link">
    点我查看<i class="el-icon-caret-bottom el-icon--right"></i>
  </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item class="clearfix">
                            评论
                            <el-badge class="mark" :value="12"/>
                        </el-dropdown-item>
                        <el-dropdown-item class="clearfix">
                            回复
                            <el-badge class="mark" :value="3"/>
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
            <div class="row">
                <h5>带红点的</h5>
                <el-badge is-dot class="item">数据查询</el-badge>
                <el-badge is-dot class="item">
                    <el-button class="share-button" icon="el-icon-share" type="primary"></el-button>
                </el-badge>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        mounted() {

        },
        methods: {},
        components: {}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    @import "../../static/css/ele.css";

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
        background-color: #F2F2F2;
        padding-bottom: 80px;
    }

    .item {
        margin-top: 10px;
        margin-right: 40px;
    }
</style>
