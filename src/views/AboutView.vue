<template>
  <div class="about-text">
    <img src="../assets/img/Fox_Maskot_1.png" alt="Nordic Nexus Logo" class="about-image" />
    <h1>Nordic Nexus🏔️</h1>
    <p>
      Vi är en gaming community som vill skapa en toxic-free miljö där alla ska känna sig välkomna
      och uppskattade oavsett vem du är. Vårat mål är att bygga en stor medlemsbas för att kunna
      anordna spelkvällar, events, turneringar och annat. Oavsett om du har en kärlek för gaming,
      filmer, serier eller kanske bara det sociala, så är du varmt välkommen.<br /><br />

      Vårat mål är att med tiden kunna anordna turneringar i olika spel, events, gamingkvällar och
      annat kul regelbundet! Med tiden så kommer vi på nya idéer tillsammans, och även vi i staff
      kommer jobba på en del saker i bakgrunden för att nå våra mål.<br /><br />

      Alla är varmt välkomna och vi hoppas att du kommer att trivas hos oss! Har du några
      funderingar så kan du alltid bara fråga eller skapa en ticket. Så vad väntar du på? <br />Bjud
      in dina vänner så drar vi igång gibbet!
    </p>
    <PepeImage
      :defaultImage="'src/assets/img/pepe-gaming.png'"
      :hoverImage="'src/assets/img/pepe-gaming2.png'"
      :onclick="handlePepeClick"
    />
    <p class="pepe-clickme" :onClick="handlePepeClick">Click me!☝️</p>
  </div>
</template>

<style>
.about-text {
  font-family: Ubuntu;
  font-weight: 300;
  color: white;
  max-width: 700px;
  text-align: center;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.about-image {
  width: 100%;
  max-width: 400px;
  margin-bottom: 20px;
}

.pepe-clickme {
    color: white;
    text-shadow: 0 0 10px #7bffa5;
    cursor: pointer;
}

.pepe-clickme:hover {
    color: #7bffa5;
}

.pepe-image-wrapper {
  display: inline-block;
  padding: 0;
  border-radius: 8px;
  transition: box-shadow 0.3s ease;
}

.pepe-image {
  display: block;
  width: 80px;
  border-radius: 8px;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}

h1 {
  margin-top: 0;
  margin-bottom: 10px;
}

p {
  margin-top: 0;
}
</style>

<script setup>
import PepeImage from "@/components/PepeImage.vue";

const handlePepeClick = () => {
  alert("Pepe says hi! 🐸✨");
};
</script>
