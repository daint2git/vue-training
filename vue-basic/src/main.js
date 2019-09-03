// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import TodoItem from '@/components/TodoItem'

import App from './App'
import router from './router'

Vue.component(TodoItem.name, TodoItem)

Vue.config.productionTip = false

const Root = new Vue({
  router,
  components: { App },
  data: {
    foo: 1,
  },
  computed: {
    bar() {
      console.log('this is bar') // eslint-disable-line
      return null
    },
  },
  methods: {
    baz() {
      console.log('this is baz') // eslint-disable-line
    },
  },
  template: '<App/>',
})

Root.$mount('#app')
