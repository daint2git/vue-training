<template>
  <component
    :is="tag"
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
    draggable: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    dragStart() {},
    drag() {},
    dragEnd() {},
  },
};
</script>


