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
      <router-link to="/é/ñ">/é/ñ</router-link>
    </li>
    <li>
      <router-link to="/é/ñ?t=%25ñ">/é/ñ?t=%ñ</router-link>
    </li>
    <li>
      <router-link to="/é/ñ#é">/é/ñ#é</router-link>
    </li>
    <li>
      <router-link to="/with-params/999">/with-params/999</router-link>
    </li>
    <router-link to="/with-params/999" v-slot="props">
      <li :class="[props.isActive && 'active', props.isExactActive && 'exact-active']">
        <a :href="props.href" @click="props.navigate">{{ props.route.path }} (with v-slot).</a>
      </li>
    </router-link>
    <li>
      <router-link to="/with-params/999" replace>/with-params/999 (with replace).</router-link>
    </li>
    <li>
      <router-link to="/with-params/999" tag="div">/with-params/999 (with tag div).</router-link>
    </li>
    <li>
      <router-link to="/with-params/999" exact>/with-params/999 (with exact).</router-link>
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
    <li>
      <router-link to="/data-fetching">/data-fetching</router-link>
    </li>
    <li>
      <router-link to="/lazy-loading-before-mount">/lazy-loading-before-mount</router-link>
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
.active {
  background-color: gold;
}
.exact-active {
  background-color: silver;
}

a.router-link-active {
  color: #f66;
}
li.router-link-active a {
  color: #f66;
}
</style>
