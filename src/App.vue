<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'

import { ref, onMounted } from 'vue';

// Check if the user has a stored theme preference
const isDarkMode = ref(localStorage.getItem('darkMode') === 'true');

// Function to toggle dark mode
const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  localStorage.setItem('darkMode', isDarkMode.value);
  applyTheme();
};

// Apply the theme based on the stored value
const applyTheme = () => {
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

// On mounted, apply the theme
onMounted(() => {
  applyTheme();
});
</script>

<template>
  <div id="app">
    <!-- Toggle Dark Mode Button -->
    <button @click="toggleDarkMode" class="dark-mode-toggle">
      Toggle Dark Mode
    </button>


    <NavBar />
    <RouterView />
    <RouterLink />
    <Footer />
  </div>
</template>

<style scoped>
.dark-mode-toggle {
  position: fixed;
  top: 10px;
  right: 10px;
  background: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.dark-mode-toggle:hover {
  background: #0056b3;
}
</style>
