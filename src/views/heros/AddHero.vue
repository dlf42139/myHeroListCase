<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">添加英雄</h2>
    <form>
      <div class="form-group">
        <label for="heroname">姓名</label>
        <input type="email" class="form-control" id="heroname" placeholder="姓名" />
      </div>
      <div class="form-group">
        <label for="herogender">性别</label>
        <input
          type="password"
          class="form-control"
          id="herogender"
          placeholder="男"
        />
      </div>

      <button type="submit" class="btn btn-success">提交</button>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
