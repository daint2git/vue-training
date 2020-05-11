<template>
  <div class="user-task">
    <div class="name">{{ name }}</div>
    <droppable class="tasks">
      <div
        class="task"
        v-for="task in tasks"
        :key="task.id"
        :style="computedTaskStyle(task.start, task.end)"
      >
        <p>{{ task.name }}</p>
        <p>time: {{ task.start }} - {{ task.end }}</p>
      </div>
    </droppable>
  </div>
</template>

<script>
import Droppable from '@/components/Droppable.vue'

export default {
  name: 'user-task',
  props: {
    name: {
      type: String,
      required: true,
    },
    tasks: {
      type: Array,
      required: true,
    },
  },
  components: {
    Droppable,
  },
  methods: {
    computedTaskStyle(start, end) {
      return {
        width: `${(end - start) * 50}px`,
        left: `${start * 50}px`,
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.user-task {
  display: flex;
  align-content: center;
  height: 80px;
  margin-bottom: 10px;
  background-color: white;
}

.name {
  width: 150px;
  padding: 15px;
  color: brown;
  background-color: white;
  border-right: 1px solid red;
}

.tasks {
  position: relative;
  display: flex;
  align-items: center;
  flex: 1;

  .task {
    position: absolute;
    padding: 10px;
    background-color: khaki;
    color: violet;
    border: 1px solid;
  }
}
</style>
