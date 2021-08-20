<template>
  <div id="app">
    <h1>Hello</h1>
    <Prediction />
  </div>
</template>

<script>
import Prediction from "./components/Prediction.vue";
export default {
  name: "App",
  components: {
    Prediction
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
