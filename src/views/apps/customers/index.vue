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
          />
        </b-tab>
        <b-tab title="Graphs">
          <graphs
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
    }
  },
  methods: {
    updateTable(data) {
      this.filters = { ...data }
    },
  },
}
</script>

<style lang="scss" >
@import '@core/scss/vue/libs/vue-good-table.scss';
</style>
