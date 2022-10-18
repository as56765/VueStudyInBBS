<template>
    <div class="contentBox">
      <Log/>
    </div>
</template>

<script setup lang="ts">
// 账号登录注册界面
import {ref, Ref} from "vue";
import Log from '../components/Log.vue'
import request from '../utils/request'

</script>

<style scoped lang="less">
.contentBox{
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>