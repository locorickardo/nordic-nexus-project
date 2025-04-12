<template>
  <div class="signup-page">
    <p class="centered-text">På Fredagen den 18/4 April är det dags! <br>Då håller vi i en CS turnering och alla <br>fem
      spelare
      kammar hem 5 flak NOCCO VAR!🥳</p>

    <div class="signup-form">
      <h2>Anmäl dig till turneringen!</h2>
      <div class="input-container">
        <input v-model="userName" type="text" placeholder="Skriv ditt namn" />
        <button v-on:click="handleSubmit">
          Anmäl dig
        </button>
        <button v-on:click="handleClear">
          Rensa
        </button>
      </div>

      <div v-if="participants.length > 0">
        <h3>Anmälda deltagare:</h3>
        <ul>
          <li v-for="(participant, index) in participants" :key="index">
            {{ index + 1 }}. {{ participant }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.signup-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #181818;
  background-image: url('@/assets/img/nordic-tournament.png');
  background-size: cover;
  background-position: center 0%;
  background-repeat: no-repeat;
  flex-direction: column;
}

.centered-text {
  background-color: rgba(0, 0, 0, 0.7);
  padding: 20px;
  border-radius: 30px;
  font-size: 1.1rem;
  color: white;
  margin-top: 20vw;
  padding-bottom: 5vh;
  text-align: center;
  text-shadow: 0 0 10px #ffffff;
}

.signup-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(34, 34, 34, 0.8);
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  width: 100%;
  max-width: 500px;
  margin-bottom: 20vh;
}

h2 {
  color: white;
  text-shadow: 0 0 10px #7bffa5, 0 0 20px #7bffa5, 0 0 30px #7bffa5, 0 0 40px #7bffa5;
}

.input-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 500px;
  margin-top: 1rem;
}

input {
  padding: 0.75rem;
  font-size: 1.2rem;
  width: 80%;
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: border-color 0.3s ease;
}

button {
  padding: 0.75rem 1.5rem;
  font-size: 14px;
  background-color: #7bffa54d;
  border: none;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 10px;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #7bffa577;
}

button:active {
  background-color: #7bffa5f1;
}

ul {
  list-style-type: none;
  padding-left: 0;
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  overflow-x: auto;
}

li {
  font-size: 1.2rem;
  margin: 0.5rem 1rem;
  color: white;
  text-align: center;
  padding: 0.5rem 1rem;
  border-radius: 4px;
}

h3 {
  color: white;
}
</style>

<script setup>
import { ref, onMounted } from 'vue'

const userName = ref('')
const participants = ref([])

const handleSubmit = () => {
  if (userName.value) {
    participants.value.push(userName.value)
    localStorage.setItem('participants', JSON.stringify(participants.value))
    userName.value = ''
  } else {
    alert('Var god och skriv in ditt namn!')
  }
}

// Clear signup user list
const handleClear = () => {
  participants.value = []
  localStorage.removeItem('participants')
  userName.value = ''
}

// Fetch user data from localstorage
onMounted(() => {
  const savedParticipants = localStorage.getItem('participants')
  if (savedParticipants) {
    participants.value = JSON.parse(savedParticipants)
  }
})
</script>
