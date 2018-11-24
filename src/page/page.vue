<template>
    <div id="pages">
        <div class="container">
            <div class="row">
                <h5>一般</h5>
                <div class="block">
                    <span class="demonstration">大于 7 页时的效果</span>
                    <el-pagination
                            layout="prev, pager, next"
                            :total="1000">
                    </el-pagination>
                </div>
            </div>
            <div class="row">
                <h5>带背景色的</h5>
                <el-pagination
                        background
                        layout="prev, pager, next"
                        :total="1000">
                </el-pagination>
            </div>
            <div class="row">
                <h5>带功能的</h5>
                <div class="block">
                    <el-pagination
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :current-page.sync="currentPage3"
                            :page-size="100"
                            layout="prev, pager, next, jumper"
                            :total="1000">
                    </el-pagination>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
    return {
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4
    }
    },
    mounted() {

    },
    methods: {
        methods: {
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            }
        },
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
</style>
