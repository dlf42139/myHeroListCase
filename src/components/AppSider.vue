<template>
  <div class="col-sm-3 col-md-2 sidebar">
    <ul class="nav nav-sidebar">
      <li class="active">
        <router-link to="/herolist">英雄列表</router-link>
      </li>
      <!-- 另一种写法 -->
      <!-- <router-link to="" tag="li">
        <a href="">武器列表</a>
      </router-link> -->
      <li>
        <router-link :to="{name:'weapon'}">武器列表</router-link>
      </li>
      <li>
        <router-link :to="{name:'equipment'}">装备列表</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
