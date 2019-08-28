<template>
  <div>
    <div :class="{ active: isActive, 'text-danger': hasError }" class="default">{{ text }}</div>
    <div :class="classObject" class="default">{{ text }}</div>
    <div :class="[{ active: isActive }, { 'text-danger': hasError }]" class="default">
      {{ text }}
    </div>
    <div v-show="hasError">Has Error</div>
    <input type="text" v-model="text" />
    <br />
    <ul>
      <li v-for="(value, key, index) in userObject" :key="key">
        {{ index }}. {{ key }} : {{ value }}
      </li>
    </ul>
    <ul>
      <li v-for="(n, index) in even(numbers)" :key="index">{{ n }}</li>
    </ul>
    <br />
    <button @click="say('AA', $event)">Hãy nói AA</button>
    <button @click="say('BB', $event)">Hãy nói BB</button>
    <p>{{ message }}</p>
    <br />
    <input type="text" placeholder="edit me" @keyup.enter="handleEnter" />
    <input type="text" placeholder="edit me" @keyup.page-down="handlePageDown" />
  </div>
</template>

<script>
export default {
  name: 'Test3',
  data() {
    return {
      text: 'Xin chao',
      isActive: true,
      hasError: false,

      classObject: {
        active: true,
        'text-danger': false,
      },

      userObject: {
        họ: 'Bành',
        tên: 'Tổ',
        tuổi: 800,
      },

      numbers: [1, 2, 3, 4, 5],

      message: '',
    }
  },
  watch: {
    text(newText) {
      this.hasError = newText.slice(-1) === 'e'
    },
  },
  methods: {
    even(numbers) {
      return numbers.filter(number => number % 2 === 0)
    },
    say(message, event) {
      console.log(event) // eslint-disable-line
      this.message = message
    },
    handleEnter(event) {
      this.message = event.target.value
    },
    handlePageDown(event) {
      console.log(event) // eslint-disable-line
    },
  },
}
</script>

<style scoped>
.default {
  font-size: 20px;
}

.active {
  color: greenyellow;
}

.text-danger {
  color: red;
}
</style>
