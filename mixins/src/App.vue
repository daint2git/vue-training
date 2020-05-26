<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />

    <button @click="handleClick">click {{ count }}</button>
  </div>
</template>

<script>
import fetchDataMixin from './mixins/fetchDataMixin';

export default {
  name: 'App',
  data() {
    console.log('data in App');
    return {
      x: 99,
      z: 12,
      count: 0,
    };
  },

  mixins: [fetchDataMixin({ a: 1, b: 2 })],
  created() {
    console.log('created in App', this.y);
    this.fetchData();
  },
  methods: {
    handleClick() {
      this.count += 1;
      this.filter = { ...this.filter, tbb: 99 + this.count };
      console.log(this.$data);
      this.fetchData(this.filter);
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
