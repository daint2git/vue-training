<template>
  <ul>
    <li>
      <router-link to="/nested-named-views/settings/emails">emails</router-link>
    </li>
    <li>
      <router-link to="/nested-named-views/settings/profile">profile</router-link>
    </li>
    <li>
      <router-link to="/settings/emails-alias">emails-alias</router-link>
    </li>
    <li>
      <router-link to="/settings/profile-alias">profile-alias</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'UserNavBar',
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
  border: 1px dotted;
}
li {
  display: block;
  margin: 0 10px;
}
</style>
