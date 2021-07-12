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
import { BToast, BCard } from 'bootstrap-vue'

export default {
  components: {
    BToast,
    BCard,
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
      return this.$store.state.segment.segments.filter(segment => segment.type === this.type)
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
