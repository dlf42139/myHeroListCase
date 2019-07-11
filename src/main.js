import Vue from 'vue'
import App from './App.vue'

// 值为false就是不提示现在是开发环境
Vue.config.productionTip = false

// 导入样式文件
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './assets/css/index.css'

// 导入路由模块
import router from './router.js'

// 把App组件，渲染，挂载到#app（会替换掉网页里的#app），是我们的根组件
new Vue({
  render: h => h(App),
  // 配置路由对象
  router,
}).$mount('#app')