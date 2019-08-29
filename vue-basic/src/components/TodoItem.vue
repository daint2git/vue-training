<template>
  <li>{{ todo.text }}</li>
</template>

<script>
export default {
  name: 'TodoItem',
  props: {
    todo: Object,
  },
}
</script>
