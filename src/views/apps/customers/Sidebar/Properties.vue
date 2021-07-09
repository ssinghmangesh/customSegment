<template>
    <div>
      properties:
        <p
          v-for="(key, index) in Object.keys(data)"
          :key="index"
        >
          {{ formatter.snakeCaseToNormalText(key) }}: {{ formatter.transform({ key: key, value: data[key] }) }}
        </p>
    </div>
</template>
<script>
import formatData from '@/views/apps/customers/Helper/globalMethods'
// const formatData = require('../Helper/globalMethods')

export default {
  data() {
    return {
      formatter: formatData,
    }
  },
  props: {
    properties: {
      type: Object,
      required: true,
    },
  },
  computed: {
    data() {
      return this.properties
    },
  },
}
</script>
