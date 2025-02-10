<template>
  <el-dialog title="密码登录" width="500" class="dialog">
    <div class="info">推荐使用快捷方式登录，防止盗号</div>
    <el-input class="input" v-model="input" type="text" style="width: 240px" placeholder="支持QQ号/邮箱/手机号登录" />
    <el-input class="input" v-model="pwd" type="password" style="width: 240px" placeholder="请输入密码" />
    
    <template #footer>
      <div class="dialog">
        <el-button id="loginButton" type="primary" @click="getTest">
          登录
        </el-button>
      </div>
      <div class="others">
        <span class="othersinfo">注册账号</span>
        <span class="othersinfo">找回密码</span>
        <span class="othersinfo">意见反馈</span>
      </div>
    </template>
  </el-dialog>
</template>
<style>
.others{
  display: flex;
  justify-content: center;
}
.othersinfo{
  margin-left: 20px;
  margin-top: 5px;
  font-size: small;
}
.info{
  font-size: small;
  margin-bottom: 10px;
}
.input {
  margin-top: 20px;
  margin-bottom: 3px;
}
.dialog{
  text-align: center;
}
#loginButton {
  width: 240px;
}
</style>
<script lang="ts" setup>
import { defineComponent, ref } from 'vue'
import {useUserStore} from '@/store/user.ts'
import {useLoginStore} from '@/store/login.ts'
import {storeToRefs} from 'pinia'
const userStore=useUserStore()
import  axios  from 'axios';
defineComponent({
  name: 'login',
})
const loginStore=useLoginStore()
const input = ref('')
const pwd=ref('')
async function getTest(){
  try {
    let {data}=await axios.get(`http://127.0.0.1:8000/login?name=${input.value}&pwd=${pwd.value}`)
    console.log(data);
    if(data!='Not Found'){
      userStore.username=data
      loginStore.dialogFormVisible=false
      alert('登录成功')
    }
    else{
      alert('登录失败')
    }
  } catch (error) {
    const err = error
    console.log(err)
  }
}


</script>