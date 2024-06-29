<template>
  <div class="search">
    <el-autocomplete
        class="inline-input w-50"
        clearable
        placeholder="Please Input"
    />
    <el-button size="default" type="primary">搜索</el-button>
  </div>
</template>
<script lang="ts" setup>

</script>
<style lang="scss" scoped>
.search {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0px;
}
</style>
