<template>
  <div>
    <p id="test">{{ message }}</p>
    <p v-bind:title="message2">{{ message2 }}</p>
    <p v-if="invisible">invisible</p>
    <p v-if="visible">visible</p>
    <ol>
      <li v-for="todo in todos" v-bind:key="todo.id">{{ todo.text }}</li>
    </ol>
    <button v-on:click="reverseMessage">Reverse Message</button>
    <button @click="reverseMessage">Reverse Message2</button>
    <br />
    <input v-model="message" />
    <ol>
      <todo-item v-for="todo in todos" v-bind:todo="todo" v-bind:key="todo.id"></todo-item>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'Test',
  data() {
    return {
      message: 'Do you wanna build a Vue app?',
      message2: 'Do you wanna build a Vue app?',
      invisible: false,
      visible: true,
      todos: [
        { id: 1, text: 'Học JavaScript' },
        { id: 2, text: 'Học Vue' },
        { id: 3, text: 'Xây dựng cái gì đó hay ho' },
      ],
    }
  },
  methods: {
    reverseMessage() {
      this.message = this.message
        .split(' ')
        .reverse()
        .join(' ')
    },
  },
}
</script>

<style scoped>
p {
  font-size: 20px;
  color: blueviolet;
}
</style>
