<template>
  <p>APP {{ count }}</p><button @click="increaseCount">APP按钮</button>
  <HelloWorld />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  computed: {
    count() {
      return this.$store.state.count;
    }
  },
  methods: {
    increaseCount() {
      this.$store.dispatch('increment', { count: 3 })
    }
  }
}
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
