<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <NavBar />
  <RouterView />
  <RouterLink />
  <Footer />
</template>

<style scoped>

</style>
