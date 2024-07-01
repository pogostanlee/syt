<template>
  <div class="level">
    <h1>医院</h1>
    <div class="content">
      <div class="left">等级：
        <ul class="hospital">
          <li class="active">去1111</li>
          <li>去</li>
          <li>去</li>
          <li>去</li>
          <li>去</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>

</script>
<style lang="scss" scoped>
  .level {
    color: #7f7f7f;
    
    h1 {
      font-weight: 900;
      margin: 10px 0;
    }
    
    .content {
      display: flex;
      
      .left {
        margin-right: 10px;
      }
      
      .hospital {
        display: flex;
        
        li {
          margin-right: 10px;
          
          &.active {
            color: #55a6fe;
          }
        }
        
        li:hover {
          color: #55a6fe;
          cursor: pointer;
        }
      }
    }
  }
</style>
