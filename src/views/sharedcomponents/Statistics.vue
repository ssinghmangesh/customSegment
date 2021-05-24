<template>
  <EcommerceStatistics
    :title="title"
    :data="data"
  />
</template>
<script>
import EcommerceStatistics from '@/views/dashboard/ecommerce/EcommerceStatistics.vue'

export default {
  components: {
    EcommerceStatistics,
  },
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
  },

}
</script>
