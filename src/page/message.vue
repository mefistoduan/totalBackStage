<template>
    <div id="pages">
        <div class="container">
            <div class="message_container">
                <div class="title-env">
                    <h1 class="title">
                        <h5>通知消息</h5>
                        <div class="pull-right">
                            <el-row>
                                <el-button type="danger" @click="delete_more">批量删除</el-button>
                            </el-row>
                        </div>

                    </h1>
                </div>
                <el-table
                        :data="tableData2"
                        style="width: 100%"
                        ref="multipleTable"
                        @selection-change="handleSelectionChange"
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
                            width="340">
                        <template slot-scope="scope">
                            <el-button
                                    @click.native.prevent="deleteRow(scope.$index, tableData2)"
                                    type="danger"
                                    size="small">
                                移除
                            </el-button>
                            <el-button
                                    @click.native.prevent="deleteRow(scope.$index, tableData2)"
                                    type="primary"
                                    size="small">
                                查看
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
        data() {
            return {
                tableData2: [{
                    date: '2016-05-02 12:30',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                    state: 1,
                    id: 1,
                }, {
                    date: '2016-05-04 19:05',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                    state: 0,
                    id: 2,
                }, {
                    date: '2016-05-01 13:45',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                    state: 0,
                    id: 3,
                }, {
                    date: '2016-05-03 15:35',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                    state: 1,
                    id: 4,
                }],
                multipleSelection: [],
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
            },
            delete_more: function (val) {
                let thisIdArr = [];
                this.multipleSelection.forEach((val) => {
                    thisIdArr.push(val['id'])
                });
                // console.log(thisIdArr);// [1, 2, 3, 4]
                if(thisIdArr == ''){
                    this.$message.error('错了哦，最少选中一条记录');
                    return false
                }
                this.$confirm('此操作将永久删除该记录, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    // ajax todo
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });

            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
            }
        },
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

    .el-table /deep/ th > .cell {
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

    .pull-right {
        float: right;
    }
</style>
