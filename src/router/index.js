// 配置路由相关信息
import VueRouter from "vue-router"
import Vue from "vue"

// 导入路由组件
import test from "../page/test/testRouter"
import toTest from "../page/test/toTest"
// 1、通过Vue.use()，安装插件
Vue.use(VueRouter)
// 2、创建VueRouter对象
const routes = [
  {
    path: '',
    redirect: '/toTest'
  },
  {
    path: '/test',
    component: test
  },
  {
    path: '/toTest',
    component: toTest
  }
]
const router = new VueRouter({
  // 配置路由映射关系
  routes,
  mode: 'history'
})
// 3、将VueRouter对象传入到vue实例中
export default router