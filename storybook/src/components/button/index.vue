<template>
  <button class="root">{{ text }}: <slot></slot></button>
</template>

<script>
export default {
  name: 'custom-button',
  data() {
    return {
      text: 'xxx',
    };
  },
};
</script>

<style lang="scss">
.root {
  font-size: 20px;
}
</style>
