<template>
<!-- eslint-disable -->
    <div>
        <graphs
          :page-definitions="definitions"
        />
    </div>
</template>

<script>
/* eslint-disable */
import Graphs from '@/views/apps/custompage/devashish.vue'
import stats from './stats.json'

export default {
    components: {
        Graphs
    },
    computed: {
        definitions() {
            return stats
        }
    }
}
</script>

{
        "type": "statistics",
        "title": "Active Visitors",
        "col": {
          "default": 12,
          "md": 12
        },
        "data": {
            "table": "event",
            "statsDefinition": [
              {
                "columnname": "distinct page_id",
                "aggregate": "count",
                "alias": "visited_today",
                "aggcolumnname": "created_at",
                "operator": "7",
                "value": "2021-07-31T07:22:59.000Z"
              },
              {
                "columnname": "distinct page_id",
                "aggregate": "count",
                "alias": "visited_this_week",
                "aggcolumnname": "created_at",
                "operator": "7",
                "value": "2021-07-31T07:22:59.000Z"
              },
              {
                "columnname": "distinct page_id",
                "aggregate": "count",
                "alias": "visited_this_month",
                "aggcolumnname": "created_at",
                "operator": "7",
                "value": "2021-07-31T07:22:59.000Z"
              }
            ]
          }
    },