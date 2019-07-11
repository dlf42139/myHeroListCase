<template>
    <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">编辑英雄</h2>
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
      
      <input type="button" value="提交" class="btn btn-success" @click="editItem">
      <!-- <button class="btn btn-success" @click.prevent="addItem">提交</button> -->
    </form>
  </div>
</template>

<script>
export default {
    data() {
        return {
            formData:{
                name:'',
                gender:'男',
            }
        }
    },
    methods: {
        editItem(){
            console.log(this.formData);
            
        }
    },
}
</script>

<style>

</style>
