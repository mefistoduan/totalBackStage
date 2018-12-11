<template>
    <div id="pages">
        <div class="panel">
            <div class="panel-body">
                <div class="row panel_control">
                    <el-row :gutter="20">
                        <el-col :span="3">
                            起始:
                            <el-date-picker
                                    class="panel_data"
                                    v-model="value1"
                                    type="date"
                                    placeholder="起始日期">
                            </el-date-picker>
                        </el-col>
                        <el-col :span="4">
                            截止:
                            <el-date-picker
                                    class="panel_data"
                                    v-model="value2"
                                    type="date"
                                    placeholder="截止日期">
                            </el-date-picker>
                        </el-col>
                        <el-col :span="4">
                            手机号:
                            <el-input class="panel_input" v-model="input" placeholder="手机号"></el-input>
                        </el-col>
                        <el-col :span="4">
                            爱好:
                            <el-select class="panel_select" v-model="value4" placeholder="请选择" size="medium">
                                <el-option
                                        v-for="itemSelect in optionsSelect"
                                        :key="itemSelect.value"
                                        :label="itemSelect.label"
                                        :value="itemSelect.value">
                                </el-option>
                            </el-select>
                        </el-col>
                        <el-col :span="3">
                            <el-button type="primary">查询</el-button>
                        </el-col>
                    </el-row>
                </div>
            </div>
        </div>
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
                    is-horizontal-resize
                    style="width:96%"
                    :data="tableData"
                    border
                    :multiple-sort="multipleSort"
                    @sort-change="sortChange"
                    row-hover-color="#eee"
                    row-click-color="#edf7ff"
                    :default-sort = "{prop: 'date', order: 'descending'}"
            >
                    <el-table-column
                            type="selection"
                            width="55">
                    </el-table-column>
                <el-table-column
                        label="序号"
                        sortable
                        type="index"
                        width="80">
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="姓名"
                        sortable
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="tel"
                        label="手机号"
                        sortable
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="地址"
                        :formatter="formatter">
                </el-table-column>
            </el-table>

        </v-table>
        <br>
        <v-pagination :total="600" @page-change="pageChange1" @page-size-change="pageSizeChange1"></v-pagination>
    </div>
</template>

<script>
    // 引入样式
    import 'vue-easytable/libs/themes-base/index.css'
    // 导入 table 和 分页组件
    import {VTable, VPagination} from 'vue-easytable'
    import Vue from 'vue'
    import axios from 'axios'
    // 注册到全局
    Vue.component(VTable.name, VTable);
    Vue.component(VPagination.name, VPagination);
    export default {
        data() {
            return {
                value1: '',
                value2: '',
                value3: '10',
                value: '10',
                limit: '10',
                input: '',
                optionsSelect: [{
                    value: '选项1',
                    label: '唱歌'
                }, {
                    value: '选项2',
                    label: '书法'
                }, {
                    value: '选项3',
                    label: '钢琴'
                }],
                value4: '',
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
                tableData: [
                    {"name": "赵伟", "tel": "156123451987", "hobby": "唱歌", "address": "上海市黄浦区金陵东路569号17楼"},
                    {"name": "李伟", "tel": "182123451538", "hobby": "书法", "address": "上海市奉贤区南桥镇立新路12号2楼"},
                    {"name": "孙伟", "tel": "161123450097", "hobby": "钢琴", "address": "上海市崇明县城桥镇八一路739号"},
                    {"name": "周伟", "tel": "197123451123", "hobby": "唱歌", "address": "上海市青浦区青浦镇章浜路24号"},
                    {"name": "吴伟", "tel": "183123456678", "hobby": "书法", "address": "上海市松江区乐都西路867-871号"}
                ],
                multipleSort: false,
                multipleTable: false,
                columns: [
                    {
                        field: 'name',
                        title: '姓名',
                        width: 80,
                        titleAlign: 'center',
                        columnAlign: 'center',
                        orderBy: 'asc',
                        sortable: true,
                        isResize: true
                    },
                    {
                        field: 'tel',
                        title: '手机号码',
                        width: 150,
                        titleAlign: 'center',
                        columnAlign: 'center',
                        orderBy: 'asc',
                        sortable: true,
                        isResize: true
                    },
                    {
                        field: 'hobby',
                        title: '爱好',
                        width: 150,
                        titleAlign: 'center',
                        columnAlign: 'center',
                        isResize: true
                    },
                    {
                        field: 'address',
                        title: '地址',
                        width: 280,
                        titleAlign: 'center',
                        columnAlign: 'left',
                        sortable: true,
                        formatter:"formatter",
                        isResize: true
                    }
                ]
            }
        },
        mounted() {
            // this.value1 = this.beforeDay();
            // this.value2 = this.currentDate();
            this.getTableQuery();
        },
        methods: {
            sortChange(params) {
                console.log(params)
            },
            pageChange1(pageIndex) {
                console.log(pageIndex)
            },
            pageSizeChange1(pageSize) {
                console.log(pageSize)
            },
            formatter(row, column) {
                return row.address;
            },
            getTableQuery() {
                let $this = this;
                let url = 'http://localhost:8080/static/api/table.text';//获取
                let postdata = {};
                let JSON = '';
                axios.get(url,postdata)
                    .then(function (response) {
                        JSON = response.data;
                        // console.log(JSON);
                        // if (JSON.code == 0) {
                        //    console.log(JSON);
                        // } else {
                        //     console.log(JSON);
                        // }
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }

        },
        components: {}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    @import "../../static/css/bootstrap.css";
    @import "../../static/css/ui.css";

    #pages {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        width: 96%;
        overflow: hidden;
        display: block;
        margin: 0 auto;
        background-color: #fff;
    }

    .v-scrollbar-wrap::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        border-radius: 10px;
        background-color: #F5F5F5;
    }

    .v-scrollbar-wrap::-webkit-scrollbar {
        height: 12px;
        width: 10px;
        background-color: #F5F5F5;
    }

    .v-scrollbar-wrap::-webkit-scrollbar-thumb {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
        background-color: #666;
    }

    .el-button {
        color: #fff;
    }

    .panel_control {
        width: 100%;
        overflow: hidden;
        display: block;
        margin: 0 auto;
        padding-left: 20px;
    }

    .el-date-editor.el-input, .el-date-editor.el-input__inner {
        /*float: left;*/
        /*margin-right: 10px;*/
    }

    .panel_control .el-button {
        float: left;
        height: 40px;
        line-height: 10px;
    }

    .dataTables_length {
        float: left;
        margin-bottom: 10px;
    }

    .el-select {
        width: 90px;
    }
    .panel_input {
        width: 180px;
    }
    .panel_data {
        width: 140px;
    }
    .panel_select {
        width: 180px;
    }
    .panel {
        background: #efefef;
        margin-top: 30px;
    }
</style>
