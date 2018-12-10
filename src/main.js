// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});

router.beforeEach((to, from, next) => {
    window.document.title = to.meta.title;
    next()
});

Vue.prototype.thisUrl = process.env.NODE_ENV === 'development' ? '/api' : '';

if(process.env.NODE_ENV === 'development'){
    Vue.prototype.headhttp = 'http://op/';//测试端域名，zw
    Vue.prototype.headapi = '/api/';
}else{
    Vue.prototype.headhttp = 'http://op.xxx.cc/';//线上实际域名
    Vue.prototype.headapi =  'http://op.xxx.cc/';//线上实际域名
    // let vConsole = new VConsole() // 初始化
}


// 校验内容长度
Vue.prototype.valid = function (data,mins,maxs,text){//changeData是函数名
    let that = this;
    let thisVal = data;
    let thisLeng = thisVal.length;
    let min = parseInt(mins);
    let max = parseInt(maxs);
    let dispalyMin = min + 1;
    let title = '警告';
    if(thisVal==''){
        that.$message({
            message: text+'不能为空！',
            type: 'warning'
        });
        return false
    }else if(thisLeng <= min){
        that.$message({
            message: text+'最少'+dispalyMin+'字符！',
            type: 'warning'
        });
        return false
    }
    else if(thisLeng > max){
        that.$message({
            message: text+'超出限制数量！',
            type: 'warning'
        });
        return false
    }
    else {
        return true
    }
};

// 获取当前时间
Vue.prototype.currentDate = function() {
    let date = new Date();
    let seperator1 = "-";
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    let thisdata = year + seperator1 + month + seperator1 + strDate;
    return thisdata;
};


// 获取开始时间
Vue.prototype.beforeDay = function () {
    let date = new Date();
    let milliseconds = date.getTime() - 1000 * 60 * 60 * 24 * 30;
    let beforedata = new Date(milliseconds);
    console.log(beforedata);
    // let time = newDate.Format("yyyy-MM-dd hh:mm:ss");
    return beforedata
};