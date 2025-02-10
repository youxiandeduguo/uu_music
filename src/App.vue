<template>
  <div class="app">
    <div  v-if="nav_ok" class="menu">
      <img class='music_icon' src="/img/uu_icon.png" alt="uu音乐">
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
      </div>
      <div class="loginframe">
          <el-button class="loginbutton" @click="loginStore.dialogFormVisible = true">登录</el-button>
      </div>
      <login v-model="loginStore.dialogFormVisible"/>
      <el-dropdown class="VIPbutton">
          <el-button type="primary" class="vip-button">
            开通VIP<el-icon class="el-icon--right"><arrow-down /></el-icon>
          </el-button>
          <template #dropdown>
            <el-dropdown-menu class="custom-dropdown">
              <el-dropdown-item>开通超级会员</el-dropdown-item>
              <el-dropdown-item>开通豪华绿钻</el-dropdown-item>
            </el-dropdown-menu>
          </template>
      </el-dropdown>

      <el-dropdown class="buybutton">
        <el-button type="primary" class="buy-button">
          充值<el-icon class="el-icon--right"><arrow-down /></el-icon>
        </el-button>
        <template #dropdown>
          <el-dropdown-menu class="custom-dropdown">
            <el-dropdown-item>购买乐币</el-dropdown-item>
            <el-dropdown-item>充值饭票</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>

    </div>
    <RouterView class="view"></RouterView>
  </div>
</template>



<script lang="ts">
  import { ref,computed } from 'vue'
  import {RouterView,RouterLink,useRoute} from 'vue-router'
  import { Search } from '@element-plus/icons-vue'
  import { ArrowDown } from '@element-plus/icons-vue'
  import login from './components/login.vue'
  import {useLoginStore} from '@/store/login.ts'
  export default {
    name:'app'
  }

</script>

<script setup lang="ts">
  // let dialogFormVisible = ref(false)
  let loginStore=useLoginStore()
  const input = ref('')
  const value = ref('')

  const route = useRoute(); 

  const nav_ok = computed(() => route.meta.nav);
  const check=()=>{
    console.log(nav_ok);
  }
  const options1 = [
    {
      value: 'Option1',
      label: '开通超级会员',
    },
    {
      value: 'Option2',
      label: '开通绿钻豪华版',
    },
  ]
  const options2 = [
    {
      value: 'Option1',
      label: '购买乐币',
    },
    {
      value: 'Option2',
      label: '充值饭票',
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
    gap: 10px;
    height: auto;
  }
  .menu{
    display: flex;
    gap: 10px;
    height: 70px;
    font-family: poppin,Tahoma,Arial,\5FAE\8F6F\96C5\9ED1,sans-serif;
    font-size: 14px;
    align-items: center;
    justify-content: center;
  }
  .menu > a{
    display: block;
    padding: 0 20px;
    line-height: 90px;
    height: 90px;
    text-align: center;
    font-size: 18px;
    text-decoration: none;
    color: black;

  }
  .view{
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items:center;
    height: auto;
  }
  hr {
    width: 100%;
    border: 1px solid black;
  }
  .active{
    background-color: #31c27c;
    color: white;
  }
  .music_icon{
    
    width: 170px;
    height: 76px;
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

  .vip-button {
    padding: 10px 20px;
    height: 45px;
    background-color: #31c27c;
    border: none;
    color: white;
  }
  .buy-button {
    padding: 10px 20px;
    height: 45px;
    background-color: white;
    color: black;
    border-color: black;

  }

  .custom-dropdown .el-dropdown-item {
    height: 50px;
    line-height: 50px;
    padding: 0 20px;
  }

</style>