<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">英雄管理</h2>
    <router-link to="/herolist/add" class="btn btn-success">添加英雄</router-link>
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
              <router-link :to="{name:'edit' , params:{id:item.id}}">编辑</router-link>
              <!-- <a href="edit.html">编辑</a> -->
              <!-- <router-link :to="`/herolist/edit/`" + item.id></router-link> -->
              &nbsp;&nbsp;
              <a href="javascript:" @click="del(item.id)">删除</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
// 导入axios
// import axios from "axios";

export default {
  data() {
    return {
      // 存储英雄列表数据
      list: []
    };
  },
  // 组件加载完毕执行
  mounted() {
    // 发送请求获取数据
    this.loadData();
  },
  methods: {
    // 初始化加载数据方法
    loadData() {
      this.axios.get("heros").then(res => {
        const { data, status } = res;
        if (status == 200) {
          this.list = data;
        }
      });
    },
    // 删除数据方法
    del(id) {
      if (confirm("请问您真的要删除吗")) {
        this.axios
          // .delete(`http://localhost:3000/heros/${id}`)
          .delete("heros/" + id)
          .then(res => {
            // console.log(res);
            let status = res.status;
            if (status == 200) {
              this.loadData();
            }
          });
      }
    }
  }
};
</script>

<style>
</style>
