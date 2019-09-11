<template>
  <div>
    NamedViews
    <router-view class="view one"></router-view>
    <router-view class="view two" name="a"></router-view>
    <router-view class="view three" name="b"></router-view>
  </div>
</template>

<script>
export default {
  name: 'NamedViews',
}
</script>

<style scoped>
.view {
  font-size: 20px;
}

.one {
  color: red;
}
.two {
  color: blue;
}
.three {
  color: green;
}
</style>
