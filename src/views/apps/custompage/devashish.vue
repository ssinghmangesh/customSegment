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
          title: 'Financial Status',
          col: {
            default: 12,
            md: 4,
          },
          data: {
            table: 'order',
            workspaceId: 1,
            columnname: 'financial_status',
            startdate: '2000-01-01 11:49:40.765997+05:30',
            enddate: '2021-05-13 11:49:40.765997+05:30',
          },
        },
        {
          type: 'apex-line-chart',
          title: 'Revenue',
          graphCatergory: 'bar',
          col: {
            default: 12,
            md: 8,
          },
          // eslint-disable-next-line
          curve: "straight",
          data: {
            table: 'order',
            workspaceId: 1,
            columnname: 'total_price',
            startdate: '2000-01-01 11:49:40.765997+05:30',
            enddate: '2021-05-13 11:49:40.765997+05:30',
          },
        },
        {
          type: 'apex-donut-chart',
          title: 'Fulfillment Status',
          col: {
            default: 12,
            md: 4,
          },
          data: {
            table: 'order',
            workspaceId: 1,
            columnname: 'fulfillment_status',
            startdate: '2000-01-01 11:49:40.765997+05:30',
            enddate: '2021-05-13 11:49:40.765997+05:30',
          },
        },
      ]
    },
  },
}
</script>
