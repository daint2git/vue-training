<template>
  <ul>
    <li>
      <router-link to="/">/</router-link>
    </li>
    <li>
      <router-link to="/foo">/foo</router-link>
    </li>
    <li>
      <router-link to="/bar">/bar</router-link>
    </li>
    <li>
      <router-link to="/é">/é</router-link>
    </li>
    <li>
      <router-link to="/é?t=%25ñ">/é?t=%25ñ</router-link>
    </li>
    <li>
      <router-link to="/é#%25ñ">/é#%25ñ</router-link>
    </li>
    <li>
      <router-link to="/with-params/999">/with-params/999</router-link>
    </li>
    <li>
      <router-link :to="{ name: 'WithParams', params: { id: 999 } }">/with-params/999</router-link>
    </li>
    <li>
      <router-link :to="{ path: '/with-params/999' }">/with-params/999</router-link>
    </li>
    <li>
      <router-link to="/with-params/888">/with-params/888</router-link>
    </li>
    <li>
      <router-link to="/with-params/999/post/abc">/with-params/999/post/abc</router-link>
    </li>
    <li>
      <router-link to="/nested-routes/999">/nested-routes/999</router-link>
    </li>
    <li>
      <router-link to="/nested-routes/999/child1">/nested-routes/999/child1</router-link>
    </li>
    <li>
      <router-link to="/nested-routes/999/child2">/nested-routes/999/child2</router-link>
    </li>
    <li>
      <router-link to="/named-views">/named-views</router-link>
    </li>
    <li>
      <router-link to="/named-views/multiple">/named-views/multiple</router-link>
    </li>
    <li>
      <router-link to="/nested-named-views/settings">/nested-named-views/settings</router-link>
    </li>
    <li>
      <router-link to="/route-props">/route-props</router-link>
    </li>
    <li>
      <router-link to="/test">/test</router-link>
    </li>
    <li>
      <router-link to="/notfound">/notfound</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Menu',
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: block;
  margin: 0 10px;
}
</style>
