<template>
  <div class="container">
    <h2>Data Fetching</h2>
    <section>
      <ul class="nav">
        <li>
          <router-link to="/data-fetching/">/</router-link>
        </li>
        <li>
          <router-link to="/data-fetching/post/1">/post/1</router-link>
        </li>
        <li>
          <router-link to="/data-fetching/post/2">/post/2</router-link>
        </li>
        <li>
          <router-link to="/data-fetching/post/3">/post/3</router-link>
        </li>
      </ul>
      <div class="content">
        <router-view></router-view>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'DataFetching',
}
</script>

<style scoped>
section {
  display: flex;
}
.nav {
  background-color: greenyellow;
}
.content {
  width: 100%;
  background-color: gainsboro;
}
</style>
