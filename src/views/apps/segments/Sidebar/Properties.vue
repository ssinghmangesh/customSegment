<template>
  <b-card
    border-variant="secondary"
    bg-variant="transparent"
    class="shadow-none"
  >
    <b-card-text>
      <div
        v-for="(key, index) in Object.keys(data)"
        :key="index"
        class="d-flex justify-content-between"
      >
        <span>{{ formatter.snakeCaseToNormalText(key) }}:</span>
        <span><strong>{{ formatter.transform({ key: key, value: data[key] }) }}</strong></span>
      </div>
    </b-card-text>
  </b-card>
</template>
<script>
import {
  BCard,
  BCardText,
} from 'bootstrap-vue'
import formatData from '@/views/apps/segments/Helper/formatData'
// const formatData = require('../Helper/formData')

export default {
  components: {
    BCard,
    BCardText,
  },
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
