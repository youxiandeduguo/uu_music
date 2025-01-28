<template>
  <div class="mb-4">
    
    <el-button type="success" class="button"  ><BeginIcon class="icon"></BeginIcon>播放全部</el-button>
    <el-button id="expand" class="expand"><plus class="icon"></plus>添加到</el-button>
    <el-button id="expand" class="expand"><download class="icon"></download>下载</el-button>
    <el-button id="expand" class="expand"><edit class="icon"></edit>批量操作</el-button>
    <UserMusicsTable></UserMusicsTable>
  </div>
  
</template>

<style scoped>
  .icon{
    height: 100%;
    margin-right:10px;
  }
  .mb-4{
    padding-top:50px;
  }
  .button{
    height: 37px;
    width: 115px;
    /* background-color: #0bd372; */
    border: 0;
    margin:0;
    padding:0;
    margin-right: 20px;
  }
  .expand{
    height: 37px;
    width: 115px;
    border-color: black;
    margin:0;
    margin:0;
    padding:0;
    margin-right: 20px;
  }
</style>
<script setup lang="ts">
import { defineComponent } from 'vue';
import BeginIcon from '@/components/BeginIcon.vue';
import download from '@/components/download.vue';
import plus from '@/components/plus.vue';
import edit from '@/components/edit.vue';
import UserMusicsTable from '@/components/UserMusicsTable.vue';
defineComponent({
  name: "Song"
})


</script>

