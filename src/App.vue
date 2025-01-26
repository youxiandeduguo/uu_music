<template>
  <div class="app">
    <div class="menu">
      <img class='music_icon' src="./image/uu_icon.png" alt="uu音乐">
      <RouterLink to="/music_pavilion" active-class="active">音乐馆</RouterLink>
      <RouterLink to="/my_music" active-class="active">我的音乐</RouterLink>
      <RouterLink to="/client" active-class="active">客户端</RouterLink>
      <RouterLink to="/open_platform" active-class="active">开放平台</RouterLink>
      <RouterLink to="/vip" active-class="active">VIP</RouterLink>
    </div>
    <RouterView class="view"></RouterView>
  </div>
</template>



<script lang="ts">
  import {RouterView,RouterLink} from 'vue-router'
  export default {
    name:'app'
  }

</script>

<script setup lang="ts">





</script>



<style scoped>
  .app{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    flex-direction: column;
    gap: 100px;
  }
  .menu{
    display: flex;
    gap: 10px;
    height: 70px;
    font-family: poppin,Tahoma,Arial,\5FAE\8F6F\96C5\9ED1,sans-serif;
    font-size: 14px;
  }
  .menu > a{
    display: block;
    padding: 0 20px;
    line-height: 90px;
    height: 90px;
    text-align: center;
    font-size: 18px;
  }
  .view{
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items:center;
  }
  hr {
    width: 100%;
    border: 1px solid black;
  }
  .active{
    background-color: #31c27c;
  }
  .music_icon{
    
    width: 170px;
    height: 76px;
  }

</style>
