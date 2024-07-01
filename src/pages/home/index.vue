<template>
  <div>
    <!--      首页轮播图-->
    <Carousel />
  </div>
  <!--  首页搜索框-->
  <Search />
  <!-- 展示医院页面-->
  <el-row :gutter="20">
    <el-col :span="12">
      <!--      等级组件-->
      <Level></Level>
      <!--      地区组件-->
    </el-col>
    <el-col :span="12">444</el-col>
  </el-row>
</template>
<script lang="ts" setup>
  //引入轮播图组件
  import Carousel from '@/pages/home/carousel/index.vue'
  //引入搜索组件
  import Search from '@/pages/home/search/index.vue'
  //引入首页等级的组件
  import Level from '@/pages/home/level/index.vue'
</script>
<style lang="scss" scoped>

</style>
