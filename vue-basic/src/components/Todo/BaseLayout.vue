<template>
  <div>
    <div id="header">
      <slot name="header"></slot>
    </div>
    <div id="main">
      <slot></slot>
    </div>
    <div id="footer">
      <slot name="footer"></slot>
    </div>
    <div id="other">
      <slot name="other">Other</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseLayout',
}
</script>
