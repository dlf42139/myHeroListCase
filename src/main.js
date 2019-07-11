import Vue from 'vue'
import App from './App.vue'

// 值为false就是不提示现在是开发环境
Vue.config.productionTip = false

// 导入样式文件
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './assets/css/index.css'

// 这里的Vue，构造函数
//希望给Vue的实例增加成员 （- axios，就不用每次都引用了，直接this调用），可以在Vue的
// 原型上增加成员（原型、继承）
import axios from 'axios'
// 配置baseURL
axios.defaults.baseURL = 'http://localhost:3000/'
Vue.prototype.axios = axios;

// 导入路由模块
import router from './router.js'

// 把App组件，渲染，挂载到#app（会替换掉网页里的#app），是我们的根组件
new Vue({
  render: h => h(App),
  // 配置路由对象
  router,
}).$mount('#app')