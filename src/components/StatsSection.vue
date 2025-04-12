<script setup>
import { ref, onMounted } from 'vue'

const memberCount = ref(null)

const fetchMemberCount = async () => {
    try {
        const serverId = '1319280614788300894'
        const res = await fetch(`https://discord.com/api/guilds/${serverId}/widget.json`)
        const data = await res.json()
        memberCount.value = data.presence_count
    } catch (err) {
        console.error('Failed to fetch Discord member count:', err)
        memberCount.value = 'N/A'
    }
}

onMounted(fetchMemberCount)
</script>

<template>
    <div class="discord-widget">
        <h2>Join our Discord Server</h2>
        <iframe src="https://discord.com/widget?id=1319280614788300894&theme=dark" width="350" height="500"
            allowtransparency="true" frameborder="0"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
    </div>
</template>

<style>
.discord-widget {
    color: white;
    text-align: center;
    margin-bottom: 20vh;
    padding-top: 90px;
}

.discord-widget ul {
    list-style: none;
    padding: 0;
}

.discord-widget li {
    margin: 0.5rem 0;
}
</style>
