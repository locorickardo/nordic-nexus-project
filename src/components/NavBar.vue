<template>
  <div>
      <!-- Navbar with glass effect -->
      <nav class="navbar navbar-expand-lg bg-body-tertiary navbar-glass">
          <div class="container-fluid">
              <a class="navbar-brand" href="/">🏔️ Nordic Nexus</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav">
                      <li class="nav-item">
                          <a class="nav-link active" aria-current="page" href="/">Hem</a>
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

      <!-- Carousel -->
      <div id="carouselExampleCaptions" class="carousel slide">
          <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
                  aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                  aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                  aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3"
                  aria-label="Slide 4"></button>
          </div>
          <div class="carousel-inner">
              <div class="carousel-item active">
                  <img src="../assets/img/Carousel_1.png" class="carousel-img d-block" alt="...">
                  <div class="carousel-caption d-none d-md-block">
                      <h5>First slide label</h5>
                      <p>Some representative placeholder content for the first slide.</p>
                  </div>
              </div>
              <div class="carousel-item">
                  <img src="../assets/img/Carousel_2.png" class="carousel-img d-block" alt="...">
                  <div class="carousel-caption d-none d-md-block">
                      <h5>Second slide label</h5>
                      <p>Some representative placeholder content for the second slide.</p>
                  </div>
              </div>
              <div class="carousel-item">
                  <img src="../assets/img/Carousel_3.png" class="carousel-img d-block" alt="...">
                  <div class="carousel-caption d-none d-md-block">
                      <h5>Third slide label</h5>
                      <p>Some representative placeholder content for the third slide.</p>
                  </div>
              </div>
              <div class="carousel-item">
                  <img src="../assets/img/Carousel_4.png" class="carousel-img d-block" alt="...">
                  <div class="carousel-caption d-none d-md-block">
                      <h5>Fourth slide label</h5>
                      <p>Some representative placeholder content for the fourth slide.</p>
                  </div>
              </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
          </button>
      </div>
  </div>
</template>

<style scoped>
/* Navbar glass effect */
.navbar-glass {
position: fixed;
top: 0;
left: 0;
right: 0;
backdrop-filter: blur(10px); /* Apply the blur effect */
background: rgba(255, 255, 255, 0.3); /* Transparent background for the glass effect */
z-index: 10; /* Ensure navbar stays on top */
padding: 10px 0;
}

/* Carousel container */
#carouselExampleCaptions {
margin-top: 100px; /* Push carousel down to avoid overlapping with navbar */
display: flex;
justify-content: center;
align-items: center;
position: relative;
}

/* Stretch the image across the width of the screen, reduce its height */
.carousel-img {
width: 100%;  /* Stretch the image to full width */
height: 50vh; /* Set a smaller height for the image */
object-fit: cover; /* Ensure the image covers the area without stretching */
margin: 0 auto;
}
</style>

<script setup>
</script>
