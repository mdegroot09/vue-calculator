<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <Calculator 
    title="I'm a title"
    div="I'm a div"
    />
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Calculator from './components/Calculator.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    Calculator
  }
}
</script>

<style src="./assets/tailwind.css">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
