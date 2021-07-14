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
        <div class="d-flex justify-content-end">
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
        </div>
        <graph
          :item="statsDefinitions"
          :time="time"
          :filters="segment.filters"
        />
      </app-collapse-item>
    </app-collapse>
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
import Graph from '@/views/apps/custompage/graph.vue'
import { pageDefination } from './PageDefination/index'

export default {
  components: {
    BToast,
    BCard,
    AppCollapse,
    AppCollapseItem,
    BButton,
    Graph,
  },
  props: {
    time: {
      type: String,
      default: () => null,
    },
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
    statsDefinitions() {
      return pageDefination[this.type].stats[0]
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
