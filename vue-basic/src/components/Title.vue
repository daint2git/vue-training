<template>
  <h2>{{ title }}</h2>
</template>

<script>
export default {
  name: 'Title',
  props: {
    title: {
      type: String,
    },
  },
}
</script>
