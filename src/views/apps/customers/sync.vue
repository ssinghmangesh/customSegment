<template>
  <b-modal
    id="sync"
    title="Sync"
    centered
    :hide-footer="true"
  >
    <b-form @submit="sync">

      <b-form-group
        id="input-group-1"
        label="Integration:"
        label-for="input-1"
      >
        <b-form-select
          id="input-1"
          v-model="integration"
          :options="options"
          required
        />
      </b-form-group>

      <b-form-group
        v-if="integration === 'Mailchimp'"
        id="input-group-2"
        label="Audience:"
        label-for="input-2"
      >
        <b-form-select
          id="input-2"
          v-model="audience"
          label="label"
          :options="audiences"
          required
        />
      </b-form-group>

      <b-button
        :disabled="loading"
        @click="() => $bvModal.hide('sync')"
      >Cancel</b-button>
      <b-button
        type="submit"
        variant="primary"
        :disabled="loading"
      >Submit</b-button>
    </b-form>
  </b-modal>
</template>

<script>
/*eslint-disable*/
import { BModal, BForm, BFormGroup, BFormSelect, BButton } from 'bootstrap-vue'
import { methods } from 'vue-echarts';

export default {
    components: {
        BModal,
        BForm,
        BFormGroup,
        BFormSelect,
        BButton,
    },
    props: {
        selected: {
            type: Object,
            default: () => {},
        },
    },
    data() {
        return {
            options: [],
            loading: false,
            integration: null,
            error: false,
            audiences:[],
            audience: null,
        }
    },
    watch: {
        async selected() {
            const res = await this.$http.post('mailchimp-manager/mailchimp/fetch', {
                csSegmentId: this.selected.segment_id,
            })
            if (res.data.data.Item.mailchimp_audience_id) {
                this.audience = res.data.data.Item.mailchimp_audience_id
            }
        },
    },
    async created() {
        let res = await this.$http.post('/user-manager/workspace/fetch');
        console.log(res);
        if (res.data.data.Item.klaviyoData) {
            this.options.push('Klaviyo')
        }
        if (res.data.data.Item.mailchimpData) {
            this.options.push('Mailchimp')
        }
        res = await this.$http.post('/mailchimp-manager/audience/fetch-all');
        this.audiences = res.data.data

    },
    methods: {
        async sync(event) {
            event.preventDefault()
            this.loading = true
            try{
                if(this.integration === 'Klaviyo') {
                    await this.$http.post('klaviyo-manager/sync', {
                        segment: this.selected,
                    })
                } else if(this.integration === 'Mailchimp') {
                    await this.$http.post('/mailchimp-manager/sync', {
                        segment: this.selected,
                        audienceId: this.audience
                    })
                }
                this.$bvModal.hide('sync')
            }catch{
                this.error = true
            }
            this.loading = false
        },
    },
}
</script>
