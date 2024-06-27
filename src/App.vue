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

<script setup lang="ts"></script>

<style scoped lang="scss">

.container {
  display: flex;
  flex-direction: column;
  align-items: center;

  .content {
    width: 1200px;
    height: 700px;
    margin-top: 70px;
  }

}
</style>
