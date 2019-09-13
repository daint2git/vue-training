import Vue from 'vue'
import Vuex from 'vuex'
import { getPosts, getPostById } from '../api/posts'
import myPlugin from './myPlugin'

Vue.use(Vuex)

const isDev = process.env.NODE_ENV !== 'production'

export const mutationTypes = {
  INCREMENT: 'INCREMENT',
  INCREMENTBY: 'INCREMENTBY',
  DECREMENT: 'DECREMENT',

  // POSTS
  UPDATE_POSTS_REQUEST: 'UPDATE_POSTS_REQUEST',
  UPDATE_POSTS_SUCCESS: 'UPDATE_POSTS_SUCCESS',
  UPDATE_POSTS_FAILURE: 'UPDATE_POSTS_FAILURE',
  UPDATE_POST_SUCCESS: 'UPDATE_POST_SUCCESS',
  UPDATE_POST_FAILURE: 'UPDATE_POST_FAILURE',
}

const store = new Vuex.Store({
  state: {
    count: 0,
    todos: [
      {
        id: 1,
        text: 'text-1',
        done: true,
      },
      {
        id: 2,
        text: 'text-2',
        done: false,
      },
    ],
    posts: [],
    post: {},
    isLoading: false,
    errors: {},
  },
  mutations: {
    // increment(state) {
    //   state.count++
    // },
    // decrement(state) {
    //   state.count--
    // },
    // incrementBy(state, payload) {
    //   state.count += payload.amount
    // },

    [mutationTypes.INCREMENT](state) {
      state.count++
    },
    [mutationTypes.DECREMENT](state) {
      state.count--
    },
    [mutationTypes.INCREMENTBY](state, payload) {
      state.count += payload.amount
    },
    [mutationTypes.UPDATE_POSTS_REQUEST](state) {
      state.isLoading = true
    },
    [mutationTypes.UPDATE_POSTS_SUCCESS](state, payload) {
      state.posts = payload
      state.isLoading = false
    },
    [mutationTypes.UPDATE_POSTS_FAILURE](state, payload) {
      state.errors = payload
      state.isLoading = false
    },
    [mutationTypes.UPDATE_POST_SUCCESS](state, payload) {
      state.post = payload
    },
    [mutationTypes.UPDATE_POST_FAILURE](state, payload) {
      state.post = {}
      state.errors = payload
    },
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length
    },
    getTodoById: state => id => {
      return state.todos.find(todo => todo.id === id)
    },
    postsCount(state) {
      return state.posts.length
    },
    hasPost(state) {
      return Object.keys(state.post).length > 0
    },
  },
  actions: {
    incrementAsync(context) {
      setTimeout(() => {
        context.commit(mutationTypes.INCREMENT)
      }, 1000)
    },
    actionGetPostsRequest(context) {
      context.commit(mutationTypes.UPDATE_POSTS_REQUEST)
    },
    async actionGetPosts(context) {
      try {
        await context.dispatch('actionGetPostsRequest')
        const { data } = await getPosts()
        context.commit(mutationTypes.UPDATE_POSTS_SUCCESS, data.posts)
      } catch (error) {
        context.commit(mutationTypes.UPDATE_POSTS_FAILURE, error)
      }
    },
    async actionGetPostById(context, { id }) {
      try {
        const { data } = await getPostById(id)
        context.commit(mutationTypes.UPDATE_POST_SUCCESS, data.post)
      } catch (error) {
        context.commit(mutationTypes.UPDATE_POST_FAILURE, error)
      }
    },
  },
  plugins: isDev ? [myPlugin] : [],
  strict: isDev,
  devtools: true,
})

export default store
