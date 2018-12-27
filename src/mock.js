// 引入mockjs
const Mock = require('mockjs');
// 获取 mock.Random 对象
const Random = Mock.Random;
// mock一组数据
const produceNewsData = function () {
    let articles = [];
    for (let i = 0; i < 5; i++) {
        let newArticleObject = {
            title: Random.csentence(4, 5), //  Random.csentence( min, max )
        };
        articles.push(newArticleObject)
    }
    return {
        rs: articles,
        code: 0,
        memo: ''
    }
};

// 菜单
const menu = function (options) {
    let clmid = options.body;
    let navs = [];
    if (clmid == 'clmid=0') {
        navs = [{
            "clmid": "1",
            "spclmid": "0",
            "ordno": "0",
            "c_level": "2",
            "clmcode": "front_index",
            "clmname": "首页",
            "clmurl": "/#/main",
            "show": "1",
            "clicon": "home_icon"
        }, {
            "clmid": "2",
            "spclmid": "0",
            "ordno": "1",
            "c_level": "1",
            "clmcode": "index",
            "clmname": "常用页面",
            "clmurl": "",
            "prname": "",
            "en": "1",
            "show": "1",
            "grouplist": "2,5",
            "memo": "",
            "clicon": "front_icon"
        }, {
            "clmid": "3",
            "spclmid": "0",
            "ordno": "1",
            "c_level": "1",
            "clmcode": "index",
            "clmname": "常用组件",
            "clmurl": "",
            "prname": "",
            "en": "1",
            "show": "1",
            "grouplist": "2,5",
            "memo": "",
            "clicon": "front_icon"
        }, {
            "clmid": "4",
            "spclmid": "0",
            "ordno": "1",
            "c_level": "1",
            "clmcode": "index",
            "clmname": "图表",
            "clmurl": "",
            "prname": "",
            "en": "1",
            "show": "1",
            "grouplist": "2,5",
            "memo": "",
            "clicon": "front_icon"
        },
            {
                "clmid": "66",
                "spclmid": "0",
                "ordno": "19",
                "c_level": "1",
                "clmcode": "logout",
                "clmname": "\u9000\u51fa\u7cfb\u7edf",
                "clmurl": "/#/login",
                "prname": "",
                "en": "1",
                "show": "1",
                "grouplist": "2,3,4,5",
                "memo": "",
                "clicon": "logout_icon"
            }];
    }
    //常用页面
    if (clmid == 'clmid=2') {
        navs = [{
            "clmid": "57",
            "spclmid": "0",
            "ordno": "0",
            "c_level": "2",
            "clmcode": "front_index",
            "clmname": "404",
            "clmurl": "/#/recharge",
            "prname": null,
            "en": "1",
            "show": "1",
            "grouplist": "2,5",
            "memo": null,
            "clicon": "home_icon"
        },
            {
                "clmid": "57",
                "spclmid": "0",
                "ordno": "0",
                "c_level": "2",
                "clmcode": "front_index",
                "clmname": "表格",
                "clmurl": "/#/table",
                "prname": null,
                "en": "1",
                "show": "1",
                "grouplist": "2,5",
                "memo": null,
                "clicon": "home_icon"
            },
            {
                "clmid": "57",
                "spclmid": "0",
                "ordno": "0",
                "c_level": "2",
                "clmcode": "front_index",
                "clmname": "pricing",
                "clmurl": "/#/pricing",
                "prname": null,
                "en": "1",
                "show": "1",
                "grouplist": "2,5",
                "memo": null,
                "clicon": "home_icon"
            },
            {
                "clmid": "57",
                "spclmid": "0",
                "ordno": "0",
                "c_level": "2",
                "clmcode": "front_index",
                "clmname": "form",
                "clmurl": "/#/form",
                "prname": null,
                "en": "1",
                "show": "1",
                "grouplist": "2,5",
                "memo": null,
                "clicon": "home_icon"
            },
            {
                "clmid": "57",
                "spclmid": "0",
                "ordno": "0",
                "c_level": "2",
                "clmcode": "front_index",
                "clmname": "Courses",
                "clmurl": "/#/Courses",
                "prname": null,
                "en": "1",
                "show": "1",
                "grouplist": "2,5",
                "memo": null,
                "clicon": "home_icon"
            },
            {
                "clmid": "57",
                "spclmid": "0",
                "ordno": "0",
                "c_level": "2",
                "clmcode": "front_index",
                "clmname": "message",
                "clmurl": "/#/message",
                "prname": null,
                "en": "1",
                "show": "1",
                "grouplist": "2,5",
                "memo": null,
                "clicon": "home_icon"
            },
            {
                "clmid": "57",
                "spclmid": "0",
                "ordno": "0",
                "c_level": "2",
                "clmcode": "front_index",
                "clmname": "用户管理",
                "clmurl": "/#/user",
                "prname": null,
                "en": "1",
                "show": "1",
                "grouplist": "2,5",
                "memo": null,
                "clicon": "home_icon"
            },
        ]
    }
    // 常用组件
    if (clmid == 'clmid=3') {
        navs = [{
            "clmid": "57",
            "spclmid": "0",
            "ordno": "0",
            "c_level": "2",
            "clmcode": "front_index",
            "clmname": "typography",
            "clmurl": "/#/typography",
            "prname": null,
            "en": "1",
            "show": "1",
            "grouplist": "2,5",
            "memo": null,
            "clicon": "home_icon"
        },
            {
                "clmid": "57",
                "spclmid": "0",
                "ordno": "0",
                "c_level": "2",
                "clmcode": "front_index",
                "clmname": "按钮",
                "clmurl": "/#/button",
                "prname": null,
                "en": "1",
                "show": "1",
                "grouplist": "2,5",
                "memo": null,
                "clicon": "home_icon"
            },
            {
                "clmid": "57",
                "spclmid": "0",
                "ordno": "0",
                "c_level": "2",
                "clmcode": "front_index",
                "clmname": "badges",
                "clmurl": "/#/badges",
                "prname": null,
                "en": "1",
                "show": "1",
                "grouplist": "2,5",
                "memo": null,
                "clicon": "home_icon"
            },
            {
                "clmid": "57",
                "spclmid": "0",
                "ordno": "0",
                "c_level": "2",
                "clmcode": "front_index",
                "clmname": "dropdown",
                "clmurl": "/#/dropdown",
                "prname": null,
                "en": "1",
                "show": "1",
                "grouplist": "2,5",
                "memo": null,
                "clicon": "home_icon"
            },
            {
                "clmid": "57",
                "spclmid": "0",
                "ordno": "0",
                "c_level": "2",
                "clmcode": "front_index",
                "clmname": "page",
                "clmurl": "/#/page",
                "prname": null,
                "en": "1",
                "show": "1",
                "grouplist": "2,5",
                "memo": null,
                "clicon": "home_icon"
            },
        ]
    }
    // 图表
    if (clmid == 'clmid=4') {
        navs = [{
            "clmid": "57",
            "spclmid": "0",
            "ordno": "0",
            "c_level": "2",
            "clmcode": "front_index",
            "clmname": "柱状图",
            "clmurl": "/#/chart_bar",
            "prname": null,
            "en": "1",
            "show": "1",
            "grouplist": "2,5",
            "memo": null,
            "clicon": "home_icon"
        },
            {
                "clmid": "57",
                "spclmid": "0",
                "ordno": "0",
                "c_level": "2",
                "clmcode": "front_index",
                "clmname": "线图",
                "clmurl": "/#/chart_line",
                "prname": null,
                "en": "1",
                "show": "1",
                "grouplist": "2,5",
                "memo": null,
                "clicon": "home_icon"
            },
            {
                "clmid": "57",
                "spclmid": "0",
                "ordno": "0",
                "c_level": "2",
                "clmcode": "front_index",
                "clmname": "环形图",
                "clmurl": "/#/chart_dona",
                "prname": null,
                "en": "1",
                "show": "1",
                "grouplist": "2,5",
                "memo": null,
                "clicon": "home_icon"
            },

        ]
    }
    return {
        rs: navs,
        code: 0,
        memo: ''
    }
};

// 登陆
const UserLogin = function (options) {
    console.log(options);
    return {
        rs: '登陆成功',
        code: 0,
        memo: ''
    }
};

Mock.mock('/news/index', 'post', produceNewsData);//例子
Mock.mock('/?ctl=ajax&mod=index&act=menu', 'post', menu);//菜单
Mock.mock('/?ctl=ajax&mod=index&act=UserLogin', 'post', UserLogin);//登陆
