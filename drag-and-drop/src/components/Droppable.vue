<template>
  <component :is="tag" @dragover.prevent @drop.prevent="drop">
    <slot />
  </component>
</template>

<script>
export default {
  name: 'droppable',
  props: {
    tag: {
      type: String,
      default: 'div',
    },
  },
  methods: {
    drop() {
      // this.$emit('drop', )
    },
  },
};
</script>


