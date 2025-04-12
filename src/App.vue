<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div>
    <NavBar />
    <RouterView />
    <RouterLink />
    <Footer />
  </div>
</template>

<style scoped>

</style>
