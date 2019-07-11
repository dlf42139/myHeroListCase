<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">添加英雄</h2>
    <form>
      <div class="form-group">
        <label for="heroname">姓名</label>
        <input type="text" v-model="formData.name" class="form-control" id="heroname" placeholder="姓名" />
      </div>
      <div class="form-group">
        <label for="herogender">性别</label>
        <select id="herogender" v-model="formData.gender" class="form-control">
          <option value="男">男</option>
          <option value="女">女</option>
        </select>
        <!-- <input class="form-control" v-model="formData.gender" id="herogender" placeholder="男" /> -->
      </div>
      
      <input type="button" value="提交" class="btn btn-success" @click="addItem">
      <!-- <button class="btn btn-success" @click.prevent="addItem">提交</button> -->
    </form>
  </div>
</template>

<script>
// import axios from 'axios'

export default {
  data(){
    return {
      formData:{
        name:'',
        gender:'男',
      }
    }
  },
  methods: {
    addItem(){
      // console.log(this.formData);
      this.axios
      .post('heros',this.formData)
      .then( res=>{
        // console.log(res);
        let status = res.status;
        if (status == 201) {
          // location.href = '/herolist'
          this.$router.push('/herolist');
        }
      } )
    }
  },
};
</script>

<style>
</style>
