<template>
    <div id="pages">
        <el-container>
            <el-aside>
                <header class="logo-env">
                    <!-- logo -->
                    <div class="logo">
                        <router-link :to="{path: '/main'}" class="logo-expanded">
                            <img src="/static/images/comm/logo.svg" width="160" alt="">
                        </router-link>
                    </div>
                    <div class="main-menu" id="main-menu">
                        <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
                    </div>
                </header>
            </el-aside>
        </el-container>
    </div>
</template>

<script>
export default {
    data () {
    return {
        data: [{
            label: '一级 1',
            children: [{
                label: '二级 1-1',
                children: [{
                    label: '三级 1-1-1'
                }]
            }]
        }, {
            label: '一级 2',
            children: [{
                label: '二级 2-1',
                children: [{
                    label: '三级 2-1-1'
                }]
            }, {
                label: '二级 2-2',
                children: [{
                    label: '三级 2-2-1'
                }]
            }]
        }, {
            label: '一级 3',
            children: [{
                label: '二级 3-1',
                children: [{
                    label: '三级 3-1-1'
                }]
            }, {
                label: '二级 3-2',
                children: [{
                    label: '三级 3-2-1'
                }]
            }]
        }],
        defaultProps: {
            children: 'children',
            label: 'label'
        }
    }
    },
    mounted() {

    },
    methods: {
        handleNodeClick(data) {
            console.log(data);
            that.$router.push({path:'/*'});
        }
    },
    components: {

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .el-aside {
        position: absolute;
        /*top: 0;*/
        /*bottom: 0;*/
        width: 230px;
        height: 100%;
        overflow: hidden;
        background-color: #2c2e2f;
        color: #333;
        text-align: center;
        line-height: 200px;
    }
    .logo {
        height: 140px;
    }
    .el-tree {
        width: 270px;
        overflow: hidden;
        display: block;
        margin: 0 auto;
        background-color: #2c2e2f;
    }
</style>
