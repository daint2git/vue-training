<template>
  <div>
    <h2>NestedRoutes</h2>
    <h3>id {{ $route.params.id }}</h3>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'NestedRoutes',
}
</script>
