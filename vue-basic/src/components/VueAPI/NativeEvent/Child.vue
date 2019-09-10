<template>
  <input v-model="value" type="text" />
</template>

<script>
export default {
  name: 'Child',
  data() {
    return {
      value: '',
    }
  },
}
</script>
