<template>
  <div class="container">
    <musicIcon class="icon"></musicIcon>
    <div id="info">什么也没有，去
      <RouterLink :to="{name:'music_pavilion'}" class="link">音乐馆</RouterLink>发现好音乐！
    </div>
  </div>
</template>
<style scoped>
  .link{
    text-decoration: none;
    color: #31c27c;
  }
  .container{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  #info{
    font-size: 25px;
    margin-top: 10px;
    color: #666666;
    
  }
</style>

<script setup lang="ts">
import { defineComponent } from 'vue';
import musicIcon from '@/components/musicIcon.vue';
  defineComponent({
    name:'usermv'
  })
</script>