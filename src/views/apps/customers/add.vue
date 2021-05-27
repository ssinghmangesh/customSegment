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
      <b-form-group>
        <v-select
          v-model="searchQuery"
          :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
          label="title"
          :options="searchOption"
          class="select-size-lg"
        />
      </b-form-group>
      <b-modal
        id="modal-center"
        ref="my-modal"
        centered
        :title="searchQuery"
        ok-only
        ok-title="Save"
      >
      <type-handler
        :selected-filter=""
      />
      </b-modal>
      <!-- <b-form-input
        id="input-lg"
        size="lg"
        v-model="searchQuery"
        placeholder="Search"
      /> -->

    </b-card-text>
  </b-card>
</template>

<script>
import {
  BCard, BCardText, BFormGroup, BModal, BFormInput,
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
    BModal,
  },
  data() {
    return {
      andOr: 'And',
      andOrOption: ['And', 'Or'],
      incEcl: 'Include',
      incEclOption: ['Include', 'Exclude'],
      searchQuery: '',
      searchOption: [{
        name: 'total_spent',
        type: 'number',
      },
      {
        name: 'email',
        type: 'text',
      },
      {
        name: 'accepts_marketing',
        type: 'boolean',
      },
      {
        name: 'cancel_reason',
        type: 'dropdown',
      },
      ],
      query: 'Exactly',
      queryOption: ['Exactly', 'Greater than', 'Less than'],
      value: null,
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
  watch: {
    searchQuery(val) {
      if (val) {
        this.$refs['my-modal'].show()
      }
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
