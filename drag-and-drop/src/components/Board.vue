<template>
  <div
    :id="id"
    class="board"
    @dragenter.prevent="dragenter"
    @dragover.prevent="dragover"
    @dragleave.prevent="dragleave"
    @drop.prevent="drop"
  >
    <slot />
  </div>
</template>

<script>
import { log } from './utils';
export default {
  name: 'board',
  props: {
    id: {
      type: String,
    },
  },
  methods: {
    drop(e) {
      log('drop');

      const card_id = e.dataTransfer.getData('card_id');
      const card = document.getElementById(card_id);

      e.target.appendChild(card);
    },
    dragenter() {
      log('dragenter', 'red');
    },
    dragover() {
      log('dragover', 'green');
    },
    dragleave() {
      log('dragleave', 'blue');
    },
  },
};
</script>

<style lang="scss" scoped>
.board {
  width: 250px;
  height: 100vh;
  background-color: darkgrey;
  border: 1px solid violet;
  padding: 5px;
}
</style>
