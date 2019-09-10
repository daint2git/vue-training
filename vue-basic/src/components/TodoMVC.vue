<template>
  <section class="todoapp">
    <header class="header">
      <h1>Todos</h1>
      <input
        v-model="newTodo"
        @keyup.enter="addTodo"
        class="new-todo"
        autofocus
        autocomplete="off"
        placeholder="What needs yo be done ?"
      />
    </header>
    <main v-show="todos.length" v-cloak class="main">
      <input v-model="allDone" id="toggle-all" class="toggle-all" type="checkbox" />
      <label for="toggle-all"></label>
      <ul class="todo-list">
        <li
          v-for="todo in filteredTodos"
          :key="todo.id"
          :class="{ completed: todo.completed, editing: todo == editedTodo }"
          class="todo"
        >
          <div class="view">
            <input v-model="todo.completed" class="toggle" type="checkbox" />
            <label @dblclick="editTodo(todo)">{{ todo.title }}</label>
            <button @click="removeTodo(todo)" class="destroy"></button>
          </div>
          <input
            v-model="todo.title"
            v-todo-focus="todo == editedTodo"
            @blur="doneEdit(toto)"
            @keyup.enter="doneEdit(todo)"
            @keyup.esc="cancelEdit(todo)"
            class="edit"
            type="text"
          />
        </li>
      </ul>
    </main>
    <footer v-cloak class="footer">
      <span class="todo-count">
        <strong>{{ remaining }}</strong>
        {{ remaining | pluralize }} left
      </span>
      <ul class="filters">
        <li>
          <a :class="{ selected: visibility === 'all' }" href="#/all">All</a>
          <a :class="{ selected: visibility === 'active' }" href="#/active">Active</a>
          <a :class="{ selected: visibility === 'completed' }" href="#/completed">Completed</a>
        </li>
      </ul>
      <button @click="removeCompleted" v-show="todos.length > remaining" class="clear-completed">
        Clear completed
      </button>
    </footer>
  </section>
</template>

<script>
// localStorage persistence
const STORAGE_KEY = 'todos-vuejs'
const todoStorage = {
  fetch() {
    try {
      const todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
      todos.forEach((todo, index) => {
        todo.id = index // eslint-disable-line
      })
      todoStorage.uid = todos.length
      return todos
    } catch (error) {
      throw new Error(error)
    }
  },
  save(todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  },
}

// visibility filters
const filters = {
  all(todos) {
    return todos
  },
  active(todos) {
    return todos.filter(todo => !todo.completed)
  },
  completed(todos) {
    return todos.filter(todo => todo.completed)
  },
}

export default {
  name: 'TodoMVC',
  filters: {
    pluralize(n) {
      return n === 1 ? 'item' : 'items'
    },
  },

  // a custom directive to wait for the DOM to be updated
  // before focusing on the input field.
  directives: {
    'todo-focus': function handler(el, binding) {
      if (binding.value) {
        el.focus()
      }
    },
  },
  data() {
    return {
      todos: todoStorage.fetch(),
      newTodo: '',
      editedTodo: null,
      visibility: 'all',
    }
  },
  // computed properties
  computed: {
    filteredTodos() {
      return filters[this.visibility](this.todos)
    },
    remaining() {
      return filters.active(this.todos).length
    },
    allDone: {
      get() {
        return this.remaining === 0
      },
      set(value) {
        this.todos.forEach(todo => {
          todo.completed = value // eslint-disable-line
        })
      },
    },
  },
  // watch todos change for localStorage persistence
  watch: {
    todos: {
      handler(todos) {
        todoStorage.save(todos)
      },
      deep: true,
    },
  },
  methods: {
    addTodo() {
      const value = this.newTodo && this.newTodo.trim()
      if (!value) {
        return
      }

      this.todos.push({
        id: todoStorage.uid++, // eslint-disable-line
        title: value,
        completed: false,
      })

      this.newTodo = ''
    },

    removeTodo(todo) {
      this.todos.splice(this.todos.indexOf(todo), 1)
    },

    editTodo(todo) {
      this.beforeEditCache = todo.title
      this.editedTodo = todo
    },

    doneEdit(todo) {
      if (!this.editedTodo) {
        return
      }
      this.editedTodo = null
      todo.title = todo.title.trim() // eslint-disable-line
      if (!todo.title) {
        this.removeTodo(todo)
      }
    },

    cancelEdit(todo) {
      this.editedTodo = null
      todo.title = this.beforeEditCache // eslint-disable-line
    },

    removeCompleted() {
      this.todos = filters.active(this.todos)
    },
  },
}
</script>

<style>
@import 'https://unpkg.com/todomvc-app-css@2.2.0/index.css';
.view {
  text-align: left;
}
[v-cloak] {
  display: none;
}
</style>
