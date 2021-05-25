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
          type: 'line-area-chart',
          col: {
            default: 6,
            md: 4,
          },
        },
        {
          type: 'line-chart',
          col: {
            default: 6,
            md: 4,
          },
        },
      ]
    },
  },
}
</script>
