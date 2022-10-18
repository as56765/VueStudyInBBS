<template>
  <router-link to="/my">
    <img :src="src || avatar" alt="头像" class="avatar"/>
  </router-link>
</template>

<script setup lang="ts">
import avatar from '/src/assets/avatarDefault.png'
import {onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted} from "vue";


type prop = {
  src?: string,
  width?: number,
  height?: number,
  size?:number
}
const props = withDefaults(defineProps<prop>(), {
  width: 34,
  height: 34,
})
let cssWidth:string;
let cssHeight:string;

onBeforeMount(()=>{
  if(props.size){
    cssWidth = props.size + "px"
    cssHeight = props.size + "px"
    return
  }
  cssWidth = props.width+"px"
  cssHeight = props.height + "px"
})

</script>

<style scoped lang="less">
img{
  width:v-bind(cssWidth);
  height:v-bind(cssHeight);
  border-radius:50%;
  object-fit:cover;
  object-position:top center;
  border: 1px solid rgb(239,239,239);
  cursor: pointer;
}
</style>