<template>
  <div>
    <h3>Native event</h3>
    <child @input.native="onChange" />
    <child2 @input.native="onChange" />
  </div>
</template>

<script>
import Child from './Child'
import Child2 from './Child2'

export default {
  name: 'Parent',
  components: {
    Child,
    Child2,
  },
  data() {
    return {
      value: '',
    }
  },
  methods: {
    onChange() {
      console.log('changed value')
    },
  },
}
</script>
