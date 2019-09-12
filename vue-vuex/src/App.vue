<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <div>
      <h2>Vuex</h2>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
      <div id="count">{{ count }}</div>
      <!-- <div id="count">{{ countAlias }}</div>
      <div id="count">{{ countPlusLocalState }}</div>-->

      <div>Done todos: {{ doneTodos }}, count: {{ doneTodosCount }}</div>
      <div>todo 2: {{ getTodoById(2) }}</div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'app',
  data() {
    return {
      localCount: 5,
    }
  },
  computed: {
    // count() {
    //   return this.$store.state.count
    // },

    ...mapState({
      count: state => state.count,
      countAlias: 'count',
      countPlusLocalState(state) {
        return state.count + this.localCount
      },

      todos: state => state.todos,
    }),

    // ...mapState(['count']),

    // getters
    // doneTodos() {
    //   return this.$store.getters.doneTodos
    // },
    // doneTodosCount() {
    //   return this.$store.getters.doneTodosCount
    // },

    ...mapGetters(['doneTodos', 'doneTodosCount', 'getTodoById']),
  },
  methods: {
    increment() {},
    decrement() {},
  },
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#count {
  color: red;
}
</style>
