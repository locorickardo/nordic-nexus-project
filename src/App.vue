<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <NavBar />
  <Footer />
  <RouterView />
  <RouterLink />
</template>

<style scoped>

</style>
