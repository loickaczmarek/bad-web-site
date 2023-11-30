<template>
  <div class="helloworld">
    <h1>{{ message }}</h1>
    <button v-if="showButton" @click="buttonClick" class="hellobutton">Cliquez-moi</button>
    <img width="100" height="100" src="../assets/huge-picture.jpg" :style="{ width: imageWidth + 'px', height: imageHeight + 'px', top: imageTop + 'px', left: imageLeft + 'px' }" alt="Changing Image">
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
  async beforeMount() {
    const computingSomething = () => {
      for (let i = 0; i < 1000000; i++) {
        const test = "test";
        test;
      }
    }
    for (let i = 0; i < 10000; i++) {
      computingSomething();
    }
  },
  async mounted() {
    function wait(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    await wait(1000);
    console.log("wait 1000 ms");

    setInterval(() => {
      this.currentMessageIndex = (this.currentMessageIndex + 1) % this.messages.length;
    }, 1000);

    setInterval(() => {
      this.imageWidth = Math.floor(Math.random() * 700) + 300;
      this.imageHeight = Math.floor(Math.random() * 500) + 200;
      this.imageTop = Math.floor(Math.random() * (window.innerHeight - this.imageHeight));
      this.imageLeft = Math.floor(Math.random() * (window.innerWidth - this.imageWidth));
    }, 1000);

    setInterval(() => {
      this.showButton = !this.showButton;
    }, 500);

    const loadingSomeData = async () => {
      await fetch("https://www.octo.com/assets/logo-mini.svg",
          {
            mode: 'no-cors'
          })
    }
    for (let i = 0; i < 100; i++) {
      loadingSomeData();
    }
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