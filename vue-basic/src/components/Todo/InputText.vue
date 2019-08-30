<template>
  <input :value="value" v-on="listeners" type="text" class="input" />
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
  computed: {
    listeners() {
      return {
        // Pass all component listeners directly to input
        ...this.$listeners,
        // Override input listener to work with v-model
        input: event => {
          this.$emit('input', event.target.value)
        },
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/sass/variables.scss';

.input {
  width: 50%;
  padding: 8px 10px;
  border: 1px solid $blue;
}
</style>
