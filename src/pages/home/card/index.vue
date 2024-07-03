<template>
  <el-card shadow="hover" style="max-width: 480px">
    <div class="content">
      <div class="left">
        <div class="hospital_name">
          北京医院
        </div>
        <div class="tip">
          <div class="level">三级甲等</div>
          <div class="time">2023</div>
        </div>
      </div>
      <div class="right">
        <img alt="" src="@/assets/images/logo.png">
      </div>
    </div>
  </el-card>
</template>
<script lang="ts" setup>

</script>
<style lang="scss" scoped>
.content {
  display: flex;
  justify-content: space-between;
  
  .left {
    width: 60%;
    
    .tip {
      color: #7f7f7f;
      margin-top: 10px;
      display: flex;
      justify-content: space-between;
    }
  }
  
  .right {
    img {
      width: 50px;
      height: 50px;
    }
  }
}
</style>
