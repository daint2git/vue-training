<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <div>
      <h2>Vuex</h2>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
      <button @click="incrementBy({ amount: 5 })">+5</button>
      <button @click="incrementAsync">+ (incrementAsync)</button>
      <div id="count">{{ count }}</div>
      <!-- <div id="count">{{ countAlias }}</div>
      <div id="count">{{ countPlusLocalState }}</div>-->

      <div>Done todos: {{ doneTodos }}, count: {{ doneTodosCount }}</div>
      <div>todo 2: {{ getTodoById(2) }}</div>
      <br />
      <div>
        <h3>Posts</h3>
        <p class="loading" v-if="isLoading">Loading...</p>
        <ul v-if="postsCount > 0">
          <li v-for="post in posts" :key="post.id">
            <details>
              <summary>{{ post.title }}</summary>
              <p>{{ post.body }}</p>
            </details>
          </li>
        </ul>
        <button @click="fetchPosts">Fetch posts</button>
        <br />
        <input type="text" v-model="searchPost" @keyup.enter="getPostById" />
        <details v-if="hasPost">
          <summary>{{ post.title }}</summary>
          <p>{{ post.body }}</p>
        </details>
        <br />
        <p class="error" v-if="errors.message">{{ errors.message }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import { mutationTypes } from './store'
export default {
  name: 'app',
  data() {
    return {
      localCount: 5,
      searchPost: '',
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
      posts: state => state.posts,
      post: state => state.post,
      errors: state => state.errors,
      isLoading: state => state.isLoading,
    }),

    // ...mapState(['count']),

    // getters
    // doneTodos() {
    //   return this.$store.getters.doneTodos
    // },
    // doneTodosCount() {
    //   return this.$store.getters.doneTodosCount
    // },

    // ...mapGetters(['doneTodos', 'doneTodosCount', 'getTodoById']),
    ...mapGetters({
      doneTodos: 'doneTodos',
      doneTodosCount: 'doneTodosCount',
      getTodoById: 'getTodoById',
      postsCount: 'postsCount',
      hasPost: 'hasPost',
    }),
  },
  methods: {
    // increment() {
    //   this.$store.commit('increment')
    // },
    // decrement() {
    //   this.$store.commit('decrement')
    // },
    // incrementBy(n) {
    //   this.$store.commit('incrementBy', { amount: n })
    // },
    increment() {
      this.$store.commit(mutationTypes.INCREMENT)
    },
    decrement() {
      this.$store.commit(mutationTypes.DECREMENT)
    },
    incrementBy(payload) {
      this.$store.commit(mutationTypes.INCREMENTBY, payload)
    },
    incrementAsync() {
      this.$store.dispatch('incrementAsync')
    },
    fetchPosts() {
      this.$store.dispatch('actionGetPosts')
    },
    getPostById(event) {
      const id = event.target.value
      if (id) {
        this.$store.dispatch('actionGetPostById', { id: parseInt(id.trim()) }).finally(() => {
          this.searchPost = ''
        })
      }
    },
    // ...mapMutations(['increment', 'decrement']),
    // ...mapMutations({
    //   increment: 'increment',
    //   decrement: 'decrement',
    //   incrementBy: 'incrementBy',
    // }),
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
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: block;
  margin: 0 10px;
  text-align: left;
}
.loading {
  color: orangered;
}
.error {
  color: red;
  font-size: 20px;
}
</style>
