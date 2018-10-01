/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index'
import four from '@/components/HelloWorld'
import login from '@/page/login'
import main from '@/page/main'

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
