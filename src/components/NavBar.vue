<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary navbar-glass">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">
                    <img src="../assets/img/Fox_Maskot_3.png" alt="Nordic Nexus logo" class="navbar-logo">
                    Nordic Nexus
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="/">Hem</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="about">Om Oss</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="https://discord.gg/gvVdMhBKXY">Discord</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="statistik">Statistik</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<style scoped>
.navbar-glass {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    backdrop-filter: blur(10px);
    background: #121212 !important;
    z-index: 10;
    padding: 10px 0;
}

.navbar-toggler {
    background-color: white;
    border-color: white;
}

.navbar-brand {
    color: white;
}

.nav-link {
    color: white;
}

.nav-item a:hover {
    color: #7bffa5;
}
</style>

<script setup>
</script>
