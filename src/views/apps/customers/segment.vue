<template>
  <b-card class="mb-4">
    kl
  </b-card>
</template>

<script>
import {
  BCard,
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
    BCard,
    // BCardText,
    // BFormGroup,
    // // BFormInput,
    // vSelect,
    // BModal,
    // TypeHandler,
    // SelectedFilters,
    // BButton,
  },
  props: {
    segment: {
      type: Array,
      default: () => [],
    },
  },
  data() {
  },
  computed: {
  },
  watch: {
  },
  //   async created() {
  //   },
  methods: {
  },
}
</script>
<style lang="scss" >
@import '@core/scss/vue/libs/vue-good-table.scss';
</style>
