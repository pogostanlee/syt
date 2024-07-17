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
      <el-pagination
          v-model:current-page="pageNo"
          v-model:page-size="pageSize"
          :background="true"
          :page-sizes="[10, 20, 30, 40]"
          :size="size"
          :total="400"
          layout="total, sizes, prev, pager, next, jumper"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
      />
    </el-col>
    <el-col :span="4">444</el-col>
  </el-row>
</template>
<script lang="ts" setup>
//引入组合式api函数
import {onMounted, ref} from "vue";
import {reqHospital} from "@/api/home";
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


let pageNo = ref<number>(1)
let pageSize = ref<number>(10)

//组件下载完毕后进行分页查询
onMounted(() => {
  getHospitalInfo()
})
//获取已有医院的数据
const getHospitalInfo = async () => {
  let result: any = await reqHospital(pageNo.value, pageSize.value)
  console.log(result)
}

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
