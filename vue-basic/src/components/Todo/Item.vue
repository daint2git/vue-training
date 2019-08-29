<template>
  <li>
    {{ todo.text }}
    <button @click="onClick(todo.id)">X</button>
  </li>
</template>

<script>
export default {
  name: 'Item',
  props: {
    todo: {
      type: Object,
      default: () => {},
      required: true,
    },
  },
  methods: {
    onClick(id) {
      this.$emit('remove', id)
    },
  },
}
</script>
