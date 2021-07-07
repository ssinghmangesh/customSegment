<template>
  <div>
    <add-recommendation
      :customer-id="customerId"
    />
    <div>
      Product Recommendations:
    </div>
    <!-- <p
      v-for="(key, index) in product.data.data"
      :key="index"
    >
      {{ key }}:  {{ product.data.data[key] }}
    </p> -->
    <b-button
      variant="primary"
      class="mt-2"
      @click="() => $bvModal.show('recommendation-modal')"
    >
      Add Recommendation
    </b-button>
  </div>
</template>
<script>
import { BButton } from 'bootstrap-vue'
import AddRecommendation from './AddRecommendation.vue'

export default {
  components: {
    BButton,
    AddRecommendation,
  },
  props: {
    recommendations: {
      type: Object,
      required: true,
    },
    customerId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      product: [],
    }
  },
  watch: {
    recommendations(val) {
      if (val && val.id) {
        this.update()
      }
    },
  },
  methods: {
    async update() {
      this.product = await this.$http.post('/product-recommendations-manager/recommendations', { customerId: this.recommendations.id })
    },
  },
}
</script>
