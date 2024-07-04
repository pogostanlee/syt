<template>
  <div>
    <!--      首页轮播图-->
    <Carousel/>
  </div>
  <!--  首页搜索框-->
  <Search/>
  <!-- 展示医院页面-->
  <el-row :gutter="20">
    <el-col :span="20">
      <!--      等级组件-->
      <Level/>
      <!--      地区组件-->
      <Region/>
      <!--      医院组件-->
      <div class="hospital">
        <Card v-for="item in 10" :key="item" class="item"/>
      </div>
      <!--      分页组件-->
    
    </el-col>
    <el-col :span="4">444</el-col>
  </el-row>
</template>
<script lang="ts" setup>
//引入轮播图组件
import Carousel from '@/pages/home/carousel/index.vue'
//引入搜索组件
import Search from '@/pages/home/search/index.vue'
//引入首页等级的组件
import Level from '@/pages/home/level/index.vue'
//引入地区组件
import Region from '@/pages/home/region/index.vue'
//引入医院组件
import Card from '@/pages/home/card/index.vue'
</script>
<style lang="scss" scoped>
.hospital {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  
  .item {
    width: 48%;
    margin: 10px 0;
  }
}
</style>
