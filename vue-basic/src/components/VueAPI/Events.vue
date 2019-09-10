<template>
  <div>
    <h2>Events</h2>
  </div>
</template>

<script>
export default {
  name: 'Events',
  data() {
    this.$on('test', function cb(msg) {
      console.log(msg)
    })
    this.$emit('test', 'hi')
    return {}
  },
}
</script>
