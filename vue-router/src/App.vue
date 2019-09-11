<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <Menu></Menu>
    <pre id="counter">{{ n }}</pre>
    <pre id="query-t">query-t {{ $route.query.t }}</pre>
    <pre id="hash">hash {{ $route.hash }}</pre>
    <button @click="navigateAndIncrement">navigateAndIncrement</button>
    <button @click="navigateBack">Go back</button>
    <router-view></router-view>
  </div>
</template>

<script>
import Menu from './components/Menu'
export default {
  name: 'app',
  components: { Menu },
  data() {
    return {
      n: 0,
    }
  },
  methods: {
    navigateAndIncrement() {
      const increment = () => this.n++
      if (this.$route.path === '/') {
        this.$router.push('foo', increment)
      } else {
        this.$router.push('/', increment)
      }
    },
    navigateBack() {
      this.$router.go(-1)
    },
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 20px;
}

#counter {
  color: red;
}
</style>
