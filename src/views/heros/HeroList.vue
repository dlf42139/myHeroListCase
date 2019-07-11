<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">英雄管理</h2>
    <a class="btn btn-success" href="add.html">Add</a>
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>序号</th>
            <th>姓名</th>
            <th>性别</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in list" :key="item.id">
            <td>{{index+1}}</td>
            <td>{{item.name}}</td>
            <td>{{item.gender}}</td>
            <td>
              <a href="edit.html">编辑</a>
              &nbsp;&nbsp;
              <a href="javascript:window.confirm('Are you sure?')">删除</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
// 导入axios
import axios from "axios";

export default {
  data() {
    return {
      // 存储英雄列表数据
      list:[]
    };
  },
  // 组件加载完毕执行
  mounted(){
    // 发送请求获取数据
    this.loadData();
  },
  methods: {
    loadData(){
      axios
        .get('http://localhost:3000/heros')
        .then( (res)=>{
          const {data,status} = res;
          if (status == 200) {
            this.list = data;
          }
        } )
    }
  },
};
</script>

<style>
</style>
