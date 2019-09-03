<template>
  <div>
    <button @click="handleClick">Kich hoat</button>
    <transition name="bounce">
      <p v-if="show">Cân đẩu vân</p>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'AnimationDemo',
  data() {
    return {
      show: false,
    }
  },
  methods: {
    handleClick() {
      this.show = !this.show
    },
  },
}
</script>

<style scoped>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
