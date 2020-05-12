<template>
  <component
    :is="tag"
    @drop.prevent="onDrop"
    @dragover.prevent="dragover"
    @dragleave.prevent="dragleave"
  >
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
    onDrop(e) {
      this.$emit('drop', e.dataTransfer.getData('id'));
      e.dataTransfer.clearData();
    },
    dragover(e) {
      e.target.style.border = '1px dotted';
    },
    dragleave(e) {
      e.target.style.border = 'initial';
    },
  },
};
</script>
