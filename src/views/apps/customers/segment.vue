<template>
    <div class="segment">
      <b-button
        v-for="(segment, index) in segments"
        :key="index"
        variant="primary"
        @click="() => select(segment.filters)"
        class="title"
      >
          {{ segment.title }}
      </b-button>
    </div>
</template>

<script>
import {
  BButton,
//    BCardText, BFormGroup, BModal, BButton,
  // BFormInput,
} from 'bootstrap-vue'
// import vSelect from 'vue-select'
// // import store from '@/store/index'
// import TypeHandler from './TypeHandler/TypeHandler.vue'
// import SelectedFilters from './SelectedFilters/SelectedFilters.vue'
// import searchOption from './filters.json'

export default {
  components: {
    // BCardText,
    // BFormGroup,
    // // BFormInput,
    // vSelect,
    // BModal,
    // TypeHandler,
    // SelectedFilters,
    BButton,
  },
  props: {
    segment: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    segments() {
      return this.$store.state.segment.segments
    },
  },
  watch: {
  },
  //   async created() {
  //   },
  methods: {
    select(val) {
      this.$emit('select', val)
    },
  },
  created() {
    // console.log(this.$store.state.segment.segments)
  },
}
</script>
<style lang="scss" >
.segment{
    margin-top: 70px;
}
.title{
    margin-right: 5px;
}
</style>
