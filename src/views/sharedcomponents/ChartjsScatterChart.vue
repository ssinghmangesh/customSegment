<template>
  
</template>

<script>
import { Scatter } from 'vue-chartjs'

export default {
  components: {
    
  },
  extends: Scatter,
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
    options: {
      type: Object,
      default: null,
    },
  },

}
</script>
