<template>
  <div class="helloworld">
    <h1>{{ message }}</h1>
    <div class="hugeDiv">
      <button v-if="showButton" @click="buttonClick" class="hellobutton">Cliquez-moi</button>
      <img width="100" height="100" src="../assets/huge-picture.jpg" :style="{ width: imageWidth + 'px', height: imageHeight + 'px', top: imageTop + 'px', left: imageLeft + 'px' }" alt="Changing Image">
    </div>
    <button @click="goLogin" class="loginbutton">Connection</button>
  </div>
</template>

<script>
import router from "../router";

export default {
  name: 'HelloWorld',
  data() {
    return {
      messages: ["Hello World", "Bonjour le monde", "Hola Mundo"],
      currentMessageIndex: 0,
      imageUrl: "/image.jpg", // Assurez-vous que le chemin correspond à l'emplacement de votre image
      imageWidth: 700,
      imageHeight: 500,
      imageTop: 0,
      imageLeft: 0,
      showButton: true,
    };
  },
  computed: {
    message() {
      return this.messages[this.currentMessageIndex];
    }
  },
  methods: {
    goLogin() {
      router.push('/login');
    }
  }
};
</script>

<style>

.helloworld {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em;
  gap: 2em;
}

.mire {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5em;
}

.hugeDiv {
  display: flex;
  flex-direction: row;
  gap: 0.5em;
}

.hellobutton {
  width: 20em;
  height: 10em;
}

.loginbutton {
  width: 20em;
  height: 5em;
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