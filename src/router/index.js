/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'

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
            component: () => import('@/page/index.vue'),
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
                    component: () => import('@/page/table.vue')
                },
                {
                    path: '/chart_bar',
                    name: 'chart_bar',
                    meta: {
                        title: '首页'
                    },
                    component: () => import('@/components/chart_bar.vue')
                },
                {
                    path: '/chart_line',
                    name: 'chart_line',
                    meta: {
                        title: '首页'
                    },
                    component: () => import('@/components/chart_line.vue')
                },
                {
                    path: '/chart_dona',
                    name: 'chart_dona',
                    meta: {
                        title: '首页'
                    },
                    component: () => import('@/components/chart_dona.vue')
                },
                {
                    path: '/form',
                    name: 'form',
                    meta: {
                        title: 'form'
                    },
                    component: () => import('@/page/form.vue')
                },
                {
                    path: '/pricing',
                    name: 'pricing',
                    meta: {
                        title: 'pricing'
                    },
                    component: () => import('@/page/pricing.vue')
                },
                {
                    path: '/pwd',
                    name: 'pwd',
                    meta: {
                        title: 'pwd'
                    },
                    component: () => import('@/page/pwd.vue')
                },
                {
                    path: '/button',
                    name: 'button',
                    meta: {
                        title: '按钮'
                    },
                    component: () => import('@/page/button.vue')
                },
                {
                    path: '/Courses',
                    name: 'Courses',
                    meta: {
                        title: 'Courses'
                    },
                    component: () => import('@/page/Courses.vue')
                },
                {
                    path: '/badges',
                    name: 'badges',
                    meta: {
                        title: 'badges'
                    },
                    component: () => import('@/page/badges.vue')
                }, {
                    path: '/page',
                    name: 'page',
                    meta: {
                        title: 'page'
                    },
                    component: () => import('@/page/page.vue')
                }, {
                    path: '/message',
                    name: 'message',
                    meta: {
                        title: 'message'
                    },
                    component: () => import('@/page/message.vue')
                }, {
                    path: '/user',
                    name: 'user',
                    meta: {
                        title: 'user'
                    },
                    component: () => import('@/page/user.vue')
                }, {
                    path: '/map',
                    name: 'map',
                    meta: {
                        title: 'map'
                    },
                    component: () => import('@/page/map.vue')
                }, {
                    path: '/upload',
                    name: 'upload',
                    meta: {
                        title: 'upload'
                    },
                    component: () => import('@/page/upload.vue')
                }, {
                    path: '/upload2',
                    name: 'upload2',
                    meta: {
                        title: 'upload2'
                    },
                    component: () => import('@/page/upload2.vue')
                },
                {
                    path: '*',
                    name: 'four',
                    meta: {
                        title: '404'
                    },
                    component: () => import('@/page/four.vue')
                },
            ]
        },

    ]
})
