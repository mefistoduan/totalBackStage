<template>
    <div>
        <v-table
                is-horizontal-resize
                style="width:100%"
                :multiple-sort="multipleSort"
                :columns="columns"
                :table-data="tableData"
                @sort-change="sortChange"
                row-hover-color="#eee"
                row-click-color="#edf7ff"
        ></v-table>
        <v-pagination :total="600"  @page-change="pageChange1" @page-size-change="pageSizeChange1"></v-pagination>
    </div>
</template>

<script>
    // 引入样式
    import 'vue-easytable/libs/themes-base/index.css'
    // 导入 table 和 分页组件
    import {VTable,VPagination} from 'vue-easytable'
    import Vue from 'vue'
    // 注册到全局
    Vue.component(VTable.name, VTable)
    Vue.component(VPagination.name, VPagination)
    // http://doc.huangsw.com/vue-easytable/app.html#/table/sort
    export default {
        data(){
            return {
                tableData: [
                    {"name":"赵伟","tel":"156*****1987","hobby":"钢琴、书法、唱歌","address":"上海市黄浦区金陵东路569号17楼"},
                    {"name":"李伟","tel":"182*****1538","hobby":"钢琴、书法、唱歌","address":"上海市奉贤区南桥镇立新路12号2楼"},
                    {"name":"孙伟","tel":"161*****0097","hobby":"钢琴、书法、唱歌","address":"上海市崇明县城桥镇八一路739号"},
                    {"name":"周伟","tel":"197*****1123","hobby":"钢琴、书法、唱歌","address":"上海市青浦区青浦镇章浜路24号"},
                    {"name":"吴伟","tel":"183*****6678","hobby":"钢琴、书法、唱歌","address":"上海市松江区乐都西路867-871号"}
                ],
                multipleSort:false,
                columns: [
                    {field: 'name', title: '姓名', width: 80, titleAlign: 'center',columnAlign:'center',orderBy:'asc',isResize:true},
                    {field: 'tel', title: '手机号码', width: 150, titleAlign: 'center',columnAlign:'center',orderBy:'asc',isResize:true},
                    {field: 'hobby', title: '爱好', width: 150, titleAlign: 'center',columnAlign:'center',isResize:true},
                    {field: 'address', title: '地址',width: 280, titleAlign: 'center',columnAlign:'left',isResize:true}
                ]
            }
            },
        mounted() {

        },
        methods: {
            sortChange(params){
                console.log(params)
            },
            pageChange1(pageIndex){
                console.log(pageIndex)
            },
            pageSizeChange1(pageSize){
                console.log(pageSize)
            }
        },
        components: {

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #pages {
        position: absolute;
        top:0;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        overflow: hidden;
        display: block;
        margin: 0 auto;
        background-color: #F2F2F2;
    }
    .v-table-class{
        /*font-size: 14px;
         font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;*/
    }
    .v-table-title-class {
        /*font-weight: normal;
         color: #333333;
         text-shadow: 0 0 0 #333333;*/
    }
    .v-table-body-class {
        /*font-weight: normal;
          color: #333333;
          text-shadow: 0 0 0 #333333;*/
    }
    .v-table-footer-class {
        /*font-weight: normal;
          color: #333333;
          text-shadow: 0 0 0 #333333;*/
    }
    .v-scrollbar-wrap::-webkit-scrollbar-track
    {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        border-radius: 10px;
        background-color: #F5F5F5;
    }

    .v-scrollbar-wrap::-webkit-scrollbar
    {
        height:12px;
        width:10px;
        background-color: #F5F5F5;
    }

    .v-scrollbar-wrap::-webkit-scrollbar-thumb
    {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
        background-color: #666;
    }
</style>
