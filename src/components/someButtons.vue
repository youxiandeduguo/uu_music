<template>
  <div class="container">
    <el-icon class="icon"><VideoPlay /></el-icon>
    <el-icon class="icon"><CirclePlus /></el-icon>
    <el-icon class="icon"><Share /></el-icon>
  </div>
</template>

<style>
.container {
  display: flex;
  justify-content: space-between;
}
.icon {
  margin-right: 10px;
  font-size: 20px;
}
</style>
<script setup lang="ts">
import { defineComponent, ref } from 'vue';

defineComponent({
  name: 'someButtons'
})

</script>