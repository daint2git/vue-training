import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

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
  },
  mutations: {
    increment(state) {
      state.count++
    },
    decrement(state) {
      state.count--
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
  },
})

export default store
