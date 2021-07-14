<template>
  <div>
    <add
      :segment="segment"
      @updateTable="updateTable"
    />
    <b-card>
      <b-tabs v-model="tabIndex">
        <b-tab title="Stats">
          <graphs
            :time="time"
            :filters="filters"
            :page-definitions="stats"
          />
        </b-tab>
        <b-tab title="Raw Data">
          <custom-table
            :filters="filters"
            :time="time"
            @applyTimer="applyTimer"
          />
        </b-tab>
        <b-tab title="Graph">
          <graphs
            :time="time"
            :filters="filters"
            :page-definitions="graphs"
          />
        </b-tab>

        <b-tab title="Segment">
          <segment
            :time="time"
            @select="select"
          />
        </b-tab>
      </b-tabs>
    </b-card>
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
  methods: {
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
