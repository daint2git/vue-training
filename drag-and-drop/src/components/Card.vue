<template>
  <div
    :id="id"
    class="card"
    :draggable="draggable"
    @dragstart="dragStart"
    @drag="drag"
    @dragend="dragEnd"
    @dragover.stop
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'card',
  props: {
    id: {
      type: String,
    },
    draggable: {
      type: Boolean,
    },
  },
  methods: {
    dragStart(e) {
      console.log('drag start');

      e.dataTransfer.setData('card_id', e.target.id);
    },
    drag() {
      console.log('drag'); // dragging
    },
    dragEnd() {
      console.log('drag end');
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  background-color: whitesmoke;
  color: black;
  font-size: 20px;
  line-height: 1.5;
  padding: 10px;
  margin-bottom: 20px;
}
</style>
