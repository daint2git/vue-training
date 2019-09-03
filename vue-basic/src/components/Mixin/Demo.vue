<template>
  <div>
    <h2>Demo</h2>
    <input v-focus type="text" />
  </div>
</template>

<script>
import MyMixin from './myMixin'

export default {
  name: 'MixinDemo',
  directives: {
    focus: {
      inserted(el) {
        el.focus()
      },
    },
  },
  mixins: [MyMixin],
  created() {
    console.log('MixinDemo hello') // eslint-disable-line
  },
}
</script>
