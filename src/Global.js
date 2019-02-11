thisglobal = function () {
    return 123
};

// login
globalCompany = function () {
    let globalCompany = {
        name: '',
        tel: '400-007-9360',
        app: '管理总后台',
        url: 'xxx.xxx.com'
    };
    return globalCompany
};

// 设备状态
globalQuipState = function () {
    let option = [
        {
            value: '',
            label: '全部'
        }, {
            value: '0',
            label: '新入库'
        }, {
            value: '1',
            label: '未售'
        }, {
            value: '2',
            label: '已售'
        }, {
            value: '3',
            label: '维修'
        }, {
            value: '4',
            label: '报废'
        }
    ];
    return option
};

// 操作员
globalOperatorList = function () {
    let option = [
        {
            value: '',
            label: '全部'
        }, {
            value: '0',
            label: '高瑟'
        }, {
            value: '1',
            label: '林克'
        }, {
            value: '2',
            label: '小智'
        },
    ];
    return option
};

// 开始时间
globalBt = function () {
    const et = new Date();
    const bt = new Date();
    bt.setTime(bt.getTime() - 3600 * 1000 * 24 * 7);
    return [bt,et];
};

headapi = '/api/';