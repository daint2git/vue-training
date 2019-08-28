<template>
  <button @click="onClick">
    {{ text }}
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'ButtonDemo',
  // props: ['text'],
  props: {
    text: {
      type: String,
      default: 'This is default',
    },
  },
  methods: {
    onClick() {
      this.$emit('change-text', 0.2)
    },
  },
}
</script>
