<template>
  <main class="Log">
    <div class="LogBox">
      <div class="LogBac"></div>
      <div class="LogContent">
        <p>LogIn</p>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import backImg from '../assets/img/img6.jpg'

</script>

<style scoped lang="less">

.LogBox{
  display: grid;
  grid-template-columns: 100px 1fr;
  max-height: 650px;
  min-height: 430px;

  .LogBac{
    background-image: url("/src/assets/img/img6.jpg");
    min-height: 430px;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .LogContent{
    padding: 20px;

    &>p{
      font-family: IBMPlexSans,sans-serif;
    }
  }
}
</style>