<template>
  <div>
    <statistics :data="statisticsItems" title="Customer counts"/>
    <!-- <line-area-chart :data="" :range="" /> -->
  </div>
</template>

<script>
import Statistics from '@/views/sharedcomponents/Statistics.vue'

export default {
  components: {
    Statistics,
  },
  computed: {
    statisticsItems() {
      return [
        {
          color: 'light-primary',
          customClass: 'mb-2 mb-xl-0',
          icon: 'TrendingUpIcon',
          subtitle: 'Sales',
          title: '2376670k',
        },
        {
          color: 'light-primary',
          customClass: 'mb-2 mb-xl-0',
          icon: 'TrendingUpIcon',
          subtitle: 'Sales',
          title: '230k',
        },
        {
          color: 'light-primary',
          customClass: 'mb-2 mb-xl-0',
          icon: 'TrendingUpIcon',
          subtitle: 'Sales',
          title: '230k',
        },
        {
          color: 'light-primary',
          customClass: 'mb-2 mb-xl-0',
          icon: 'TrendingUpIcon',
          subtitle: 'Sales',
          title: '230k',
        },
      ]
    },
  },
}
</script>
