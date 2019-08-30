<template>
  <BaseLayout>
    <InputText
      v-model="newTodoText"
      @keydown.enter="onAdd"
      slot="header"
      placeholder="Input new todo"
    />
    <ul v-if="todos.length">
      <Item v-for="todo in todos" :key="todo.id" :todo="todo" @remove="onRemove" />
    </ul>
    <p v-else>Nothing left in the list. Add a new todo in the input above.</p>
    <template slot="footer">
      <p>This is Footer</p>
    </template>
    <div>Content</div>
  </BaseLayout>
</template>

<script>
import BaseLayout from './BaseLayout'
import InputText from './InputText'
import Item from './Item'

let nextId = 1 // eslint-disable-line

function getNextId() {
  nextId += 1
  return nextId
}

export default {
  name: 'List',
  components: { BaseLayout, InputText, Item },
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
