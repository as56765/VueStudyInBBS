<script setup lang="ts">
import NavBar from './components/Navbar.vue'
import Layout from './components/Layout.vue'

</script>

<template>
  <template v-if="$route.name !== 'log'">
    <header class="header">
      <NavBar/>
    </header>
    <Layout>
      <router-view/>
    </Layout>
  </template>
  <template v-else>
    <router-view/>
  </template>
</template>

<style scoped>
  .header{
    min-width:calc(998px + 176px);
    height: 80px;
    background: #ffffff;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
  }
</style>
