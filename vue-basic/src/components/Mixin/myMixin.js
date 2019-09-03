export default {
  created() {
    this.hello()
  },
  methods: {
    hello() {
      console.log('Mixin hello') // eslint-disable-line
    },
  },
}
