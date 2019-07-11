<template>
  <div id="app">
    <!-- AppHeader -->
    <app-header></app-header>
    <div class="container-fluid">
      <div class="row">
        <!-- AppSider -->
        <app-sider></app-sider>
        <!-- HeroList -->
        <!-- 路由对应组件显示的位置  router-view-->
        <router-view></router-view>
        
      </div>
    </div>
  </div>
</template>

<script>
// 导入AppHeader组件
import AppHeader from './components/AppHeader.vue'
import AppSider from './components/AppSider.vue'

// 导出
export default {
  name: 'app',
  // 注册子组件
  components: {
    AppHeader,
    AppSider,
  }
}
</script>

<style>
</style>
