<template>
  <div>
    <InputText
      v-model="newTodoText"
      @keydown.enter="onAdd"
      @change="onChange($event)"
      placeholder="Input new todo"
    />
    <ul v-if="todos.length">
      <Item v-for="todo in todos" :key="todo.id" :todo="todo" @remove="onRemove" />
    </ul>
    <p v-else>Nothing left in the list. Add a new todo in the input above.</p>
  </div>
</template>

<script>
import InputText from './InputText'
import Item from './Item'

let nextId = 1 // eslint-disable-line

function getNextId() {
  nextId += 1
}

export default {
  name: 'List',
  components: { InputText, Item },
  data() {
    return {
      newTodoText: '',
      todos: [
        {
          id: getNextId(),
          text: 'Learn Vue',
        },
        {
          id: getNextId(),
          text: 'Learn about single-file components',
        },
        {
          id: getNextId(),
          text: 'Fall in love',
        },
      ],
    }
  },
  methods: {
    onChange(value) {
      this.newTodoText = value
    },
    onAdd() {
      const trimmedText = this.newTodoText.trim()
      if (trimmedText) {
        const newTodo = {
          id: getNextId(),
          text: trimmedText,
        }
        this.todos.push(newTodo)
        this.newTodoText = ''
      }
    },
    onRemove(id) {
      this.todos = this.todos.filter(todo => todo.id !== id)
    },
  },
}
</script>
