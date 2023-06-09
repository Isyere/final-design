import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

import './utils/axios'
import 'echarts'
import ECharts from 'vue-echarts'
Vue.component('v-chart', ECharts)

import router from '@/router'
import store from '@/store'

Vue.config.productionTip = false


Vue.use(ElementUI)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
