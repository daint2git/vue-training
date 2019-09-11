<template>
  <div>RoutePropsChild Hello {{ name }} {{ $attrs }}</div>
</template>

<script>
export default {
  name: 'RoutePropsChild',
  props: {
    name: {
      type: String,
      default: 'Vue!',
    },
  },
}
</script>
