<template>
  <div class="search">
    <el-autocomplete
        class="form"
        clearable
        placeholder="请输入医院名称"
    />
    <el-button :icon="Search" size="default" type="primary">搜索</el-button>
  </div>
</template>
<script lang="ts" setup>
import {Search} from '@element-plus/icons-vue';

</script>
<style lang="scss" scoped>
.search {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  //搜索框样式
  :deep(.el-autocomplete) {
    width: 600px;
    margin-right: 10px;
  }
}
</style>
