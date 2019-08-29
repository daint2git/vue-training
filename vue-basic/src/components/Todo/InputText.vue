<template>
  <input v-model="value" @input="onChange($event)" type="text" class="input" />
</template>

<script>
export default {
  name: 'InputText',
  props: {
    value: {
      type: String,
      default: '',
    },
  },
  methods: {
    onChange(event) {
      console.log(event)
      this.$emit('change', event.target.value)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../sass/variables.scss';

.input {
  width: 100%;
  padding: 8px 10px;
  border: 1px solid $blue;
}
</style>
