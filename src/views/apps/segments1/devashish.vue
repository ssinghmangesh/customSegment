<template>
  <div>
    <b-row>
      <graph
        v-for="(item, index) in pageDefinitions"
        :key="index"
        :item="item"
        :time="time"
        :range="range"
        :filters="filters"
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
  props: {
    filters: {
      type: Object,
      default: () => {},
    },
    range: {
      type: Object,
      default: () => {},
    },
    time: {
      type: String,
      default: () => '',
    },
    pageDefinitions: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
