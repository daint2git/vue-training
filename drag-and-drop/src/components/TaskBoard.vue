<template>
  <div class="task-board">
    <draggable
      tag="div"
      class="task"
      v-for="task in tasks"
      :id="JSON.stringify(task)"
      :key="task.id"
      @start="handleStart"
      @end="handleEnd"
    >
      <p>{{ task.name }}</p>
      <p>time: {{ task.start }} - {{ task.end }}</p>
    </draggable>
  </div>
</template>

<script>
import Draggable from '@/components/Draggable.vue';

export default {
  name: 'task-board',
  props: {
    tasks: {
      type: Array,
      required: true,
    },
  },
  components: {
    Draggable,
  },
  methods: {
    handleStart() {},
    handleEnd(task) {
      const { id: taskId } = JSON.parse(task);
      this.tasks = this.tasks.filter(task => task.id !== taskId);
    },
  },
};
</script>

<style lang="scss" scoped>
.task-board {
  width: 250px;
  height: calc(100vh - 50px);
  background-color: gray;
  border: 1px solid violet;
  padding: 5px;

  .task {
    background-color: whitesmoke;
    color: black;
    font-size: 20px;
    line-height: 1.5;
    padding: 10px;
    margin-bottom: 20px;
  }
}
</style>
