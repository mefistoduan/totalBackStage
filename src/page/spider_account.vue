<template>
    <div id="pages">
        <div class="container">
            <div class="row">
                <div class="sub_title">
                    <img src="/static/images/comm/file.png" alt="">
                    <em>蜘蛛管理</em>
                </div>
            </div>
        </div>
        <div class="panel">
            <div class="panel-body">
                <div class="row panel_control">
                    <el-row :gutter="20">
                        <el-col :span="4">
                            <em>起始:</em>
                            <el-date-picker
                                    class="panel_data"
                                    v-model="bt"
                                    type="date"
                                    placeholder="起始日期">
                            </el-date-picker>
                        </el-col>
                        <el-col :span="4">
                            <em>截止:</em>
                            <el-date-picker
                                    class="panel_data"
                                    v-model="et"
                                    type="date"
                                    placeholder="截止日期">
                            </el-date-picker>
                        </el-col>
                        <el-col :span="4">
                            <em>  类型:</em>
                            <el-select class="panel_select" v-model="sel_state" placeholder="请选择" size="medium"
                                       @change="selectGet">
                                <el-option
                                        v-for="itemSelect in optionsSelect"
                                        :key="itemSelect.value"
                                        :label="itemSelect.label"
                                        :value="itemSelect.value">
                                </el-option>
                            </el-select>
                        </el-col>
                        <el-button class="pull-right add_btn" type="success" @click="add_refeerer">添加</el-button>
                        <el-button class="pull-right" type="primary" @click="query">查询</el-button>
                    </el-row>

                </div>
            </div>
        </div>
        <div class="table_container">
        <span class="dataTables_length">
            每页  <el-select v-model="tableMax" placeholder="请选择条数" @change="pageMaxChange">
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
                        prop="spcode"
                        label="账号名"
                        sortable
                >
                </el-table-column>
                <el-table-column
                        prop="pwd"
                        label="密码"
                        sortable
                >
                </el-table-column>
                <el-table-column
                        prop="state"
                        label="状态"
                        sortable
                        :formatter="filterState"
                        width="80"
                >
                </el-table-column>
                <el-table-column
                        prop="lastlogintime"
                        label="最近登录"
                        :formatter="filterFmtDate"
                        sortable
                >
                </el-table-column>
                <el-table-column
                        prop="lastloginip"
                        label="登录IP"
                        sortable
                >
                </el-table-column>
                <el-table-column
                        prop="daylogtimes"
                        label="当日登录"
                        sortable
                        width="110"
                >
                </el-table-column>
                <el-table-column
                        prop="daymarknum"
                        label="当日有效"
                        sortable
                        width="110"

                >
                </el-table-column>
                <el-table-column
                        prop="daycrawlsnum"
                        label="当日成功"
                        sortable
                        width="110"

                >
                </el-table-column>
                <el-table-column
                        prop="daycrawlenum"
                        label="当日失败"
                        sortable
                        width="110"

                >
                </el-table-column>
                <el-table-column
                        prop="memo"
                        label="备注"
                        sortable
                >
                </el-table-column>
                <el-table-column
                        prop="spid"
                        label="操作"
                        sortable
                >
                    <template slot-scope="scope">
                        <el-button type="primary" size="small" @click="spidChange(scope.row.spid,scope.row)">
                            修改
                        </el-button>
                        <el-button type="danger" size="small" @click="spidDel(scope.row.spid,scope.row)">删除
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
            <br>
            <el-pagination
                    background
                    layout="prev, pager, next"
                    :page-size="tableMax"
                    :total="table_total"
                    @page-change="pageChange"
                    @current-change="pageChange"
            >
            </el-pagination>
        </div>
        <dialog_spid_list
                :show="dialog_state"
                :title="dialog_title"
                :large="true"
                @dialog_cancel="dialog_cancel"
                @dialog_ok="dialog_ok"
        >
            <slot>
                <div class="row">
                    <div class="form-group">
                        <label class="col-sm-3 control-label" for="field_name">账号</label>
                        <div class="col-sm-9">
                            <input type="text" class="form-control" id="field_name" v-model="field_name"
                                   placeholder="请填写账号">
                        </div>
                    </div>
                    <div class="form-group" v-if="dialog_type == 2">
                        <label class="col-sm-3 control-label" for="field_name">状态</label>
                        <div class="col-sm-9">
                            <select name="" id="field_shop" class="form-control" v-model="field_shop">
                                <option value="0">禁用</option>
                                <option value="1">启用</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label" for="field_memo">备注</label>
                        <div class="col-sm-9">
                            <textarea name="" id="field_memo" cols="30" rows="10" v-model="field_memo"
                                      class="form-control" placeholder="填写备注"></textarea>
                        </div>
                    </div>
                </div>
            </slot>
        </dialog_spid_list>
    </div>
</template>

<script>
    import axios from 'axios';
    import dialog_spid_list from '../components/dialog_spid_list'

    let qs = require('qs');
    export default {
        data() {
            return {
                bt: '',
                et: '',
                value3: '10',
                value4: '',
                value: '10',
                limit: '10',
                input_tel: '',
                sel_state: '',
                input_spid_id: '',
                sel_cc: '',
                sel_pay: '',
                table_total: 0,
                pageIndex: 1,
                userstate: '',
                thisrows: '',
                modal_unlock: false,
                dialog_state: false,
                dialog_title: '',
                dialog_type: '',//类型，1是添加，2是修改
                field_name: '',
                field_id: '',
                field_memo: '',
                field_shop: 1,
                unlockers: [],
                optionsSelect: [
                    {
                        value: '',
                        label: '全部'
                    }, {
                        value: '0',
                        label: '禁用'
                    }, {
                        value: '1',
                        label: '启用'
                    },
                ],
                optionsState: [
                    {
                        value: '',
                        label: '全部'
                    }, {
                        value: '1',
                        label: '标准洗车'
                    }, {
                        value: '2',
                        label: '外观洗车'
                    },
                ],
                optionsCostomer: [
                    {
                        value: '',
                        label: '全部'
                    }, {
                        value: '1',
                        label: '预约洗车'
                    }, {
                        value: '2',
                        label: '用户到店'
                    },
                ],
                optionsCc: [
                    {
                        value: '',
                        label: '全部'
                    }, {
                        value: '1',
                        label: '未洗'
                    }, {
                        value: '2',
                        label: '已洗'
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
                tableMax: 10,
                multipleSort: false,
            }
        },
        mounted() {
            this.getTableQuery();
        },
        methods: {
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
            selectGet(vId) {//这个vId也就是value值
                console.log(vId);
            },
            pageMaxChange(vId) {//这个vId也就是value值
                this.tableMax = parseInt(vId);
            },
            // 查询按钮
            query() {
                this.getTableQuery();
            },
            getTableQuery() {
                let that = this;
                let url = '/?ajax=spider_account_query';
                let param = {
                    BT: that.bt,
                    ET: that.et,
                    spid: that.input_spid_id,
                    pay_mode: that.tableState,
                    MAX: that.tableMax,
                };
                let JSON = '';
                let postdata = qs.stringify(param);
                axios.post(url, postdata)
                    .then(function (response) {
                        JSON = response.data;
                        if (JSON.code == 0) {
                            that.tableData = JSON.rs;
                            that.table_total = JSON.rs.length;
                        } else {
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
                return that.fmtDate(value['lastlogintime'], 16);
            },
            //            过滤类型
            filterState(value, row, column) {
                let that = this;
                if (value.shop == 1) {
                    return '启用';
                } else {
                    return '禁用';
                }
            },
            spidChange(spid, row) {
                let that = this;
                that.dialog_state = true;
                that.dialog_type = 2;
                that.dialog_title = '修改推荐员';
                that.field_name = row.spcode;
                that.field_id = row.spid;
                that.field_memo = row.memo;
                that.field_shop = row.state;

            },
            spidDel(spid, row) {
                let that = this;
                that.$confirm('此操作将永久删除' + row.spcode + ', 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    let url = '/?ajax=spider_account_edit';
                    let param = {
                        spid: spid,
                        STATE: 44,
                    };
                    let postdata = qs.stringify(param);
                    axios.post(url, postdata).then(function (data) {
                        let json = data.data;
                        if (json.code == 0) {
                            that.$message.success(row.spcode + '删除成功');
                            that.getTableQuery();
                        } else {
                            that.$message.error(json.memo);
                        }
                    }, function (response) {
                        console.info(response);
                    })
                }).catch(() => {
                    that.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },
//            添加推荐员
            add_refeerer() {
                let that = this;
                that.dialog_state = true;
                that.dialog_type = 1;
                that.dialog_title = '添加账号';
                that.field_name = '';
                that.field_id = '';
                that.field_memo = '';
                that.field_shop = 0;
            },
            dialog_cancel() {
                let that = this;
                that.dialog_state = false;
            },
            dialog_ok() {
                let that = this;
                let dialog_type = that.dialog_type;
                let name = that.field_name;
                let id = that.field_id;
                let field_shop = that.field_shop;
                let memo = that.field_memo;

                if (!name) {
                    that.$message.error('账号不能为空');
                    return false
                }
                if (name.length > 25) {
                    that.$message.error('账号最长25位');
                    return false
                }
                let url = '';
                let act = '';
                if (that.dialog_type == 1) {
                    url = '/?ajax=spider_account_add'; //1 添加
                    act = '添加';
                } else {
                    url = '/?ajax=spider_account_edit'; //2 修改
                    act = '修改';
                }

                let param = {
                    spcode: name,
                    memo: memo,
                };
                let postdata = qs.stringify(param);
                axios.post(url, postdata).then(function (data) {
                    let json = data.data;
                    if (json.code == 0) {
                        that.$message.success(name + act + '成功！');
                        that.getTableQuery();
                    } else {
                        that.$message.error(JSON.memo);
                    }
                }, function (response) {
                    console.info(response);
                });
                that.dialog_state = false;
            }
        },
        components: {
            dialog_spid_list
        }
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
        background-color: #F2F2F2;
        padding-bottom: 80px;
    }

    /deep/ .el-row {
        margin-bottom: 5px;
    }

    .sub_title {
        width: 96%;
        overflow: hidden;
        display: block;
        margin: 0 auto;
        margin-top: 10px;
        text-align: left;
    }

    .sub_title em {
        text-decoration: none;
        font-style: normal;
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
        font-style: normal;
        font-size: 14px;
    }

    .panel /deep/ .el-input {
        width: 110px;
        float: left;
    }

    .panel /deep/ .el-select {
        width: 110px;
        float: left;
    }

    .panel /deep/ .el-input__inner {
        width: 130px;
        border-radius: 0;
        float: left;
    }

    .panel {
        width: 96%;
        overflow: hidden;
        display: block;
        margin: 0 auto;
        background-color: #fff;
        margin-top: 20px;
        padding-left: 2%;
        padding-right: 2%;
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
        display: block !important;
    }

    .modal ul, .modal li {
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

    .add_btn {
        margin-left: 20px;
    }

    .form-group {
        width: 100%;
        overflow: hidden;
        display: block;
        margin: 0 auto;
    }

    .control-label {
        height: 35px;
        line-height: 35px;
    }

    /deep/ .el-table td, .el-table th {
        padding: 5px 0;
        font-size: 14px;
    }
</style>
