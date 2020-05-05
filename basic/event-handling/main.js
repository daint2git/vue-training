const instance = new Vue({
  el: '#app',
  data: {
    count: 0,
    mouse: {
      x: 0,
      y: 0,
    },
  },
  methods: {
    increaseCount() {
      this.count += 1;
    },
    increaseCountBy(event, num) {
      console.log(event);
      this.count += num;
    },
    decreaseCount() {
      this.count -= 1;
    },
    handleMouseMove(event) {
      this.mouse = {
        x: event.clientX,
        y: event.clientY,
      };
    },
    handleFormSubmit(event) {
      console.log('submitted', event);
    },
    handleKeyup(event) {
      console.log('keyup', event);
    },
  },
});
