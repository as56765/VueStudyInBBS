<template>
  <div class="content">
    <slot></slot>
  </div>
</template>

<script setup>
</script>

<style scoped lang="less">
.content{
  width: 80vw;
  max-width: 2560px;
  margin: 88px auto 0;
  min-width:calc(998px + 176px);
}
</style>