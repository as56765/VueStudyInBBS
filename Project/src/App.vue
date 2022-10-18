<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import {Directive, DirectiveBinding, ref} from "vue";
import A from "./components/A.vue";
import useBase64 from './hooks/index'
import {createLogger} from "vite";

useBase64({
  el:'#img'
})
    .then(res => console.log(res.baseUrl))

</script>

<template>
  <div class="box">
    <img id="img" src="./assets/avatar.png"/>
    {{$fitters.format('你好啊')}}
  </div>
</template>

<style>
  .box{
    width: 200px;
    height: 200px;
    border: 1px solid black;
    position: absolute;
  }
</style>
