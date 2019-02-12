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
                <div class=" panel_control">
                    <el-row :gutter="20">
                        <el-col :span="4"><em>硬件版本:</em>
                            <el-select class="panel_select" v-model="panel.sel_hd" placeholder="请选择" size="medium"
                                       @change="selectGet">
                                <el-option
                                        v-for="itemSelect in panel.optionsHd"
                                        :key="itemSelect.value"
                                        :label="itemSelect.label"
                                        :value="itemSelect.value">
                                </el-option>
                            </el-select>
                        </el-col>
                        <el-col :span="4">
                            <em>设备状态:</em>
                            <el-select class="panel_select" v-model="panel.sel_operator" placeholder="请选择" size="medium"
                                       @change="selectGet">
                                <el-option
                                        v-for="itemSelect in panel.optionsOperator"
                                        :key="itemSelect.value"
                                        :label="itemSelect.label"
                                        :value="itemSelect.value">
                                </el-option>
                            </el-select>
                        </el-col>
                        <el-col :span="4">
                            <em>芯片ID:</em>
                            <el-input v-model="panel.input_cpu" placeholder="请输入内容"></el-input>
                        </el-col>
                        <el-col :span="6">
                            <em>录入时间:</em>
                            <el-date-picker
                                    v-model="panel.time1"
                                    type="daterange"
                                    range-separator="至"
                                    start-placeholder="开始日期"
                                    end-placeholder="结束日期"
                                    :default-value="panel.time1"
                            >
                            </el-date-picker>
                        </el-col>
                        <el-col :span="4">
                            <el-button type="primary" @click="query">查询</el-button>
                            <el-button type="default" @click="backPage">返回</el-button>
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
            <el-button type="success" @click="equipIn" class="pull-left ">新增设备</el-button>
            <el-button type="danger" @click="deleteStock" class="pull-left">删除</el-button>
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
                        prop="username"
                        label="任务名称"
                        sortable
                >
                </el-table-column>
                <el-table-column
                        prop="did"
                        label="设备"
                        sortable
                >
                </el-table-column>
                <el-table-column
                        prop="cpuid"
                        label="芯片ID"
                        sortable
                >
                </el-table-column>
                <el-table-column
                        prop="hdid"
                        label="硬件版本"
                        sortable
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="hdid"
                        label="产品名称"
                        sortable
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="hdid"
                        label="设备状态"
                        sortable
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="maketime"
                        label="录入时间"
                        sortable
                        :formatter="filterFmtDate"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="memo"
                        label="备注"
                        align="center"
                        sortable
                >
                </el-table-column>
                <el-table-column
                        label="操作"
                        width="100">
                    <template slot-scope="scope">
                        <el-button @click="edit(scope.row)" type="text" size="small">编辑</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <br>
            <el-pagination :total="total" @current-change="pageChange"></el-pagination>
        </div>
        <!--modal star-->
        <dialog_referrer_list
                :show="dialog.dialog_state"
                :title="dialog.dialog_title"
                :large="true"
                @dialog_cancel="dialog_cancel"
                @dialog_ok="dialog_ok"
        >
            <slot>
                <div class="row">
                    <div class="form-horizontal">
                        <div class="form-group">
                            <label class="col-sm-2 control-label">硬件版本：</label>
                            <div class="col-sm-5">
                                <el-select v-model="dialog.sel_hd" placeholder="请选择" size="medium"
                                           @change="selectGet">
                                    <el-option
                                            v-for="itemSelect in dialog.optionsHd"
                                            :key="itemSelect.value"
                                            :label="itemSelect.label"
                                            :value="itemSelect.value">
                                    </el-option>
                                </el-select>
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="col-sm-2 control-label">任务名称：</label>
                            <div class="col-sm-5">
                                <el-input v-model="dialog.task" placeholder="请输入内容"></el-input>
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="col-sm-2 control-label">生产时间：</label>
                            <div class="col-sm-5">
                                <el-date-picker
                                        v-model="dialog.maketime"
                                        type="date"
                                        placeholder="生产时间">
                                </el-date-picker>
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="col-sm-2 control-label">入库时间：</label>
                            <div class="col-sm-5">
                                <el-date-picker
                                        v-model="dialog.whtime"
                                        type="date"
                                        placeholder="入库时间">
                                </el-date-picker>
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="col-sm-2 control-label">设备数量：</label>
                            <div class="col-sm-5">
                                <el-input-number v-model="dialog.equipnum" @change="handleChange" :min="1" :max="99999"
                                                 label="请输入内容">
                                </el-input-number>
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="col-sm-2 control-label">版本说明：</label>
                            <div class="col-sm-5">
                                <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}"
                                          v-model="dialog.versionmemo"
                                          placeholder="请输入内容"></el-input>
                            </div>
                        </div>
                    </div>
                </div>
            </slot>
        </dialog_referrer_list>
        <!--modal end-->
    </div>
</template>

<script>
    import axios from 'axios';

    let qs = require('qs');
    import dialog_referrer_list from '../components/dialog_referrer_list'

    import Global from '../Global.js'

    export default {
        data() {
            return {
                sel_hd: '',//硬件版本
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
                unlockers: [],
                panel: {
                    sel_hd: '',
                    optionsHd: [
                        {
                            value: '0',
                            label: '版本1'
                        }, {
                            value: '1',
                            label: '版本2'
                        }, {
                            value: '2',
                            label: '版本3'
                        },
                    ],
                    sel_operator: '',
                    optionsOperator:globalQuipState(),
                    time1: globalBt(),//生产时间
                    time2: '',//入库时间
                    input_cpu: '',//芯片ID
                },
                dialog: {
                    dialog_state: false,
                    dialog_title: '批量入库',
                    sel_hd: '',
                    optionsHd: [
                        {
                            value: '0',
                            label: '版本1'
                        }, {
                            value: '1',
                            label: '版本2'
                        }, {
                            value: '2',
                            label: '版本3'
                        },
                    ],
                    task: '',
                    maketime: '',
                    whtime: '',
                    equipnum: 1,
                    versionmemo: '',
                },
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
            }
        },
        mounted() {
            this.getTableQuery();//获取数据
        },
        methods: {
            handleChange(value) {
                console.log(value);
            },
            edit(row) {
                let that = this;
                this.dialog.dialog_title = '编辑入库';
                this.dialog.dialog_state = true;
                that.dialog.sel_hd = row.sel_hd;
                that.dialog.task = row.task;
                that.dialog.maketime = row.maketime;
                that.dialog.whtime = row.whtime;
                that.dialog.equipnum = row.equipnum;
                that.dialog.versionmemo = row.versionmemo;
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
//            页面数据查询
            getTableQuery() {
                let that = this;
                let url = headapi + '?ctl=ajax&mod=warehouse&act=warehouseQuery';//获取
                console.log(url);
                let param = {
                    'hdid': that.panel.sel_hd,
                    'operator': that.panel.sel_operator,
                    'maketime': that.panel.time1,
                    'whtime': that.panel.time2,
                };
                let JSON = '';
                let postdata = qs.stringify(param);
                axios.post(url, postdata)
                    .then(function (response) {
                        JSON = response.data;
                        if (JSON.code == 0) {
                            that.tableData = JSON.rs;
                            that.total = JSON.total;
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
                return that.fmtDate(column, 11);
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
//            批量入库
            equipIn() {
                this.dialog.dialog_title = '批量入库';
                this.dialog.dialog_state = true;
            },
//            删除
            deleteStock() {
                let that = this;
                let thisid = '';
                let rows = this.$refs.multipleTable.selection;
                rows.forEach((item, index) => {
                    thisid += item.whid + ',';
                });
                if (!thisid) {
                    that.$message.error('请至少选择一条');
                    return false
                }
                that.unlockers = rows;

                this.$confirm('此操作将永久删除选中的记录, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    let url = headapi + '?ctl=ajax&mod=warehouse&act=warehouseDelete';
                    let param = {
                        thisid: thisid
                    };
                    let postdata = qs.stringify(param);
                    axios.post(url, postdata).then(function (data) {
                        let json = data.data;
                        if (json.code == 0) {
                            that.$message.success('入库记录删除成功');
                            that.getTableQuery();
                        } else {
                            that.$message.error(json.memo);
                        }
                    }, function (response) {
                        console.info(response);
                    })
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                })
            },
            dialog_cancel() {
                let that = this;
                that.dialog.dialog_state = false;
            }
            ,
            dialog_ok() {
                let that = this;
                let url = '';
                if (that.dialog.dialog_title == '编辑入库') {
                    url = headapi + '?ctl=ajax&mod=warehouse&act=warehouseAdd';
                } else {
                    url = headapi + '?ctl=ajax&mod=warehouse&act=warehouseEdit';
                }
                that.equipInUpdate(url);
            },
            equipInUpdate(url) {
                const that = this;
                let param = {
                    hdid: that.dialog.sel_hd,
                    task: that.dialog.task,
                    maketime: that.dialog.maketime,
                    whtime: that.dialog.whtime,
                    equipnum: that.dialog.equipnum,
                    versionmemo: that.dialog.versionmemo,
                };
                if (!that.dialog.task) {
                    that.$message.error('错了哦，任务名称不能为空');
                    return false
                }
                if (!that.dialog.maketime) {
                    that.$message.error('错了哦，生产时间不能为空');
                    return false
                }
                if (!that.dialog.whtime) {
                    that.$message.error('错了哦，入库时间不能为空');
                    return false
                }
                let postdata = qs.stringify(param);
                axios.post(url, postdata).then(function (data) {
                    let json = data.data;
                    if (json.code == 0) {
                        that.$message.success('入库操作提交成功');
                        that.dialog.dialog_state = false;
                        that.getTableQuery();//获取数据
                    } else {
                        that.$message.error(json.memo);
                    }
                }, function (response) {
                    console.info(response);
                })
            },
            backPage(){

            },
        },
        components: {
            dialog_referrer_list
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

    .panel /deep/ .el-date-editor--daterange {
        width: 280px;
    }

    .panel /deep/ .el-date-editor .el-range-separator {
        width: 30px;
    }

    .panel {
        width: 96%;
        overflow: hidden;
        display: block;
        margin: 0 auto;
        background-color: #fff;
        margin-top: 10px;
        margin-bottom: 10px;
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 10px;
        padding-bottom: 10px;
    }
    .pull-left {
        float: left;
    }

    .dataTables_length {
        float: left;
        margin-bottom: 10px;
        margin-right: 10px;
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

    /deep/ .form-horizontal .col-sm-5 .el-select {
        width: 100%;
    }

    /deep/ .form-horizontal .col-sm-5 .el-input {
        width: 100%;
    }

    /deep/ .el-input-number {
        width: 100%;
    }
</style>
