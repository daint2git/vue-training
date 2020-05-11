<template>
  <div id="app">
    <timeline :userTasks="userTasks"></timeline>
    <div class="side-spacer" />
    <task-board :tasks="tasks" />
  </div>
</template>

<script>
import Timeline from '@/components/Timeline.vue'
import TaskBoard from '@/components/TaskBoard.vue'
import { USER_TASKS, TASKS } from './constants'

export default {
  name: 'App',
  components: {
    Timeline,
    TaskBoard,
  },
  data() {
    return {
      userTasks: USER_TASKS,
      tasks: TASKS,
    }
  },
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: darkgrey;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
}

.side-spacer {
  width: 50px;
}
</style>
