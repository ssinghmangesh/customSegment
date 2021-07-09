<template>
  <div>
    <b-row>
      <graph
        v-for="(item, index) in pageDefination"
        :key="index"
        :item="item"
        :time="time"
        :filters="filters"
      />
    </b-row>
  </div>
</template>

<script>
import { BRow } from 'bootstrap-vue'
import Graph from './graph.vue'
import pageDefinitons from './pageDefinition.json'

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
    time: {
      type: String,
      default: () => '',
    },
  },
  data() {
    return {
      pageDefinitons,
    }
  },
  computed: {
    pageDefination() {
      return this.pageDefinitons[this.$route.params.type]
    },
  },
}
</script>
