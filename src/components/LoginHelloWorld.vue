<template>
  <div class="mire">
    <h1 v-if="loggedMessage">{{ loggedMessage }}</h1>
    <label for="input1">Identifiant</label>
    <input type="text" id="input1" v-model="input1">

    <label for="input2">Mot de passe</label>
    <input type="password" id="input2" v-model="input2">

    <button @click="authenticate" class="loginbutton">Connection</button>
  </div>
</template>

<script>
import router from "../router";

export default {
  name: 'LoginHelloWorld',
  data() {
    return {
      loggedMessage: '',
    };
  },
  methods: {
    authenticate() {
      if (this.input1 === 'badwebsite' && this.input2 === 'badwebsite') {
        router.push('/success');
      } else {
        this.loggedMessage = 'Connection échouée';
      }
    }
  }
};
</script>

<style>
.mire {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5em;
}
</style>