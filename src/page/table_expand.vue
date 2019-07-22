<template>
    <div id="pages">
        <div class="container">
            <div class="row">
                <el-table
                        :data="tableData"
                        style="width: 100%"
                        row-key="id"
                        :expand-row-keys="expandKeys"
                        @expand-change="expandChange">

                    <el-table-column type="expand">
                        <template slot-scope="props">
                            <el-table v-loading="loading" :data="subTableData[props.row.id]" style="width: 100%">
                                <el-table-column label="店铺地址" prop="address"></el-table-column>
                                <el-table-column label="所属店铺" prop="shop"></el-table-column>
                                <el-table-column label="店铺 ID" prop="shopId"></el-table-column>
                            </el-table>
                        </template>
                    </el-table-column>
                    <el-table-column
                            label="商品 ID"
                            prop="id">
                    </el-table-column>
                    <el-table-column
                            label="商品名称"
                            prop="name">
                    </el-table-column>
                    <el-table-column
                            label="描述"
                            prop="desc">
                    </el-table-column>

                </el-table>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    let qs = require('qs');
    import Global from '../Global.js'
export default {
    data () {
    return {
        expandShift:false,	//是否折叠其它行记录
        cacheSubTableData:true,	//是否使用缓存
        expandKeys:[],
        loading:true,
        subTableData:[],
        expandAction:0,
        tableData: [{
            id: '1',
            name: '1 好滋好味鸡蛋仔',
            category: '江浙小吃、小吃零食',
            desc: '荷兰优质淡奶，奶香浓而不腻',
        }, {
            id: '2',
            name: '2 好滋好味鸡蛋仔',
            category: '江浙小吃、小吃零食',
            desc: '荷兰优质淡奶，奶香浓而不腻',
        }, {
            id: '3',
            name: '3 好滋好味鸡蛋仔',
            category: '江浙小吃、小吃零食',
            desc: '荷兰优质淡奶，奶香浓而不腻',
        }]
    }
    },
    mounted() {

    },
    methods: {
        expandChange(row, expandedRows) {
            if(this.expandAction > expandedRows.length){
                console.log('行被收起');
                this.expandAction = expandedRows.length;
                return;
            }
            this.expandAction = expandedRows.length;

            let _this = this;

            //恢复默认值
            _this.loading = true;
            if ((!_this.cacheSubTableData) || _this.subTableData[row.id] == undefined || !(_this.subTableData[row.id].length > 0))
            {
                _this.subTableData[row.id] = [];

                //加载数据
                _this.subTableData[row.id] = [{
                    address: row.id + '-1 上海市普陀区真北路',
                    shop: row.id + '-1 王小虎夫妻店',
                    shopId: row.id + '-1 10333'
                },
                    {
                        address: row.id + '-2 上海市普陀区真北路',
                        shop: row.id + '-2 王小虎夫妻店',
                        shopId: row.id + '-2 10333'
                    },
                    {
                        address: row.id + '-3 上海市普陀区真北路',
                        shop: row.id + '-3 王小虎夫妻店',
                        shopId: row.id + '-3 10333'
                    }
                ]
                //console.log(row.id + " 加载数据完毕");
            }
            else {
                //console.log(row.id + " 加载缓存完毕");
            }
            _this.loading = false;
            if (this.expandShift) {
                _this.expandKeys.shift();
                _this.expandKeys.push(row.id);
            }

            /*
            axios.get('/subtable/data')
                .then(function (res) {
                    _this.subTableData[row.id] = res.data;
                    _this.loading = false;
                    _this.expandKeys.shift();
                    _this.expandKeys.push(row.id);
                }).catch(function (error) {
                console.log(error);
            });
            */
            if (this.expandShift && expandedRows.length > 1) {
                expandedRows.shift();	//只展开当前选项
            }
        }
    },
    components: {

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    @import "../assets/css/panel.css";
</style>
