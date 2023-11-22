<template>
  <div class="helloworld">
    <h1>{{ message }}</h1>
    <button v-if="showButton" @click="buttonClick" class="hellobutton">Cliquez-moi</button>
    <img src="../assets/huge-picture.jpg" :style="{ width: imageWidth + 'px', height: imageHeight + 'px', top: imageTop + 'px', left: imageLeft + 'px' }" alt="Changing Image">
  </div>
</template>

<script>
export default {
  data() {
    return {
      messages: ["Hello World", "Bonjour le monde", "Hola Mundo"],
      currentMessageIndex: 0,
      imageUrl: "/image.jpg", // Assurez-vous que le chemin correspond à l'emplacement de votre image
      imageWidth: 700,
      imageHeight: 500,
      imageTop: 0,
      imageLeft: 0,
      showButton: true
    };
  },
  mounted() {
    setInterval(() => {
      this.currentMessageIndex = (this.currentMessageIndex + 1) % this.messages.length;
    }, 1000);

    setInterval(() => {
      this.imageWidth = Math.floor(Math.random() * 700) + 300;
      this.imageHeight = Math.floor(Math.random() * 500) + 200;
      this.imageTop = Math.floor(Math.random() * (window.innerHeight - this.imageHeight)); // Position verticale aléatoire sur la page
      this.imageLeft = Math.floor(Math.random() * (window.innerWidth - this.imageWidth)); // Position horizontale aléatoire sur la page
    }, 1000);

    setInterval(() => {
      this.showButton = !this.showButton;
    }, 500);
  },
  computed: {
    message() {
      return this.messages[this.currentMessageIndex];
    }
  }
};
</script>

<style>

.helloworld {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hellobutton {
  width: 20em;
  height: 10em;
}

h1 {
  font-size: 2em;
  margin-bottom: 20px;
}

.useless-css {
  width: 735px;
  height: 500px;
}
</style>