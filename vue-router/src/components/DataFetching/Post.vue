<template>
  <div class="post">
    <div class="loading" v-if="isLoading">Loading...</div>
    <div class="error" v-if="error">{{ error }}</div>
    <transition name="slide">
      <div v-if="post" class="content" :key="post.id">
        <h2>{{ post.title }}</h2>
        <p>{{ post.body }}</p>
      </div>
    </transition>
  </div>
</template>

<script>
import { getPostById } from './api'
export default {
  name: 'Post',
  data() {
    return {
      isLoading: false,
      error: null,
      post: null,
    }
  },
  created() {
    this.fetchData()
  },
  watch: {
    $route: 'fetchData',
  },
  methods: {
    fetchData() {
      this.error = this.post = null
      this.isLoading = true
      getPostById(this.$route.params.id, (err, post) => {
        this.isLoading = false
        if (err) {
          this.error = err.toString()
        } else {
          this.post = post
        }
      })
    },
  },
}
</script>

<style scoped>
.loading {
  position: absolute;
  top: 10px;
  right: 10px;
}
.error {
  color: red;
}
.content {
  transition: all 0.35s ease;
  position: absolute;
}
.slide-enter {
  opacity: 0;
  transform: translate(30px, 0);
}
.slide-leave-active {
  opacity: 0;
  transform: translate(-30px, 0);
}
</style>
