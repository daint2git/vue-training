<template>
  <div>
    WithParams
    <p>{{ $route.params }}</p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'WithParams',
  beforeRouteEnter(to, from, next) {
    console.log('beforeRouteEnter')
    next()
  },
  beforeRouteUpdate(to, from, next) {
    console.log('beforeRouteUpdate')
    next()
  },
  beforeRouteLeave(to, from, next) {
    console.log('beforeRouteLeave')
    next()
  },
}
</script>
