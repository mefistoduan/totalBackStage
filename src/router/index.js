/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index'
import four from '@/components/HelloWorld'
import login from '@/page/login'
import main from '@/page/main'
import table from '@/page/table'
import chart_bar from '@/components/chart_bar'
import chart_line from '@/components/chart_line'
import chart_dona from '@/components/chart_dona'

Vue.use(Router);

export default new Router({
    routes: [{
        path: '/',
        name: 'index',
        component: index
    },
    {
        path: '/login',
        name: 'login',
        meta: {
            title: '登陆'},
        component: login
    },
    {
        path: '/main',
        name: 'main',
        meta: {
            title: '首页'},
        component: main
    },  {
        path: '/table',
        name: 'table',
        meta: {
            title: '充值缴费'},
        component: table
    },
        {
        path: '/chart_bar',
        name: 'chart_bar',
        meta: {
            title: '首页'},
        component: chart_bar
    },
        {
        path: '/chart_line',
        name: 'chart_line',
        meta: {
            title: '首页'},
        component: chart_line
    },
        {
        path: '/chart_dona',
        name: 'chart_dona',
        meta: {
            title: '首页'},
        component: chart_dona
    },
    {
    path: '*',
    name: 'four',
    component: four,//维保详情
    meta: {
        title: '404'},
    },
    ]
})
