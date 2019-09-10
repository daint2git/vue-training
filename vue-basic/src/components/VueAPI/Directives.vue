<template>
  <div>
    <!-- v-text -->
    <span v-text="msg"></span>
    <span>{{ msg }}</span>

    <!-- v-html -->
    <p>Sử dụng cú pháp mustache: {{ rawHtml }}</p>
    <p>
      Sử dụng directive v-html:
      <span v-html="rawHtml"></span>
    </p>

    <!-- v-show -->
    <h1 v-show="isShow">Xin chào!</h1>
    <button @click="toggle">toggle with v-show</button>

    <!-- v-event.native -->
    <Parent></Parent>

    <!-- .lazy -->
    <div>
      <label>
        without .sync
        <input v-model="text" />
      </label>
      <br />
      <label>
        with .sync
        <input v-model.lazy="text" />
      </label>
      <br />Text is
      <span style="color: 'red'">{{ text }}</span>
      <br />
      <span v-once>This will never change: {{ text }}</span>
      <br />
      <input v-model.number="age" type="number" />
    </div>

    <!-- v-pre -->
    <span v-pre>{{ this will not be compiled }}</span>
  </div>
</template>

<script>
import Parent from './NativeEvent/Parent'

export default {
  name: 'Directives',
  components: {
    Parent,
  },
  data() {
    return {
      msg: 'Hello',

      rawHtml: `<span style="color: red">This is 🤗</span>`,

      isShow: true,

      text: 'example text',
      age: 26,
    }
  },
  methods: {
    toggle() {
      this.isShow = !this.isShow
    },
  },
}
</script>
