<template>
    <div id="pages">
        <div class="container">
            <div class="row">
                <div class="sub_title">
                    <i class="el-icon-tickets"></i>
                    <em>用户管理</em>
                </div>
            </div>
        </div>
        <div class="panel">
            <div class="panel-body">
                <div class="row panel_control">
                    <el-row :gutter="20">
                        <el-col :span="4"><em>手机号:</em>
                            <el-input class="panel_input" v-model="input_tel" placeholder="手机号"></el-input>
                        </el-col>
                        <el-col :span="4">
                            <em>用户状态:</em>
                            <el-select class="panel_select" v-model="sel_hobbit" placeholder="请选择" size="medium"
                                       @change="selectGet">
                                <el-option
                                        v-for="itemSelect in optionsSelect"
                                        :key="itemSelect.value"
                                        :label="itemSelect.label"
                                        :value="itemSelect.value">
                                </el-option>
                            </el-select>
                        </el-col>
                        <el-col :span="6">
                            <el-button type="primary" @click="query">查询</el-button>
                            <el-button type="success" @click="unlock">解锁</el-button>
                        </el-col>
                    </el-row>
                </div>
            </div>
        </div>
        <div class="table_container">
        <span class="dataTables_length">
            每页  <el-select v-model="value" placeholder="请选择条数">
            <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
            </el-option>
        </el-select>
            条记录
        </span>
            <el-table
                    ref="multipleTable"
                    is-horizontal-resize
                    :data="tableData"
                    border
                    :multiple-sort="multipleSort"
                    @sort-change="sortChange"
                    row-hover-color="#eee"
                    row-click-color="#edf7ff"
                    :default-sort="{prop: 'date', order: 'descending'}"
            >
                <el-table-column
                        type="selection"
                        align="center"
                        width="55">
                </el-table-column>
                <el-table-column
                        label="序号"
                        sortable
                        type="index"
                        align="center"
                        width="80">
                </el-table-column>
                <el-table-column
                        prop="usercode"
                        label="手机号"
                        sortable
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="username"
                        label="姓名"
                        sortable
                >
                </el-table-column>
                <el-table-column
                        prop="cdt"
                        label="注册时间"
                        sortable
                        :formatter="filterFmtDate"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="daycancel"
                        label="日取消次数"
                        align="center"
                        sortable
                >
                </el-table-column>
                <el-table-column
                        prop="monthbroke"
                        label="月取消次数"
                        align="center"
                        sortable
                >
                </el-table-column>
                <el-table-column
                        prop="state"
                        label="用户状态"
                        align="center"
                        :formatter="filterState"
                        sortable
                >
                </el-table-column>
            </el-table>
            <br>
            <v-pagination :total="total" @page-change="pageChange"></v-pagination>
        </div>

        <div :class="[{'modal in':modal_unlock},{'fade':!modal_unlock}]" id="modal_unlock" tabindex="-1" aria-hidden="false">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" @click="modal_cancle">
                            ×
                        </button>
                        <h4 class="modal-title" >解锁用户</h4>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <h5>你是否要解锁以下用户：</h5>
                            <table class="table table-bordered table-striped">
                                <tbody>
                                <tr class="single">
                                    <td><label class="control-label">列表</label></td>
                                    <td class="ff">
                                        <ul class="coupon_ul">
                                            <li v-for="unlocker in unlockers">
                                                {{unlocker.username}}  &nbsp;&nbsp;{{unlocker.usercode}}
                                            </li>
                                        </ul>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-cancle" @click="modal_cancle">取消</button>
                        <button type="button" class="btn btn-info agree_destory" @click="unlocklist" >立即解锁</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import axios from 'axios';
    let qs = require('qs');
    export default {
        data() {
            return {
                value1: '',
                value2: '',
                value3: '10',
                value4: '',
                value: '10',
                limit: '10',
                input_tel: '',
                sel_hobbit: '',
                total: 0,
                pageIndex: 1,
                userstate: '',
                modal_unlock: false,
                unlockers: [],
                optionsSelect: [
                    {
                        value: '0',
                        label: '全部'
                    }, {
                        value: '1',
                        label: '正常'
                    }, {
                        value: '2',
                        label: '锁定'
                    },
                ],
                options: [{
                    value: '10',
                    label: '10'
                }, {
                    value: '25',
                    label: '25'
                }, {
                    value: '50',
                    label: '50'
                }, {
                    value: '100',
                    label: '100'
                },],
                tableData: [],
                multipleSort: false,
//                columns: []
            }
        },
        mounted() {
//            this.getTableQuery();
        },
        methods: {
            modal_cancle(){
                let that = this;
                that.modal_unlock = false;
            },
//            解锁确认
            unlocklist(){
                const that = this;
                let url = 'api/?ctl=ajax&mod=shop&act=clearUserBroke';
                let user = '';
                that.unlockers.forEach(function (i,v) {
                    user += that.unlockers[v]['uid'] + ',';
                });
                let param = {
                    userids: user,
                };
                let postdata = qs.stringify(param);
                axios.post(url, postdata).then(function(data){
                    let json = data.data;
                    if(json.code == 0){
                        that.$message.success('解锁用户状态已成功');
                        that.getTableQuery();
                    }else{
                        that.$message.error(json.memo);
                    }
                },function(response){
                    console.info(response);
                })
            },
            selectGet(vId) {//这个vId也就是value值
                this.userstate = vId;
            },
            sortChange(params) {
                console.log(params)
            },
            pageChange(pageIndex) {
                this.pageIndex = pageIndex;
                this.getTableQuery();
            },
            formatter(row, column) {
                return row.address;
            },
            // 查询按钮
            query() {
                this.getTableQuery();
            },
            // 解锁按钮
            unlock() {
                let that = this;
                let thisid = '';
                let rows = this.$refs.multipleTable.selection;
                rows.forEach((item, index) => {
                    thisid += item.id + ',';
                });
                if (!thisid) {
                    that.$message.error('请至少选择一条');
                    return false
                }
                that.unlockers = rows;
                that.modal_unlock = true;
            },
            getTableQuery() {
                let that = this;
                let url = 'api/?ctl=ajax&mod=shop&act=userListQuery';//获取
                let param = {
                    'userstate': that.userstate,
                    'tel': that.input_tel
                };
                let JSON = '';
                let postdata = qs.stringify(param);
                axios.post(url, postdata)
                    .then(function (response) {
                        JSON = response.data;
                        if (JSON.code == 0) {
                            that.tableData = JSON.rs;
                            that.total = JSON.total;
                        }else{
                            that.$message.error(JSON.memo);
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            },
//            过滤时间
            filterFmtDate(value, row, column) {
                let that = this;
                return that.fmtDate(value['cdt'], 11);
            },
//            过滤类型
            filterState(value, row, column) {
                let that = this;
                if (value.state == 1) {
                    return '正常';
                } else {
                    return '已锁定';
                }
            },
        },
        components: {}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    @import "../../static/css/ele.css";
    @import "../../static/css/bootstrap.css";
    /*@import "../../static/css/comm.css";*/
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

    .container {
        width: 100%;
        overflow: hidden;
        display: block;
        margin: 0 auto;
    }

    .panel /deep/ .el-col em {
        float: left;
        text-align: left;
        line-height: 35px;
        margin-right: 10px;
    }

    .panel /deep/ .el-input {
        width: 140px;
        float: left;
    }

    .panel /deep/ .el-select {
        width: 140px;
        float: left;
    }

    .panel /deep/ .el-input__inner {
        width: 140px;
        border-radius: 0;
        float: left;
    }

    .panel {
        width: 96%;
        overflow: hidden;
        display: block;
        margin: 0 auto;
        background-color: #fff;
        padding-top: 20px;
        padding-bottom: 20px;
        margin-top: 20px;
    }

    .dataTables_length {
        float: left;
        margin-bottom: 10px;
    }

    .table_container {
        width: 96%;
        overflow: hidden;
        margin-top: 5px;
        margin-bottom: 10px;
        background-color: #fff;
        margin-left: 2%;
        float: left;
        padding: 10px;
    }

    .table_container /deep/ .el-input__inner {
        width: 80px;
    }
    .modal {
        display: block!important;
    }
    .modal ul,.modal li {
        margin: 0;
        padding: 0;
        list-style: none;
    }
    .modal li {
        width: 100%;
        overflow: hidden;
        display: block;
        margin: 0 auto;
        height: 24px;
        line-height: 24px;
        text-align: left;
    }
</style>
