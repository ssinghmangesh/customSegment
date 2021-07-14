<template>
  <b-card
    v-if="segments && segments.length"
  >
    <b-modal
      id="modal-center"
      ref="delete-segment"
      centered
      title="Delete Segment"
      @hide="removeSegmentId"
      @ok="deleteSegment"
    >
      Please confirm that you want to delete this segment.
    </b-modal>
    <app-collapse accordion>
      <app-collapse-item
        v-for="(segment, index) in segments"
        :key="index"
        :title="segment.title"
      >
        Cheesecake cotton candy bonbon muffin cupcake tiramisu croissant. Tootsie roll sweet candy bear claw chupa chups lollipop toffee. Macaroon donut liquorice powder candy carrot cake macaroon fruitcake. Cookie toffee lollipop cotton candy ice cream dragée soufflé. Cake tiramisu lollipop wafer pie soufflé dessert tart. Biscuit ice cream pie apple pie topping oat cake dessert. Soufflé icing caramels. Chocolate cake icing ice cream macaroon pie cheesecake liquorice apple pie.
        <b-button
          v-if="!segment.default"
          class="mr-1"
          variant="danger"
          @click="() => openModal(segment.segment_id)"
        >
          Delete Segment
        </b-button>
        <b-button
          variant="primary"
          @click="() => select(segment.filters)"
        >
          Apply Filter
        </b-button>
      </app-collapse-item>
    </app-collapse>
    <div
      v-for="(segment, index) in segments"
      :key="index"
      class="segment-div border border-dark px-1 rounded"
    >
      <span
        role="button"
        @click="() => select(segment.filters)"
      >{{ segment.title }}</span>
      <feather-icon
        v-if="!segment.default"
        class="cancel"
        icon="XIcon"
        @click="() => openModal(segment.segment_id)"
      />
      <!-- <b-button
        v-if="segment.type === type"
        variant="primary"
        @click="() => select(segment.filters)"
      >
        {{ segment.title }}
      </b-button> -->
    </div>
    <b-toast
      id="segment-toast"
      @hidden="hidden">
      <span>{{ error }}</span>
    </b-toast>
  </b-card>
</template>

<script>
import { BToast, BCard, BButton } from 'bootstrap-vue'
import AppCollapse from '@core/components/app-collapse/AppCollapse.vue'
import AppCollapseItem from '@core/components/app-collapse/AppCollapseItem.vue'
import { pageDefination } from './PageDefination/index'

export default {
  components: {
    BToast,
    BCard,
    AppCollapse,
    AppCollapseItem,
    BButton,
  },
  data() {
    return {
      segmentId: '',
    }
  },
  computed: {
    type() {
      return this.$route.params.type
    },
    segments() {
      const defaultSegments = pageDefination[this.type].segments
      return [...defaultSegments, ...this.$store.state.segment.segments.filter(segment => segment.type === this.type)]
    },
    error() {
      return this.$store.state.segment.error
    },
  },
  watch: {
    error(val) {
      if (val) {
        this.$bvToast.show('segment-toast')
      }
    },
  },
  methods: {
    hidden() {
      this.$store.commit('segment/clearError')
    },
    select(val) {
      this.$emit('select', val)
    },
    openModal(val) {
      this.segmentId = val
      this.$refs['delete-segment'].show()
    },
    deleteSegment() {
      this.$store.commit('segment/deleteSegment', this.segmentId)
    },
    removeSegmentId() {
      this.segmentId = ''
    },
  },
}
</script>
<style lang="scss" >
.segment-div{
  display: inline-block;
  margin-right: 5px;
  margin-bottom: 5px;
}
</style>
