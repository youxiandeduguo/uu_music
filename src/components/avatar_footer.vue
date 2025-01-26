<template>
  <div class="avatar_footers">
    <span v-on:mouseenter="handleFavourEnter" v-on:mouseleave="handleFavourLeave"
     class="avatar-footer" id="favour">我喜欢</span>
    <span v-on:mouseenter="handleListsEnter" v-on:mouseleave="handleListsLeave"
    class="avatar-footer" id="playLists">我创建的歌单</span>
    <span v-on:mouseenter="handleFollowersEnter" v-on:mouseleave="handleFollowersLeave"
    class="avatar-footer" id="followers">关注</span>
    <span v-on:mouseenter="handleFansEnter" v-on:mouseleave="handleFansLeave"
    class="avatar-footer" id="fans">粉丝</span>
    <span v-on:mouseenter="handleVideosEnter" v-on:mouseleave="handleVideosLeave"
    class="avatar-footer" id="videos">我上传的视频</span>
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
}
</style>
<script setup>
import {ref} from 'vue'
let backColor=ref('white')
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