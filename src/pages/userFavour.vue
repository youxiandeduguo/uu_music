<template>
  <div>
    <RouterLink :to="{name: 'song'} "class="route" active-class="active">歌曲&nbsp {{ musicnum }}</RouterLink>
    <RouterLink :to="{name: 'userplaylist'}" class="route" active-class="active">歌单&nbsp {{ playlist }}</RouterLink>
    <RouterLink :to="{name: 'albums'}" class="route" active-class="active">专辑&nbsp {{ albums }}</RouterLink>
    <RouterLink :to="{name:'usermv'}" class="route" active-class="active">视频&nbsp {{ mv }}</RouterLink>
  </div>
  <div class="route-view">
    <RouterView></RouterView>
  </div>
</template>

<style scoped>
  .route-view{
    height: 80%;
  }
  .route{
    padding-right: 55px;
    color: black;
    font-size: large;
    text-decoration: none;
  }
  .active{
    color: #31c27c;
  }
</style>


<script lang="ts">
export default {
  name: 'myFavour'
}
</script>
<script setup lang="ts">
import { RouterLink ,RouterView} from 'vue-router'
  import { ref} from 'vue'
  let musicnum=ref(3)
  let playlist=ref(0)
  let albums=ref(0)
  let mv=ref(0)
</script>