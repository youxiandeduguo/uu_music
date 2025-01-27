<template>
  <div class="avatar_footers" >
    <RouterLink 
    :to="{
      name:'userfavour'
    }"
    class="avatar-footer" active-class="active" id="favour"
    v-on:mouseenter="handleFavourEnter" v-on:mouseleave="handleFavourLeave"
    >我喜欢</RouterLink>
    <RouterLink 
    :to="{
      name:'playlists'
    }"
    class="avatar-footer" active-class="active" id="playLists"
    v-on:mouseenter="handleListsEnter" v-on:mouseleave="handleListsLeave"
    >我创建的歌单</RouterLink>
    <RouterLink
    :to="{
      name:'userfollowers'
    }" class="avatar-footer" active-class="active" id="followers"
    v-on:mouseenter="handleFollowersEnter" v-on:mouseleave="handleFollowersLeave"
    >关注</RouterLink>
    <RouterLink 
    :to="{
      name:'userfans'
    }"class="avatar-footer" active-class="active" id="fans"
    v-on:mouseenter="handleFansEnter" v-on:mouseleave="handleFansLeave" 
    >粉丝</RouterLink>
    <RouterLink
    :to="{name:'uservideos'}" class="avatar-footer" id="videos"
    active-class="active"
    v-on:mouseenter="handleVideosEnter" v-on:mouseleave="handleVideosLeave"
    >我上传的视频
    </RouterLink>
  </div>
</template>

<style scoped>
.avatar_footers{
  display: flex;
  justify-content: flex-start;
}
.avatar-footer{
  padding: 5px 15px;
  padding-bottom: 0;
  font-size: large;
  color: white;
  text-decoration: none;
}
.active{
  color: #31c27c;
}
</style>
<script setup>
import {ref} from 'vue'
let backColor=ref('white')
let isSelected=ref(1)
function handleFavourEnter(){
  backColor.value='#31c27c'
  document.querySelector('#favour').style.color=`${backColor.value}`
}
function handleFavourLeave(){
  backColor.value='white'
  document.querySelector('#favour').style.color=`${backColor.value}`
}
function handleListsEnter(){
  backColor.value='#31c27c'
  document.querySelector('#playLists').style.color=`${backColor.value}`
}
function handleListsLeave(){
  backColor.value='white'
  document.querySelector('#playLists').style.color=`${backColor.value}`
}
function handleFollowersEnter(){
  backColor.value='#31c27c'
  document.querySelector('#followers').style.color=`${backColor.value}`
}
function handleFollowersLeave(){
  backColor.value='white'
  document.querySelector('#followers').style.color=`${backColor.value}`
}

function handleFansEnter(){
  backColor.value='#31c27c'
  document.querySelector('#fans').style.color=`${backColor.value}`
}
function handleFansLeave(){
  backColor.value='white'
  document.querySelector('#fans').style.color=`${backColor.value}`
}
function handleVideosEnter(){
  backColor.value='#31c27c'
  document.querySelector('#videos').style.color=`${backColor.value}`
}
function handleVideosLeave(){
  backColor.value='white'
  document.querySelector('#videos').style.color=`${backColor.value}`
}
</script>