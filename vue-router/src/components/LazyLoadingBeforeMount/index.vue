<template>
  <div class="container">
    <h2>Lazy Loading Before Mount</h2>
    <section>
      <ul class="nav">
        <li>
          <router-link to="/lazy-loading-before-mount/">/</router-link>
        </li>
        <li>
          <router-link to="/lazy-loading-before-mount/async">/async</router-link>
        </li>
      </ul>
      <div class="content">
        <router-view></router-view>
      </div>
    </section>
  </div>
</template>

<script>
export const FooAsync = () =>
  new Promise(resolve => {
    setTimeout(
      () => resolve({ name: 'FooAsync', template: `<div class="foo">This is Foo</div>` }),
      2000,
    )
  })

export default {
  name: 'LazyLoadingBeforeMount',
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
