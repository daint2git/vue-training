<template>
  <div>
    <board id="board-1">
      <card id="card-1" draggable>card 1</card>
      <card id="card-2" draggable>card 2</card>
      <card id="card-3" draggable>card 3</card>
    </board>
    <div class="spacer" />
    <board id="board-2">
      <card id="card-4" draggable>card 4</card>
    </board>
  </div>
</template>

<script>
import Board from '@/components/Board.vue';
import Card from '@/components/Card.vue';

export default {
  name: 'Basic',
  components: {
    Board,
    Card,
  },
};
</script>

<style>
.spacer {
  width: 100px;
}
</style>
