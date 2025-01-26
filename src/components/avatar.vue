<template>
  <div class="demo-type">
    <div>
      <el-avatar  src="/public/img/avatarUser.png"
      :size="120" />
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
const avatarUrl='../image/avatarUser.png'
</script>

<style scoped>
.demo-type {
  display: flex;
}
.demo-type > div {
  flex: 1;
  text-align: center;
}

.demo-type > div:not(:last-child) {
  border-right: 1px solid var(--el-border-color);
}
</style>
