<template>
  <b-card class="mb-4">
    <b-card-text>
      <b-form-group>
        <v-select
          v-model="andOr"
          :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
          label="title"
          :options="andOrOption"
          class="select-size-lg"
        />
      </b-form-group>
      <b-form-group>
        <v-select
          v-model="incEcl"
          :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
          label="title"
          :options="incEclOption"
          class="select-size-lg"
        />
      </b-form-group>

      <b-form-input
        id="input-lg"
        size="lg"
        v-model="searchQuery"
        placeholder="Search"
      />

    </b-card-text>
  </b-card>
</template>

<script>
import {
  BCard, BCardText, BFormGroup, BFormInput,
} from 'bootstrap-vue'
import vSelect from 'vue-select'
import store from '@/store/index'

export default {
  components: {
    BCard,
    BCardText,
    BFormGroup,
    BFormInput,
    vSelect,
  },
  data() {
    return {
      andOr: 'And',
      andOrOption: ['And', 'Or'],
      incEcl: 'Include',
      incEclOption: ['Include', 'Exclude'],
      searchQuery: '',
    }
  },
  computed: {
    statusVariant() {
      const statusColor = {
        /* eslint-disable key-spacing */
        Current      : 'light-primary',
        Professional : 'light-success',
        Rejected     : 'light-danger',
        Resigned     : 'light-warning',
        Applied      : 'light-info',
        /* eslint-enable key-spacing */
      }

      return status => statusColor[status]
    },
    direction() {
      if (store.state.appConfig.isRTL) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.dir = true
        return this.dir
      }
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.dir = false
      return this.dir
    },
  },
  created() {
    this.$http.get('/good-table/basic')
      .then(res => { this.rows = res.data })
  },
}
</script>
<style lang="scss" >
@import '@core/scss/vue/libs/vue-good-table.scss';
</style>
