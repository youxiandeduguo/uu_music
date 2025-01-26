<template>
    <div class="menu">
      <RouterLink to="/music_pavilion/home_page" active-class="active">首页</RouterLink>
      <RouterLink to="/music_pavilion/singer" active-class="active">歌手</RouterLink>
      <RouterLink to="/music_pavilion/new_disc" active-class="active">新碟</RouterLink>
      <RouterLink to="/music_pavilion/charts" active-class="active">排行榜</RouterLink>
      <RouterLink to="/music_pavilion/category_playlists" active-class="active">分类歌单</RouterLink>
      <RouterLink to="/music_pavilion/ladar" active-class="active">雷达</RouterLink>
      <RouterLink to="/music_pavilion/mv" active-class="active">MV</RouterLink>
      <RouterLink to="/music_pavilion/digital_album" active-class="active">数字专辑</RouterLink>
    
    </div>
    <RouterView class="view"></RouterView>

</template>


<script lang="ts">
    export default  {
        name:"music_pavilion"
    }
</script>

<script lang="ts" setup>

</script>

<style scoped>
    .menu{
        display: flex;
        gap: 60px;
        height: 70px;
        font-family: poppin,Tahoma,Arial,\5FAE\8F6F\96C5\9ED1,sans-serif;
        font-size: 14px;
        align-items: center;
        justify-content: center;
    }
    .menu > a{
        color:black;
        text-decoration: none;

    }
    .menu > a.active {
        color: #31c27c;
    }

</style>