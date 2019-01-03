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
    return {
        rs: '登陆成功',
        code: 0,
        memo: ''
    }
};

const mainInfo = function () {
    let data = [
        {
            User: '24,420',
            Clients: '96,420',
            Projects: '11,370',
            Old: '4,320',
        }
    ];
    return {
        rs: data,
        code: 0,
        memo: ''
    }
};

const mainChart = function () {
    let data = [
        {
            labels: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月'],
            firstDate: [
                {
                    label: '用户数',
                    backgroundColor: 'rgba(32,163,222,0.4)',
                    data: [40, 39, 10, 40, 39, 30, 40, 40, 139, 51,]
                },
                {
                    label: '洗车数',
                    backgroundColor: 'rgba(17,146,204,0.65)',
                    data: [32, 39, 10, 44, 39, 80, 40, 140, 22, 30,]
                },
                {
                    label: '收入',
                    backgroundColor: 'rgba(16,132,184,7)',
                    data: [55, 32, 33, 40, 39, 62, 40, 20, 39, 44,]
                }
            ]
        }
    ];
    return {
        rs: data,
        code: 0,
        memo: ''
    }
};

const profitQuery = function () {
    let data = [
        {
            time: '2019 年 8 月',
            money: '21,235',
            tables: [
                {id: 2345, name: '精品洗车', amount: '62,000.00'},
                {id: 2134, name: '滤芯更换', amount: '23,140.00'},
                {id: 4131, name: '轮胎调整', amount: '300.00'},
                {id: 5532, name: '贴膜养护', amount: '11,332.00'},
            ],
        }
    ];
    return {
        rs: data,
        code: 0,
        memo: ''
    }
};

const contactQuery = function () {
    let data = [
        {
            cons: [
                {id: 2234, name: '高瑟', mail: 'gose@gmail.com', depart: '前台'},
                {id: 3235, name: '巴伐', mail: 'bufa@gmail.com', depart: '洗车员工'},
                {id: 2222, name: '金桔', mail: 'gode@gmail.com', depart: '经理'},
            ]
        }
    ];
    return {
        rs: data,
        code: 0,
        memo: ''
    }
};

const activeQuery = function () {
    let data = [
        {
            actives: [
                {id: 1234, past_time: '5', active: '高瑟营销1张50次洗车卡', level: '1'},
                {id: 1234, past_time: '15', active: '高瑟修改了登陆密码', level: '2'},
                {id: 1234, past_time: '30', active: '金桔营销10张50次洗车卡', level: '3'},
                {id: 1234, past_time: '55', active: '约翰登陆系统', level: '0'},
            ]
        }
    ];
    return {
        rs: data,
        code: 0,
        memo: ''
    }
};
Mock.mock('/news/index', 'post', produceNewsData);//例子
Mock.mock('/?ctl=ajax&mod=index&act=menu', 'post', menu);//菜单
Mock.mock('/?ctl=ajax&mod=index&act=UserLogin', 'post', UserLogin);//登陆
Mock.mock('/?ctl=ajax&mod=index&act=mainInfo', 'post', mainInfo);//首页基本数据
Mock.mock('/?ctl=ajax&mod=index&act=mainChart', 'post', mainChart);//首页大图数据
Mock.mock('/?ctl=ajax&mod=index&act=profitQuery', 'post', profitQuery);//首页盈利数据
Mock.mock('/?ctl=ajax&mod=index&act=contactQuery', 'post', contactQuery);//首页联系人数据
Mock.mock('/?ctl=ajax&mod=index&act=activeQuery', 'post', activeQuery);//首页最新活动数据

$(function () {
    var temp = '';
    var names = [];
    var row = {};
    $('#content .obu dd a ').each(function(){
        temp = $(this).attr('href');
        if(temp){
            row =  {name:$(this).text(),link:temp}
            names.push( row);
        }
    });
    console.table(names);
});
