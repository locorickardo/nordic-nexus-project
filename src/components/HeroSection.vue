<script setup></script>

<template>
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

    <div class="welcome">
        <h1>Welcome!</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et scelerisque ante. Ut metus magna, sagittis
            tempor sagittis sit amet, congue quis purus. Morbi mauris ipsum, hendrerit in lorem sit amet, semper lacinia
            odio. Sed tempus, velit vel lacinia condimentum, nibh lorem laoreet arcu, eu finibus eros risus eget nisl.
            Donec interdum sed sapien non porta. Sed dignissim ex ut sagittis rutrum. Vestibulum sed massa cursus,
            ornare tellus sed, ultrices lacus. Sed metus ligula, tincidunt vel mattis sed, tempus sit amet libero.
            Phasellus eleifend leo non consectetur faucibus. Vivamus non arcu ipsum. Nam nec turpis eros.</p>
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
    margin-top: 5vh;
    margin-bottom: 2vh;
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
</style>
