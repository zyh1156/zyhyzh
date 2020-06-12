import Vue from 'vue'
import App from './App.vue'

import router from './core/router'
import store from './core/store'

import axios from 'axios'
Vue.prototype.axios = axios
//阿里巴巴字体库
import "./core/iconfont.css"
//基础样式重置
import "bootstrap/dist/css/bootstrap.min.css"
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')