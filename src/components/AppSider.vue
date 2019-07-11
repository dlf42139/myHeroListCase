<template>
  <div class="col-sm-3 col-md-2 sidebar">
    <ul class="nav nav-sidebar">
      <router-link to="/herolist" tag="li">
        <a href="">英雄列表</a>
      </router-link>

      <!-- 我原本的写法 -->
      <!-- <li class="active">
        <router-link to="">英雄列表</router-link>
      </li> -->

      <!-- 我原本这样写是，刚才配置的linkExactActiveClass是router-view生成的标签
      被选中时会加上的类名，所以按照我原本的写法的话是a标签会加上active类名，
      可是原本的css样式是加给li的，所以我那样写样式会出问题 -->

      <!-- 另一种写法 -->
      <router-link :to="{name:'weapon'}" tag="li">
        <a href="">武器列表</a>
      </router-link>
      <!-- <li>
        <router-link :to="{name:'weapon'}">武器列表</router-link>
      </li> -->

      <router-link :to="{name:'equipment'}" tag="li">
        <a href="">装备列表</a>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
