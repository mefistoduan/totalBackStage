<template>
    <div id="pages">
        <div class="panel">
            <div class="panel-body">
                <div class=" panel_control">
                    <el-row :gutter="20">
                        <el-col :span="4">
                            <em>产品名称:</em>
                            <el-input v-model="panel.goodsname" placeholder="请输入内容"></el-input>
                        </el-col>
                        <el-col :span="4">
                            <em>硬件分类:</em>
                            <el-select class="panel_select" v-model="panel.hdcatalog" placeholder="请选择" size="medium">
                                <el-option
                                        v-for="itemSelect in panel.optionsHd"
                                        :key="itemSelect.value"
                                        :label="itemSelect.label"
                                        :value="itemSelect.value">
                                </el-option>
                            </el-select>
                        </el-col>
                        <el-col :span="7">
                            <em>生产时间:</em>
                            <el-date-picker
                                    v-model="panel.time1[0]"
                                    align="right"
                                    type="date"
                                    placeholder="选择日期"
                            >
                            </el-date-picker>
                            <span class="mid_time">至</span>
                            <el-date-picker
                                    v-model="panel.time1[1]"
                                    align="right"
                                    type="date"
                                    placeholder="选择日期"
                            >
                            </el-date-picker>
                        </el-col>
                        <el-col :span="4">
                            <el-button type="primary" @click="query">查询</el-button>
                        </el-col>
                    </el-row>
                </div>
            </div>
        </div>
        <div class="table_container">
        <span class="dataTables_length">
            每页  <el-select v-model="pageination.pageItem" placeholder="请选择条数" @change="handleSizeChange">
            <el-option
                    v-for="item in pageination.pageoptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
            </el-option>
        </el-select>
            条记录
        </span>
            <el-button type="success" @click="addNewSw" class="pull-right ">+ 新增软件版本</el-button>

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
                    v-loading="loading"
            >
                <el-table-column
                        label="序号"
                        sortable
                        type="index"
                        align="center"
                        width="80">
                </el-table-column>
                <el-table-column
                        prop="pcbaversion"
                        label="PCB-A"
                        sortable
                >
                </el-table-column>
                <el-table-column
                        prop="goodsname"
                        label="产品名称"
                        sortable
                >
                </el-table-column>
                <el-table-column
                        prop="equipnum"
                        label="软件版本号"
                        sortable
                >
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="软件系列"
                        sortable
                >
                </el-table-column>
                <el-table-column
                        prop="hdcatalog"
                        label="硬件分类"
                        :formatter="filterHdcatalog"
                        sortable
                >
                </el-table-column>
                <el-table-column
                        prop="cdt"
                        label="创建日期"
                        :formatter="filterFmtDate"
                        width="120"
                        sortable
                >
                </el-table-column>
                <el-table-column
                        prop="agname"
                        label="代理"
                        align="center"
                        sortable
                >
                </el-table-column>
                <el-table-column
                        prop="shopname"
                        label="终端"
                        align="center"
                        sortable
                >
                </el-table-column>
                <el-table-column
                        prop="osdetail"
                        label="软件说明"
                        align="center"
                        width="220"
                        sortable
                >
                </el-table-column>
                <el-table-column
                        prop="state"
                        label="状态"
                        align="center"
                        :formatter="filterState"
                        sortable
                >
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
                        <el-button @click="detele(scope.row)" type="text" size="small">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <br>
            <el-pagination :total="pageination.total" :page-size="pageination.pageItem" @current-change="pageChange"></el-pagination>
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
                            <label class="col-sm-2 control-label">PCB-A：</label>
                            <div class="col-sm-5">
                                <el-select v-model="dialog.pcba" placeholder="请选择" size="medium"
                                           :disabled="dialog.dialog_input_state"
                                           @change="pcbaChange"
                                >
                                    <el-option
                                            v-for="itemSelect in dialog.pcbaOpt"
                                            :key="itemSelect.value"
                                            :label="itemSelect.label"
                                            :value="itemSelect.value">
                                    </el-option>
                                </el-select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2 control-label">产品名称：</label>
                            <div class="col-sm-5">
                                <el-select v-model="dialog.goodsname" placeholder="请选择" size="medium"
                                           :disabled="dialog.dialog_input_state"
                                           @change="goodsnameChange"
                                >
                                    <el-option
                                            v-for="itemSelect in dialog.goodsOpt"
                                            :key="itemSelect.value"
                                            :label="itemSelect.label"
                                            :value="itemSelect.value">
                                    </el-option>
                                </el-select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2 control-label">软件系列：</label>
                            <div class="col-sm-5">
                                <el-select v-model="dialog.osmodel" placeholder="请选择" size="medium"
                                           :disabled="dialog.dialog_input_state"
                                           @change="osseriesChange"
                                >
                                    <el-option
                                            v-for="itemSelect in dialog.osseriesOpt"
                                            :key="itemSelect.value"
                                            :label="itemSelect.label"
                                            :value="itemSelect.value">
                                    </el-option>
                                </el-select>
                                <el-button type="primary" icon="el-icon-circle-plus-outline"
                                           size="small"
                                           @click="dialogVisible = true"
                                           v-if="dialog.dialog_title == '新增软件版本'"
                                           id="addOsSserve">添加系列
                                </el-button>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2 control-label">软件版本号：</label>
                            <div class="col-sm-5">
                                <el-input v-model="dialog.osversion" :disabled="dialog.dialog_input_state"
                                          placeholder="请输入内容"></el-input>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2 control-label">硬件分类：</label>
                            <div class="col-sm-5">
                                <el-select v-model="dialog.hdcatalog" placeholder="请选择" size="medium"
                                           :disabled="dialog.dialog_input_state">
                                    <el-option
                                            v-for="itemSelect in dialog.hdcatalogOpt"
                                            :key="itemSelect.value"
                                            :label="itemSelect.label"
                                            :value="itemSelect.value">
                                    </el-option>
                                </el-select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2 control-label">代理：</label>
                            <div class="col-sm-5">
                                <el-select v-model="dialog.agid" placeholder="请选择" size="medium"
                                           :disabled="dialog.dialog_input_state">
                                    <el-option
                                            v-for="itemSelect in dialog.deptOpt"
                                            :key="itemSelect.value"
                                            :label="itemSelect.label"
                                            :value="itemSelect.value">
                                    </el-option>
                                </el-select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2 control-label">终端：</label>
                            <div class="col-sm-5">
                                <el-select v-model="dialog.shopid" placeholder="请选择" size="medium"
                                           :disabled="dialog.dialog_input_state">
                                    <el-option
                                            v-for="itemSelect in dialog.deptOpt2"
                                            :key="itemSelect.value"
                                            :label="itemSelect.label"
                                            :value="itemSelect.value">
                                    </el-option>
                                </el-select>
                            </div>
                        </div>
                        <div class="form-group"   v-if="dialog.dialog_title == '新增软件版本'">
                            <label class="col-sm-2 control-label">上传文件：</label>
                            <div class="col-sm-5">
                                <el-upload
                                        class="upload-demo"
                                        :action="dialog.uploadUrl"
                                        :on-preview="handlePreview"
                                        :before-upload="beforeUpload"
                                        :on-remove="handleRemove"
                                        :before-remove="beforeRemove"
                                        multiple
                                        :limit="1"
                                        :on-exceed="handleExceed"
                                        :on-success="onsucess"
                                        :on-error="onerror"
                                        :file-list="fileList">
                                    <el-button size="small" type="primary">点击上传</el-button>
                                    <div slot="tip" class="el-upload__tip">只能上传升级文件，且不超过10mb</div>
                                </el-upload>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2 control-label">软件说明：</label>
                            <div class="col-sm-5">
                                <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}"
                                          v-model="dialog.osdetail"
                                          :disabled="dialog.dialog_input_state"
                                          placeholder="请输入内容"></el-input>
                            </div>
                        </div>
                    </div>
                </div>
            </slot>
        </dialog_referrer_list>
        <!--modal end-->
        <el-dialog
                title="提示"
                :visible.sync="dialogVisible"
                width="35%">
            <div class="form-group">
                软件系列：
                <el-input v-model="eldialog.name" placeholder="请输入内容"></el-input>
            </div>
            <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="osseriesConfirm">确 定</el-button>
                </span>
        </el-dialog>

    </div>
</template>

<script>
    import axios from 'axios';

    let qs = require('qs');
    import dialog_referrer_list from '../components/dialog_referrer_list'

    export default {
        data() {
            return {
                // database 基本配置项目
                dialogVisible: false,
                pageination:{
                    pageItem: 10,
                    pageoptions:  pageOptions(),
                    total: 0,
                    pageIndex: 1,
                },
                tableData: [],
                allTableData: [],
                limit: '10',
                multipleSort: false,
                loading: true,
                fileList: [],
                eldialog: {
                    name: '',
                },
                // panel 配置项目
                panel: {
                    goodsname: '',
                    hdcatalog: '',
                    agid:'',
                    shopid: '',
                    shopOpt: '',
                    search: '',
                    time1:  globalBt(),
                    optionsHd: HdOptions(),
                },
                dialog: {
                    dialog_state: false,
                    dialog_title: '',
                    dialog_input_state: true,
                    hdversion: '',
                    hdversionOpt: '',
                    pcba: '',
                    pcbaid: '',
                    pcbaOpt: '',
                    goodsname: '',
                    osversion: '',
                    hdcatalog: '',
                    hdcatalogOpt: '',
                    agid: '',
                    old: '',
                    shopid: '',
                    deptOpt: '',
                    deptOpt2: '',
                    filename: '',
                    osdetail: '',
                    goodsOpt: '',
                    osmodel: '',
                    osseriesOpt: '',
                    serid: '',//软件系列id
                    uploadUrl: headapi + '?ctl=ajax&mod=index&act=upsoft'
                },
            }
        },
        mounted() {
            this.getOpt_dept();
            this.getTableQuery();
        },
        methods: {
            // 新增软件系列
            osseriesConfirm() {
                const that = this;
                let name =  this.eldialog.name;
                if(!name){
                    this.$message.error('软件系列内容不能为空');
                }
                if (!globalValid(name, 0, 20, '软件系列内容', that)) {
                    that.$message.error('错了哦，软件系列内容最多20个字');
                    return false
                }
                let url = headapi + '?ctl=ajax&mod=verctrl&act=seriesadd';
                let param = {
                    sername:name
                };
                let postdata = qs.stringify(param);
                axios.post(url, postdata).then(function(data){
                    let json = data.data;
                    if(json.code == 0){
                        that.$message.success('软件系列添加成功');
                        that.dialogVisible = false;
                        // 重载软件列表
                        that.getOpt_osseries();
                    }else{
                        Toast(JSON.memo);
                    }
                },function(response){
                    console.info(response);
                })

            },
            pcbaChange(e) {
                this.dialog.hdid = this.dialog.pcbaOpt[e - 1].hdid;
                this.dialog.pcbaid = this.dialog.pcbaOpt[e - 1].pcbaid;

            },
            goodsnameChange(e) {
                this.dialog.goodsid = this.dialog.goodsOpt[e - 1].value;
            },
            osseriesChange(e) {
                this.dialog.osmodel = this.dialog.osseriesOpt[e-1].label;
                this.dialog.serid = this.dialog.osseriesOpt[e-1].value;
            },
            // 查询按钮
            query() {
                this.getTableQuery();
                this.$message.success('查询完毕');
            },
            // 页面数据查询
            getTableQuery() {
                let that = this;
                that.loading = true;
                let url = headapi + '?ctl=ajax&mod=verctrl&act=softquery';//获取
                let param = {
                    'goodsname': that.panel.goodsname,//产品名称
                    'hdcatalog': that.panel.hdcatalog,//硬件分类
                    'agid': that.panel.agid,//代理
                    'shopid': that.panel.shopid,//终端
                };
                let JSON = '';
                let postdata = qs.stringify(param);
                axios.post(url, postdata)
                    .then(function (response) {
                        JSON = response.data;
                        that.loading = false;
                        if (JSON.code == 0) {
                            that.allTableData = JSON.rs;
                            // 设置分页数据
                            that.setPaginations();
                        } else {
                            that.$message.error(JSON.memo);
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            },
            // 设置分页数据
            setPaginations(){
                // 分页属性
                let that = this;
                that.pageination.total = that.allTableData.length;
                // 默认分页
                that.tableData = that.allTableData.filter((item,index) => {
                    return index < that.pageination.pageItem;
                });
            },
            // 每页显示数量
            handleSizeChange(){
                let that = this;
                that.tableData = that.allTableData.filter((item,index) => {
                    return index < that.pageination.pageItem;
                })
            },
            // 翻页
            pageChange(pageIndex) {
                let that = this;
                // 获取当前页
                let index = that.pageination.pageItem  * (pageIndex - 1);
                // 数据总数
                let nums =  that.pageination.pageItem * pageIndex;
                // 容器
                let tables = [];
                for(var i = index; i < nums; i++) {
                    if(that.allTableData[i]){
                        tables.push(that.allTableData[i])
                    }
                    this.tableData = tables;
                }
            },
            // 自动排序
            sortChange(params) {
                console.log(params)
            },

            // 新增软件版本
            addNewSw() {
                this.dialog.dialog_title = '新增软件版本';
                this.dialog.dialog_state = true;
                this.dialog.dialog_input_state = false;

                // clean old info
                this.dialog.hdversion = '';
                this.dialog.hdversionOpt = '';
                this.dialog.pcba = '';
                this.dialog.pcbaid = '';
                this.dialog.hdid = '';
                this.dialog.pcbaOpt = '';
                this.dialog.goodsname = '';
                this.dialog.osversion = '';
                this.dialog.hdcatalog = '1';
                this.dialog.hdcatalogOpt = HdOptions();
                this.dialog.agid = '1';
                this.dialog.shopid = '0';
                this.dialog.deptOpt = '';
                this.dialog.deptOpt2 = '';
                this.dialog.filename = '';
                this.dialog.osdetail = '';
                this.dialog.old = '';
                this.dialog.osid = '';
                this.fileList = [];

                this.getOpt_pcbaOpt();
                this.getOpt_dept();
                this.getOpt_goods();
                this.getOpt_osseries();

            },
            // 编辑软件版本
            edit(row) {
                let that = this;
                this.dialog.dialog_title = '编辑软件版本';
                this.dialog.dialog_state = true;
                this.dialog.dialog_input_state = false;
                this.read(that, row);
            },
            // 读取本行信息赋值给dialog
            read(that, row) {
                this.getOpt_pcbaOpt();
                this.getOpt_dept();
                this.getOpt_goods();
                this.getOpt_osseries();
                this.dialog.hdcatalogOpt = HdOptions();
                this.fileList = [];
                that.dialog.hdversion = row.hdversion;
                that.dialog.pcba = parseInt(row.pcbaid);
                that.dialog.pcbaid = parseInt(row.pcbaid);
                that.dialog.goodsname = row.goodsname;
                that.dialog.osversion = row.osversion;
                that.dialog.hdcatalog = row.hdcatalog.toString();
                that.dialog.agid = row.agid;
                that.dialog.shopid = row.shopid.toString();
                that.dialog.filename = row.filename;
                that.dialog.osdetail = row.osdetail;
                that.dialog.old = row.old;
                that.dialog.osmodel = row.osmodel;
                that.dialog.osid = row.osid;
                console.log('osid= ' +row.osid);
            },
            // 删除软件版本
            detele(row) {
                let that = this;
                this.$confirm('此操作将永久删除选中的记录, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    let url = headapi + '?ctl=ajax&mod=verctrl&act=softstate';
                    let param = {
                        osid: row.osid,
                        state: 44
                    };
                    let postdata = qs.stringify(param);
                    axios.post(url, postdata).then(function (data) {
                        let json = data.data;
                        if (json.code == 0) {
                            that.$message.success('软件版本删除成功');
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
            // 过滤时间
            filterFmtDate(value, row, column) {
                let that = this;
                return globalfmtDate(column, 11);
            },
            //            过滤类型
            filterState(value, row, column) {
                if (value.state == 0) {
                    return '已禁用';
                }
                if (value.state == 1) {
                    return '已启用';
                } else {
                    return '未知';
                }
            },
            //            过滤类型
            filterHdcatalog(value, row, column) {
                if (value.hdcatalog == 1) {
                    return '硬件驱动';
                }
                if (value.hdcatalog == 2) {
                    return '配置文件';
                } else {
                    return '未知';
                }
            },
            // upload
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePreview(file) {
                console.log(file);
            },
            beforeUpload(file) {
                let that = this;
                console.log(file.type);
                if (file.type != 'application/x-zip-compressed' && file.type !='application/zip' ) {
                    that.$message.error('请上传zip格式文件！');
                    return false
                }
            },
            handleExceed(files, fileList) {
                const that = this;
                if (files.length >= 1) {
                    that.$message.error('只能添加一个文件，如需更换请删除后重新添加');
                }
            },
            beforeRemove(file, fileList) {
                return this.$confirm(`确定移除 ${file.name}？`);
            },
            onsucess(response, file, fileList) {
                let res = response;
                let that = this;
                if (res.code == 0) {
                    that.$message.success(file.name + '文件上传成功');
                    that.dialog.filename = res.name;
                } else {
                    that.$message.error(res.memo);
                }
            },
            onerror(err, file, fileList) {
                console.log(err);
            },
            // dialog
            dialog_cancel() {
                let that = this;
                that.dialog.dialog_state = false;
            }
            ,
            // dialog 确认
            dialog_ok() {
                let that = this;
                let url = '';
                let activeText = that.dialog.dialog_title;
                if (activeText == '新增软件版本') {
                    url = headapi + '?ctl=ajax&mod=verctrl&act=softadd';
                } else {
                    url = headapi + '?ctl=ajax&mod=verctrl&act=softedit';//编辑
                }
                that.addNewShopUpdate(url, activeText);
            },
            // dialog 确认执行
            addNewShopUpdate(url, activeText) {
                const that = this;
                let param = {
                    osversion: that.dialog.osversion,
                    osname: that.dialog.goodsname,
                    pcbaid: that.dialog.pcbaid,
                    goodsid: that.dialog.goodsid,
                    hdcatalog: that.dialog.hdcatalog,
                    agid: that.dialog.agid,
                    shopid: that.dialog.shopid,
                    osdetail: that.dialog.osdetail,
                    hdid: that.dialog.hdid,
                    filename: that.dialog.filename,
                    serid: that.dialog.serid,
                    osid: that.dialog.osid,
                    osseries: that.dialog.osmodel,
                    // old: that.dialog.old,
                };
                if (!that.dialog.goodsname) {
                    that.$message.error('错了哦，产品名称不能为空');
                    return false
                }
                if (!globalValid(that.dialog.goodsname, 0, 20, '产品名称', that)) {
                    that.$message.error('错了哦，产品名称最多20个字');
                    return false
                }
                if (!that.dialog.osversion) {
                    that.$message.error('错了哦，软件版本号不能为空');
                    return false
                }
                if (!that.dialog.hdcatalog) {
                    that.$message.error('错了哦，硬件分类不能为全部');
                    return false
                }
                if (!globalValid(that.dialog.osversion, 0, 20, '软件版本号', that)) {
                    that.$message.error('错了哦，软件版本号最多20个字');
                    return false
                }
                if (that.dialog.osdetail != '') {
                    if (!globalValid(that.dialog.osdetail, 0, 200, '软件说明', that)) {
                        that.$message.error('错了哦，软件说明最多200个字');
                        return false
                    }
                }
                if(activeText == '新增软件版本' && !that.dialog.filename ){
                    that.$message.error('错了哦，新建软件版本必须上传软件zip文件');
                    return false
                }
                let postdata = qs.stringify(param);
                axios.post(url, postdata).then(function (data) {
                    let json = data.data;
                    if (json.code == 0) {
                        that.$message.success(activeText + '操作提交成功');
                        that.dialog.dialog_state = false;
                        that.getTableQuery();//获取数据
                    } else if (json.code == 5) {
                        // nothing
                    } else {
                        // globalCheckSession(json,that);
                        that.$message.error(json.memo);
                    }
                }, function (response) {
                    console.info(response);
                })
            },
            //获取 pcb-a 下拉菜单的内容
            getOpt_pcbaOpt() {
                const that = this;
                let url = headapi + '?ctl=ajax&mod=index&act=opt_pcbaver';
                let param = {};
                let postdata = qs.stringify(param);
                axios.post(url, postdata).then(function (data) {
                    let json = data.data;
                    let val = [];
                    let nam = [];
                    let newData = [];
                    for (let i = 0; i < json.rs.length; i++) {
                        let obj = {
                            label: json.rs[i].pcbaversion,
                            value: json.rs[i].pcbaid,
                            hdid: json.rs[i].hdid,
                            pcbaid: json.rs[i].pcbaid,
                        };
                        newData.push(obj);
                    }
                    that.dialog.pcbaOpt = newData;
                    that.dialog.pcba = newData[0].label;
                    that.dialog.pcbaid = newData[0].pcbaid;
                    that.dialog.hdid = newData[0].hdid;
                }, function (response) {
                    console.info(response);
                })
            },
            //获取下拉菜单的内容
            getOpt_dept() {
                const that = this;
                let url = headapi + '?ctl=ajax&mod=index&act=opt_dept';
                let param = {};
                let postdata = qs.stringify(param);
                axios.post(url, postdata).then(function (data) {
                    let json = data.data;
                    var val = [];
                    var nam = [];
                    var newData = [];
                    for (var i = 0; i < json.rs.length; i++) {
                        var obj = {
                            label: json.rs[i].deptname,
                            value: json.rs[i].deptid,
                        };
                        newData.push(obj);
                    }
                    that.dialog.deptOpt = newData;
                    that.panel.shopOpt = newData;
                    that.dialog.pcba = newData[0].value;
                    let newDate2 = newData;
                    newDate2.unshift({deptname:'无',deptlevel:'无',deptid:'0',label:'无',value:'0',});
                    that.dialog.deptOpt2 = newDate2;
                    // that.dialog.shopid = newDate2[0].value;
                }, function (response) {
                    console.info(response);
                })
            },
            // 获取产品下拉菜单的内容
            getOpt_goods() {
                const that = this;
                let url = headapi + '?ctl=ajax&mod=index&act=opt_goodsinfo';
                let param = {};
                let postdata = qs.stringify(param);
                axios.post(url, postdata).then(function (data) {
                    let json = data.data;
                    var val = [];
                    var nam = [];
                    var newData = [];
                    for (var i = 0; i < json.rs.length; i++) {
                        var obj = {
                            label: json.rs[i].goodsname,
                            value: json.rs[i].goodsid,
                            catalogid: json.rs[i].catalogid,
                        };
                        newData.push(obj);
                    }
                    that.dialog.goodsOpt = newData;
                    that.dialog.goodsname = newData[0].label;
                    that.dialog.goodsid = newData[0].value;
                }, function (response) {
                    console.info(response);
                })
            },
            // 获取软件下拉菜单的内容
            getOpt_osseries() {
                const that = this;
                let url = headapi + '?ctl=ajax&mod=index&act=opt_osseries';
                let param = {};
                let postdata = qs.stringify(param);
                axios.post(url, postdata).then(function (data) {
                    let json = data.data;
                    var val = [];
                    var nam = [];
                    var newData = [];
                    for (var i = 0; i < json.rs.length; i++) {
                        var obj = {
                            label: json.rs[i].name,
                            value: json.rs[i].serid,
                        };
                        newData.push(obj);
                    }
                    that.dialog.osseriesOpt = newData;
                    that.dialog.osmodel = newData[0].label;
                    that.dialog.serid = newData[0].value;
                }, function (response) {
                    console.info(response);
                })
            },
        },
        components: {
            dialog_referrer_list
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    @import "../assets/css/panel.css";

    /deep/ .el-upload__input {
        display: none;
    }
    a {
        text-decoration: none;
    }

    #addOsSserve {
        position: relative;
        float: left;
        margin-top: 10px;
    }

    .form-horizontal .form-group {
        overflow: hidden;
    }

</style>
