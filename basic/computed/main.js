const instance = new Vue({
  el: '#app',
  data: {
    message: 'Hello',
    a: 0,
    b: 0,
    step: 1,
  },
  methods: {},
  computed: {
    reverseMessage() {
      return this.message.split('').reverse().join('');
    },
    addA() {
      console.log('addA');
      return this.a + this.step;
    },
    addB() {
      console.log('addB');
      return this.b + this.step;
    },
  },
});
