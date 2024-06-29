<template>
  <div>
    <!--      首页轮播图-->
    <Carousel/>
  </div>
  <!--  首页搜索框-->
  <Search/>
</template>
<script lang="ts" setup>
//引入轮播图组件
import Carousel from '@/pages/home/carousel/index.vue';
//引入搜索组件
import Search from '@/pages/home/search/index.vue';
</script>
<style lang="scss" scoped>

</style>
