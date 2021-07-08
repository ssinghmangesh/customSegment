<template>
  <div>
    <add
      @updateTable="updateTable"
    />
    <b-card>
      <b-tabs>
        <b-tab title="Table">
          <custom-table
            :filters="filters"
            :time="time"
            @applyTimer="applyTimer"
          />
        </b-tab>
        <b-tab title="Graphs">
          <graphs
            :time="time"
            :filters="filters"
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

export default {
  components: {
    // BCard,
    Graphs,
    add,
    BTabs,
    BTab,
    CustomTable,
  },
  data() {
    return {
      filters: {},
      time: localStorage.getItem(`${this.$route.params.type}timer`),
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
  },
}
</script>

<style lang="scss" >
@import '@core/scss/vue/libs/vue-good-table.scss';
</style>
