<template>
  <div class="app">
    <div class="menu">
      <img class='music_icon' src="./image/uu_icon.png" alt="uu音乐">
      <RouterLink to="/music_pavilion" active-class="active">音乐馆</RouterLink>
      <RouterLink to="/my_music" active-class="active">我的音乐</RouterLink>
      <RouterLink to="/client" active-class="active">客户端</RouterLink>
      <RouterLink to="/open_platform" active-class="active">开放平台</RouterLink>
      <RouterLink to="/vip" active-class="active">VIP</RouterLink>
      <div class="inputframe">
        <el-input
        v-model="input"
        style="width: 200px;height: 40px;"
        size="large"
        placeholder="搜索音乐、MV、歌单、用户"
        :suffix-icon="Search"
      />

      <el-button class="loginbutton">登录</el-button>
      <el-select
        v-model="value"
        placeholder="开通VIP"
        size="large"
        class="vipbutton"
        style="width: 120px"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>

      <button>充值</button>

      </div>
    </div>
    <RouterView class="view"></RouterView>
  </div>
</template>



<script lang="ts">
  import { ref } from 'vue'
  import {RouterView,RouterLink} from 'vue-router'
  import { Search } from '@element-plus/icons-vue'
  export default {
    name:'app'
  }

</script>

<script setup lang="ts">

  const input = ref('')
  const value = ref('')

  const options = [
    {
      value: 'Option1',
      label: '开通超级会员',
    },
    {
      value: 'Option2',
      label: '开通绿钻豪华版',
    },
  ]



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
  .inputframe{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .loginbutton {
  border: none;
  box-shadow: none;
  background-color: white;
  }

  .loginbutton:hover{
    background-color: transparent;
    box-shadow: none;
    color: #31c27c;
  }
  .vipbutton{
    
  }

</style>