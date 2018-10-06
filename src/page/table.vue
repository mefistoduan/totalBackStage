<template>
    <div id="pages">
        <data-table :data-table="tableData"></data-table>
    </div>
</template>
<script>
    import DataTable from '../components/DataTable.vue';
    export default {
        data () {
            return {
                tableData: {
                    options: {
                        sortable: true,
                        editable: true,
                        pageCount: 10
                    },
                    columns: [
                        {
                            value: 'id',
                            text: 'ID',
                            sortable: true,
                            editable: false
                        },
                        {
                            value: 'name',
                            text: 'Name',
                            sortable: true,
                            editable: true
                        },
                        {
                            value: 'age',
                            text: 'Age',
                            sortable: true,
                            editable: true
                        },
                        {
                            value: 'sex',
                            text: 'Sex',
                            sortable: true,
                            editable: true
                        },
                        {
                            value: 'link',
                            text: 'Link',
                            sortable: false,
                            editable: false,
                        },
                        {
                            value: 'action',
                            text: 'Action',
                            sortable: false,
                            editable: false,
                        }
                    ],
                        rows: [
                            // {id:1,name:2,age:3,sex:4,link:5,action:6},
                            {id:1,name:2,age:3,sex:4,link:5,action:6},
                        ],
                        onPageChanged(page) {
                            console.log('Current page is ' + page);
                        }
                    }
            }
        },
        methods: {

        },
        components: {
            DataTable
        }
    }
</script>


