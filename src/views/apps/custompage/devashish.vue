<template>
  <div>
    <b-row>
      <graph
        v-for="(item, index) in pageDefination"
        :key="index"
        :item="item"
      />
    </b-row>
  </div>
</template>

<script>
import { BRow } from 'bootstrap-vue'
import Graph from './graph.vue'

export default {
  components: {
    Graph,
    BRow,
  },
  computed: {
    pageDefination() {
      return [
        {
          type: 'apex-donut-chart',
          col: {
            default: 12,
            md: 6,
          },
        },
      ]
    },
  },
}
</script>
