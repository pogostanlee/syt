<template>
  <div class="container">
    <!--顶部全局组件  -->
    <HospitalTop/>
    <!-- 路由出口 -->
    <div class="content">
      <!--      路由组件-->
      <router-view/>
    </div>
    <!--    底部组件-->
    <HospitalBottom/>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  
  .content {
    width: 1200px;
    min-height: 700px;
    margin-top: 70px;
  }
  
}
</style>
