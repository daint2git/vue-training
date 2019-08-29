<template>
  <div>
    <p id="test">{{ message }}</p>
    <p v-bind:title="message2" class="message2">{{ message2 }}</p>
    <p :title="message2" class="message2">{{ message2 }}</p>
    <p>Thông điệp bị đảo ngược bằng tính toán (computed): "{{ reversedMessage }}"</p>
    <p v-if="invisible">invisible</p>
    <p v-if="visible">visible</p>
    <ol>
      <li v-for="todo in todos" v-bind:key="todo.id">{{ todo.text }}</li>
    </ol>
    <button v-on:click="reverseMessage">Reverse Message</button>
    <button @click="reverseMessage">Reverse Message2</button>
    <br />
    <input v-model="message2" />
    <ol>
      <todo-item v-for="todo in todos" v-bind:todo="todo" v-bind:key="todo.id"></todo-item>
    </ol>
    <p>{{ fullName }}</p>
    <input v-model="fullName" />
  </div>
</template>

<script>
export default {
  name: 'Test',
  data() {
    return {
      message: 'Do you wanna build a Vue app?',
      message2: 'Do you wanna build a Vue app 2?',
      invisible: false,
      visible: true,
      todos: [
        { id: 1, text: 'Học JavaScript' },
        { id: 2, text: 'Học Vue' },
        { id: 3, text: 'Xây dựng cái gì đó hay ho' },
      ],
      firstName: 'Dai',
      lastName: 'nguyen',
    }
  },
  computed: {
    // một computed getter
    reversedMessage() {
      // `this` trỏ tới đối tượng vm
      return this.message2
        .split(' ')
        .reverse()
        .join(' ')
    },
    fullName: {
      get() {
        return `${this.firstName} ${this.lastName}`
      },
      set(value) {
        const names = value.split(' ')
        this.firstName = names[0]
        this.lastName = names[names.length - 1]
      },
    },
  },
  methods: {
    reverseMessage() {
      this.message2 = this.message2
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
.message2 {
  color: greenyellow;
}
</style>
