<template>
</template>
<script>

export default {
  props: {
    title: {
      type: String,
      require: true,
      default: () => 'Title',
    },
    data: {
      type: Array,
      default: () => [],
    },
    rangePicker: {
      type: Array,
      default: () => [],
    },
  },

}
</script>
