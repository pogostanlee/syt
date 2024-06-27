<template>
  <div class="bottom">
    <div class="content">
      <div class="left">
        京ICP备12051280号-2 電話挂號 010-6410000
      </div>
      <div class="right">
        <span>联系我们</span>
        <span>合作伙伴</span>
        <span>网站地图</span>
        <span>版权声明</span>
    </div>
  </div>
  </div>
</template>
<script setup lang="ts">

</script>
<style scoped lang="scss">
.bottom {
  width: 100%;
  height: 50px;
  background-color: #f0f2f5;
  display: flex;
  justify-content: center;
  .content {
    width: 1200px;;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    .right{
      span{
        margin-left: 20px;
      }
    }
  }
}
</style>
