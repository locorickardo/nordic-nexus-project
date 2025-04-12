<script setup>
import { ref, onMounted } from 'vue';

const images = ref([
    { src: 'src/assets/img/carousel1.jpg', alt: 'Event 1', title: 'Ding 80?🔔', description: 'Kom och levla med oss i WoW!🏰' },
    { src: 'src/assets/img/carousel2.jpg', alt: 'Event 2', title: 'Marvel Rivals🦸', description: 'Avengers asemble!' },
    { src: 'src/assets/img/carousel3.jpg', alt: 'Event 3', title: 'Apex Legends🔫', description: 'Bring it! Ajay Che will be waitin for ya down there.' }
]);

const currentIndex = ref(0);
</script>

<template>
    <div id="carouselExampleCaptions" class="carousel slide">
        <div class="carousel-indicators">
            <button v-for="(item, index) in images" :key="index" type="button"
                :data-bs-target="'#carouselExampleCaptions'" :data-bs-slide-to="index"
                :class="{ 'active': index === currentIndex }" aria-current="true" :aria-label="'Slide ' + (index + 1)">
            </button>
        </div>
        <div class="carousel-inner">
            <div v-for="(item, index) in images" :key="index" class="carousel-item"
                :class="{ 'active': index === currentIndex }">
                <img v-bind:src="item.src" class="d-block w-100" :alt="item.alt" />
                <div class="carousel-caption d-none d-md-block">
                    <h5>{{ item.title }}</h5>
                    <p>{{ item.description }}</p>
                </div>
            </div>
        </div>

        <!-- Navigation Arrows -->
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev">
            <i class="bi bi-chevron-left"></i> <!-- Left Arrow Icon -->
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next">
            <i class="bi bi-chevron-right"></i> <!-- Right Arrow Icon -->
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>

<style scoped>
#carouselExampleCaptions {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

.carousel-img {
    width: 100%;
    height: 60vh;
    object-fit: cover;
    margin: 0 auto;
}

.carousel-caption {
    background-color: rgba(0, 0, 0, 0.7);
    max-width: 600px;
    margin: 0 auto;
    padding: 1rem;
    border-radius: 0.8rem;
}

.carousel-control-prev i,
.carousel-control-next i {
    font-size: 3rem;
    color: #ffffff;
}
</style>
