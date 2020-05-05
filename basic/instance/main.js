const instance = new Vue({
  el: '#app',
  data: {
    title: 'This is title.',
  },
  methods: {
    displayContent(text) {
      return `displayContent: ${text}`;
    },
  },
});

console.log(instance);
