<template>
    <div id="pages">
        <div class="container">
            <div class="message_container">
                <div class="title-env">
                    <h1 class="title">通知消息</h1>
                </div>
                <h5></h5>
                <el-table
                        :data="tableData2"
                        style="width: 100%"
                        :row-class-name="tableRowClassName">
                    <el-table-column
                            type="selection"
                            width="55">
                    </el-table-column>
                    <el-table-column
                            prop="date"
                            label="时间"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="name"
                            label="标题"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="address"
                            label="内容">
                    </el-table-column>
                    <el-table-column
                            fixed="right"
                            label="操作"
                            width="120">
                        <template slot-scope="scope">
                            <el-button
                                    @click.native.prevent="deleteRow(scope.$index, tableData2)"
                                    type="text"
                                    size="small">
                                移除
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            tableData2: [{
                date: '2016-05-02 12:30',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄',
                state:1,
            }, {
                date: '2016-05-04 19:05',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄',
                state:0,
            }, {
                date: '2016-05-01 13:45',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄',
                state:0,
            }, {
                date: '2016-05-03 15:35',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄',
                state:1,
            }]
        }
    },
    mounted() {

    },
    methods: {
        tableRowClassName({row, rowIndex}) {
            if (row.state === 1) {
                return 'warning-row';
            } else if (rowIndex === 0) {
                return 'success-row';
            }
            return '';
        },
        deleteRow(index, rows) {
            rows.splice(index, 1);
        }
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

    .el-table /deep/ th>.cell {
        text-align: center;
    }
    .el-table /deep/ tr.warning-row {
        background: oldlace;
    }

    .el-table /deep/ tr.success-row {
        background: #f0f9eb;
    }

    .title {
        width: 90%;
        overflow: hidden;
        display: block;
        margin: 0 auto;
        font-size: 20px;
        text-align: left;
        font-weight: normal;
        margin-top: 20px;
    }
</style>
