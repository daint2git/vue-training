<template>
  <component
    :is="tag"
    :id="id"
    :draggable="draggable"
    @dragstart="dragStart"
    @drag="drag"
    @dragend="dragEnd"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: 'draggable',
  props: {
    tag: {
      type: String,
      default: 'div',
    },
    id: {
      type: String,
      required: true,
    },
    draggable: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    dragStart(e) {
      e.dataTransfer.setData('id', e.target.id);
      this.$emit('start');
    },
    drag() {},
    dragEnd(e) {
      this.$emit('end', e.target.id);
    },
  },
};
</script>
