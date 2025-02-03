<template>
  <el-dialog v-model="dialogFormVisible" title="密码登录" width="500" class="dialog">
    <div class="info">推荐使用快捷方式登录，防止盗号</div>
    <el-input class="input" v-model="input" type="text" style="width: 240px" placeholder="支持QQ号/邮箱/手机号登录" />
    <el-input class="input" v-model="pwd" type="password" style="width: 240px" placeholder="请输入密码" />
    
    <template #footer>
      <div class="dialog">
        <el-button id="loginButton" type="primary" @click="dialogFormVisible = false">
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
defineComponent({
  name: 'login',
})
const dialogFormVisible = ref(false)
const input = ref('')
const pwd=ref('')



</script>