import Vue from 'vue'
import VueRouter from 'vue-router'


import '@/assets/all.css'
import Login from '@/views/Login.vue'
import Main from '@/views/Main.vue'
import tMain from '@/views/tMain.vue'
import aMain from '@/views/aMain.vue'
import Home from '@/components/Home.vue'
import examine from '@/components/examine.vue'
import stumanage from '@/components/stumanage.vue'
import tmanage from '@/components/tmanage.vue'
import StuEleDoc from '@/components/StuEleDoc.vue'
import DataChange from '@/components/DataChange.vue'
import DataView from '@/components/DataView.vue'
import examineCheck from '@/components/examineCheck.vue'
import tInfoData from '@/components/tInfoData.vue'
import tDataChange from '@/components/tDataChange.vue'
Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


const routes = [
  { path: '/', name: 'login', component: Login },
  {
    path: '/main',
    component: Main,
    children: [
      //默认子路由
      { path: '', component: Home },
      { path: 'home', name: 'home', component: Home },
      { path: 'stuEleDoc', name: 'stuEleDoc', component: StuEleDoc },
      { path: 'dataChange', name: 'dataChange', component: DataChange },
      { path: 'dataView', name: 'dataView', component: DataView },
      { path: 'examineCheck', name: 'examineCheck', component: examineCheck }
    ]
  },
  {
    path: '/tmain',
    component: tMain,
    children: [
      //默认子路由
      { path: '', component: examine },
      { path: 'examine', name: 'examine', component: examine },
      { path: 'tInfoData', name: 'tInfoData', component: tInfoData },
      { path: 'tDataChange', name: 'tDataChange', component: tDataChange }
    ]
  },
  {
    path: '/amain',
    component: aMain,
    children: [
      //默认子路由
      { path: '', component: tmanage },
      { path: 'tmanage', name: 'tmanage', component: tmanage },
      { path: 'stumanage', name: 'stumanage', component: stumanage }
    ]
  }

]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  // 判断该路由是否需要登录权限
  if (to.name != 'login') {
    // 该路由需要登录权限
    if (localStorage.getItem('stutoken') || localStorage.getItem('tToken') || localStorage.getItem('admintoken')) {
      // 已登录
      next()
    } else {
      next('/')
    }
  } else {
    next()
  }
})


export default router