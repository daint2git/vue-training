<template>
  <div class="timeline">
    <div class="header">
      <h3 class="title">title</h3>
      <div class="time">
        <span class="time-item" v-for="time in times" :key="time">{{ time }}</span>
      </div>
    </div>
    <div class="user-tasks">
      <user-task
        v-for="userTask in userTasks"
        :key="userTask.id"
        :name="userTask.name"
        :tasks="userTask.tasks"
      ></user-task>
    </div>
  </div>
</template>

<script>
import UserTask from '@/components/UserTask.vue'
import { TASKS } from '../constants'

export default {
  name: 'timeline',
  props: {
    userTasks: {
      type: Array,
      default: value => value,
    },
  },
  components: {
    UserTask,
  },
  data() {
    return {
      times: Array.from({ length: 23 }, (_, i) => `${i + 1}`.padStart(2, 0)),
      tasks: TASKS,
    }
  },
}
</script>

<style lang="scss" scoped>
.timeline {
  display: flex;
  flex-direction: column;
}

.header {
  display: flex;
  margin-bottom: 10px;
}

.title {
  width: 150px;
  background-color: white;
  border-right: 1px solid red;
  padding: 10px;
}

.time {
  width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: white;

  &-item {
    font-size: 20px;
    line-height: 1.2;
  }
}

.user-tasks {
  display: flex;
  flex-direction: column;
}
</style>
