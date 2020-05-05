<template>
  <button :class="classNames">
    {{ text }}
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'MyButton',
  props: {
    color: {
      validator(value) {
        return ['red', 'green', 'blue'].includes(value);
      },
      default: 'red',
    },
  },
  data() {
    return {
      text: 'default text',
    };
  },
  computed: {
    classNames() {
      return ['root', this.color];
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/sass/_variables.scss';

.root {
  font-size: 20px;
}

.red {
  color: $red;
}

.green {
  color: $green;
}

.blue {
  color: $blue;
}
</style>
