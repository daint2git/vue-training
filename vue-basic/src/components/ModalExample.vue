<template>
  <div>
    <button @click="openModal(true)" id="show-modal">Show Modal</button>
    <!-- use the modal component, pass in the prop -->

    <modal :opened="isOpened" @close="openModal(false)">
      <!--
      you can use custom content here to overwrite
      default content
      -->
      <h3 slot="header">custom header</h3>
    </modal>
  </div>
</template>

<script>
import Modal from './Modal'

export default {
  name: 'ModalExample',
  components: {
    Modal,
  },
  data() {
    return {
      isOpened: false,
    }
  },
  methods: {
    openModal(flg) {
      this.isOpened = flg
    },
  },
}
</script>
