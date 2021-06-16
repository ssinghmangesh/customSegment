<template>
  <div class="segment">
    <div
      v-for="(segment, index) in segments"
      :key="index"
      class="segment-div"
    >
      <b-button
        v-if="segment.type === type"
        variant="primary"
        @click="() => select(segment.filters)"
      >
        {{ segment.title }}
      </b-button>
    </div>
  </div>
</template>

<script>
import {
  BButton,
} from 'bootstrap-vue'

export default {
  components: {
    BButton,
  },
  computed: {
    type() {
      return this.$route.params.type
    },
    segments() {
      return this.$store.state.segment.segments
    },
  },
  methods: {
    select(val) {
      this.$emit('select', val)
    },
  },
}
</script>
<style lang="scss" >
.segment{
    margin-top: 70px;
}
.segment-div{
  display: inline-block;
  margin-right: 5px;
  margin-bottom: 5px;
}
</style>
