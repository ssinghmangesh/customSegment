<template>
  <div>
    <add
      :segment="segment"
      @updateTable="updateTable"
      @updateRange="updateRange"
    />
    <b-tabs v-model="tabIndex">
      <b-tab title="STATS">
        <graphs
          :time="time"
          :range="range"
          :filters="filters"
          :page-definitions="stats"
        />
      </b-tab>
      <b-tab title="SEGMENT">
        <segment
          :time="time"
          :range="range"
          @select="select"
        />
      </b-tab>
      <b-tab title="TABLE">
        <custom-table
          :filters="filters"
          :time="time"
          :range="range"
          @applyTimer="applyTimer"
        />
      </b-tab>
      <b-tab title="GRAPH">
        <graphs
          :time="time"
          :filters="filters"
          :range="range"
          :page-definitions="graphs"
        />
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import {
  BTabs, BTab,
  // BCard,
} from 'bootstrap-vue'
import Graphs from '@/views/apps/custompage/devashish.vue'
import add from './add.vue'
import CustomTable from './Table.vue'
import Segment from './segment.vue'
import { pageDefination } from './PageDefination/index'

export default {
  components: {
    // BCard,
    Graphs,
    Segment,
    add,
    BTabs,
    BTab,
    CustomTable,
  },
  data() {
    return {
      filters: {},
      range: {},
      tabIndex: 0,
      time: localStorage.getItem(`${this.$route.params.type}timer`),
      segment: null,
      graphs: pageDefination[this.$route.params.type].graphs,
      stats: pageDefination[this.$route.params.type].stats,
    }
  },
  computed: {
    type() {
      return this.$route.params.type
    },
  },
  watch: {
    type() {
      this.time = localStorage.getItem(`${this.type}timer`)
      this.graphs = pageDefination[this.$route.params.type].graphs
      this.stats = pageDefination[this.$route.params.type].stats
    },
  },
  created() {
    const today = new Date()
    const priorDate = new Date().setDate(today.getDate() - 30)
    this.range = {
      startdate: new Date(priorDate).toISOString(),
      enddate: today.toISOString(),
    }
  },
  methods: {
    updateRange(data) {
      this.range = { ...data }
    },
    updateTable(data) {
      this.filters = { ...data }
    },
    applyTimer(val) {
      this.time = val
      if (val) {
        localStorage.setItem(`${this.type}timer`, val)
      }
    },
    select(val) {
      this.segment = { ...val }
      this.tabIndex = 0
    },
  },
}
</script>

<style lang="scss" >
@import '@core/scss/vue/libs/vue-good-table.scss';
</style>
