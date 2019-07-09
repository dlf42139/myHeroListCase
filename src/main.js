import Vue from 'vue'
import App from './App.vue'

// 值为false就是不提示现在是开发环境
Vue.config.productionTip = false

// 把App组件，渲染，挂载到#app（会替换掉网页里的#app），是我们的根组件
new Vue({
  render: h => h(App),
}).$mount('#app')