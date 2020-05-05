const instance = new Vue({
  el: '#app',
  data: {
    title: 'This is title.',
    className: 'class1',
    link: {
      href: 'https://vuejs.org/',
      target: '_blank',
      content: 'vue',
    },
    number: 1,
    check: true,
  },
  methods: {
    increaseNumber(number) {
      return this.number + number;
    },
  },
});
