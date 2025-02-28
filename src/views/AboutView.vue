<template>
    <div class="about-text">
        <img src="../assets/img/Nordic_Nexux_GPT_Logo.png" alt="Nordic Nexus Logo" class="about-image">
        <h1>Om oss</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam gravida augue ut neque efficitur rhoncus.
            Fusce nec ligula et diam ornare bibendum. Nulla in vulputate leo. Curabitur feugiat laoreet massa, non
            feugiat lectus sodales quis. Etiam fringilla eleifend magna, at ultrices odio feugiat non. Curabitur
            convallis nisl sit amet ipsum feugiat ornare et id nisi. Donec blandit ultricies semper. Maecenas molestie,
            diam sit amet mattis dapibus, massa felis posuere orci, eu consequat massa tortor vitae orci. Vestibulum
            ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus non ultrices tortor.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce blandit
            blandit tortor, ut venenatis elit vulputate quis. In est urna, laoreet id lorem eget, maximus euismod arcu.
            Donec sed sapien mi. Nulla rutrum tortor tortor, id volutpat dui ultrices non. Duis quis metus vulputate
            nunc tincidunt cursus eget sed lacus.</p>
    </div>
</template>

<style>
.about-text {
    color: white;
    max-width: 700px;
    text-align: center;
    margin: 0 auto;
    /* Center the block horizontally */

    /* Use Flexbox to center the text vertically */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 90vh;
    /* Take full viewport height */
}

.about-image {
    width: 100%;
    /* Adjust the width as needed */
    max-width: 400px;
    /* You can set a maximum width */
    margin-bottom: 20px;
}

h1 {
    margin-top: 0;
    /* Removes any space above the h1 */
    margin-bottom: 10px;
    /* Adds a small gap below the h1 */
}

p {
    margin-top: 0;
    /* Removes any space above the p */
}
</style>

<script>
export default {
    name: 'AboutView',
};
</script>
