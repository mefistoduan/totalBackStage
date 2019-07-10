/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index'
import four from '@/page/four'
import login from '@/page/login'
import main from '@/page/main'
import table from '@/page/table'
import form from '@/page/form'
import pricing from '@/page/pricing'
import typography from '@/page/typography'
import button from '@/page/button'
import Courses from '@/page/Courses'
import badges from '@/page/badges'
import dropdown from '@/page/dropdown'
import page from '@/page/page'
import pwd from '@/page/pwd'
import user from '@/page/user'
import message from '@/page/message'
import chart_bar from '@/components/chart_bar'
import chart_line from '@/components/chart_line'
import chart_dona from '@/components/chart_dona'
import map from '@/page/map'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/login',
            name: 'login',
            meta: {
                title: '登陆'
            },
            component: () => import('@/page/login.vue')
        },
        {
            path: '/',
            meta: {
                title: '首页'
            },
            component: index,
            children: [
                {
                    path: '/main',
                    name: 'main',
                    meta: {
                        title: '首页'
                    },
                    component: () => import('@/page/main.vue')
                },
                {
                    path: '/table',
                    name: 'table',
                    meta: {
                        title: '表格'
                    },
                    component: table
                },
                {
                    path: '/chart_bar',
                    name: 'chart_bar',
                    meta: {
                        title: '首页'
                    },
                    component: chart_bar
                },
                {
                    path: '/chart_line',
                    name: 'chart_line',
                    meta: {
                        title: '首页'
                    },
                    component: chart_line
                },
                {
                    path: '/chart_dona',
                    name: 'chart_dona',
                    meta: {
                        title: '首页'
                    },
                    component: chart_dona
                },
                {
                    path: '/form',
                    name: 'form',
                    meta: {
                        title: 'form'
                    },
                    component: form
                },
                {
                    path: '/pricing',
                    name: 'pricing',
                    meta: {
                        title: 'pricing'
                    },
                    component: pricing
                },
                {
                    path: '/pwd',
                    name: 'pwd',
                    meta: {
                        title: 'pwd'
                    },
                    component: pwd
                },
                {
                    path: '/typography',
                    name: 'typography',
                    meta: {
                        title: 'typography'
                    },
                    component: typography
                },
                {
                    path: '/button',
                    name: 'button',
                    meta: {
                        title: '按钮'
                    },
                    component: button
                },
                {
                    path: '/Courses',
                    name: 'Courses',
                    meta: {
                        title: 'Courses'
                    },
                    component: Courses
                },
                {
                    path: '/badges',
                    name: 'badges',
                    meta: {
                        title: 'badges'
                    },
                    component: badges
                }, {
                    path: '/dropdown',
                    name: 'dropdown',
                    meta: {
                        title: 'dropdown'
                    },
                    component: dropdown
                }, {
                    path: '/page',
                    name: 'page',
                    meta: {
                        title: 'page'
                    },
                    component: page
                }, {
                    path: '/message',
                    name: 'message',
                    meta: {
                        title: 'message'
                    },
                    component: message
                }, {
                    path: '/user',
                    name: 'user',
                    meta: {
                        title: 'user'
                    },
                    component: user
                },{
                    path: '/map',
                    name: 'map',
                    meta: {
                        title: 'map'
                    },
                    component: map
                },
                {
                    path: '*',
                    name: 'four',
                    meta: {
                        title: '404'
                    },
                    component: four,//维保详情
                },
            ]
        },

    ]
})
