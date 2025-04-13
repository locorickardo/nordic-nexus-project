<template>
    <img :src="imageSrc" alt="Pepe Gaming" class="pepe-image" @mouseover="imageSrc = hoverImage"
        @mouseleave="imageSrc = defaultImage" @click="handleClick" />
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
    defaultImage: String,
    hoverImage: String,
    onClick: Function
})

const imageSrc = ref(props.defaultImage)

const handleClick = () => {
    if (props.onClick) props.onClick()
}
</script>

<style scoped>
.pepe-image {
    width: 80px;
    border-radius: 8px;
    cursor: pointer;
    transition: box-shadow 0.3s ease, transform 0.3s ease;
}
</style>
