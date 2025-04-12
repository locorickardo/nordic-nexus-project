<script setup>
import HeroSection from '@/components/HeroSection.vue';
import { ref } from 'vue';

const items = ref([
    {
        title: 'Turneringar & Priser! 🏆',
        image: 'src/assets/img/event1.png',
        description: 'Deltag i spännande turneringar och vinn stora priser! 🎮'
    },
    {
        title: 'Pro League ⚡',
        image: 'src/assets/img/event2.png',
        description: 'Möt de bästa och ta din plats i Pro League! 🔥'
    },
    {
        title: 'Gathers & mera Gathers! 🎉',
        image: 'src/assets/img/event3.png',
        description: 'Var med på våra dagliga gathers och spela med oss! 🎮'
    }
]);

const isDataLoaded = ref(true);
</script>

<template>
    <HeroSection />
    <div class="welcome">
        <h1>Välkommen till Nordic Nexus!</h1>
        <div v-if="isDataLoaded">
            <div v-for="(item, index) in items" :key="index" class="event-item">
                <div class="event-image">
                    <img v-bind:src="item.image" :alt="item.title" />
                    <div class="event-caption">
                        <h3>{{ item.title }}</h3>
                        <p>{{ item.description }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            <p>Loading...</p>
        </div>
    </div>
</template>

<style scoped>
.welcome h1 {
    display: flex;
    color: white;
    max-width: 800px;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    text-align: center;
    padding-bottom: 2vh;
    margin-top: 5vh;
    margin-bottom: 2vh;
    font-family: 'Arial', sans-serif;
    font-size: 2rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    text-shadow: 0 0 10px #7bffa5, 0 0 20px #7bffa5, 0 0 30px #7bffa5, 0 0 40px #7bffa5;
}

.welcome p {
    color: white;
    display: flex;
    max-width: 800px;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    text-align: center;
    margin-bottom: 5vh;
}

.event-item {
    position: relative;
    margin-bottom: 3rem;
}

.event-image {
    position: relative;
    max-width: 90%; /* Reduce image size */
    margin: 0 auto;
}

.event-image img {
    width: 100%;
    height: auto;  /* Auto height for aspect ratio */
    max-height: 50vh; /* Control the max height of the images */
    object-fit: cover;
}

.event-caption {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: white;
    background-color: rgba(0, 0, 0, 0.6); /* Dark background for better readability */
    padding: 1rem;
    border-radius: 0.8rem;
    max-width: 80%;
}

.event-caption h3 {
    font-size: 1.8rem;
    font-weight: bold;
}

.event-caption p {
    font-size: 1.2rem;
    font-weight: normal;
}
</style>
