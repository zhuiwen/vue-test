<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p @click = "add"> {{count}}</p>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    count(){
      return this.$store.state.count
    }
  },
  methods: {
    add(){
      this.$store.commit("addCount", 5)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
