import Vue from 'vue'
import App from './App.vue'

// 值为false就是不提示现在是开发环境
Vue.config.productionTip = false

// 导入样式文件
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './assets/css/index.css'

// 导入vue-router
// 导入node_modules里的不用写具体路径
// 只导入是不行的，要注册 
import VueRouter from 'vue-router'
// 配置vue的插件vue-router
Vue.use(VueRouter);

// 导入英雄列表组件
import HeroList from './views/heros/HeroList.vue'

// 创建路由对象
const router = new VueRouter({
  // 配置路由规则
  routes: [
    {
      path:'/',
      redirect:'/herolist'
    },
    {
      name:'herolist',
      path:'/herolist',
      component:HeroList,
    }
  ]
})

// 把App组件，渲染，挂载到#app（会替换掉网页里的#app），是我们的根组件
new Vue({
  render: h => h(App),
  // 配置路由对象
  router,
}).$mount('#app')