<template>
  <div class="container">
    <h1>User Settings</h1>
    <div class="main">
      <UserNavBar />
      <div class="content">
        <router-view />
        <router-view name="helper" />
      </div>
    </div>
  </div>
</template>

<script>
import UserNavBar from './UserNavBar'
export default {
  name: 'UserSettings',
  components: { UserNavBar },
}
</script>

<style scoped>
.container {
  background-color: aquamarine;
}
.main {
  display: flex;
  align-items: flex-start;
}
.content {
  padding-left: 20px;
}
</style>
