<template>
  <div>
    <el-table :data="tableData" style="width: 100%" class="custom-table">
    <el-table-column prop="index" class="dateColumn" label=""  width="80" height="50">
    </el-table-column>

    <el-table-column prop="name" class="dateColumn" label="歌曲"  width="450" height="50">
      
      </el-table-column>
    <el-table-column prop="somebuttons" class="dateColumn" label=""  width="100" height="50">
      <SomeButtons></SomeButtons>
    </el-table-column>
    <el-table-column prop="singer" label="歌手" width="243" height="50" />
    <el-table-column prop="albums" label="专辑" width="243" height="50"/>
    <el-table-column prop="time" label="时长" width="80" height="50"/>
    </el-table>
  </div>
  
  <div class="info">
    查看更多内容，请下载客户端
  </div>
  <div class="button_container">
    <el-button type="success" class="button" round>立即下载</el-button>
  </div>
  
</template>
<style scoped>
.custom-table {
  /* height: 200px; 设置行高 */
}
.button{
  width:175px;
  height: 41px;
  background-color: #31c27c;
}
.button_container{
  display: flex;
  justify-content: center;
  margin-top: 30px;
}
.info{
  margin-top: 30px;
  text-align: center;
  color: black;
  font-size: 17px;
}

</style>
<script lang="ts" setup>
import SomeButtons from './someButtons.vue';
import someButtons from './someButtons.vue';
const tableData = [
  {
    index: 1,
    name: '笑纳',
    singer: '花僮',
    albums: '笑纳',
    time: '03:02',
  },
  {
    index: 2,
    name: '这世界这么多人',
    singer: '莫文蔚',
    albums: '这世界那么多人 (电影《我要我们在一起》）',
    time: '03:02',
  },
  {
    index: 3,
    name: '把回忆拼好给你',
    singer: '苏星睫',
    albums: '把回忆拼好给你',
    time: '03:02',
  },
  {
    index:4,
    name: '还好远离你',
    singer: '张远',
    albums: 'No. 189, Grove St, Los Angeles',
    time: '03:02',
  },
]
</script>
