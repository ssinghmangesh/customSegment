<template>
  <div>
    <b-row>
      <b-col
        md="4"
        sm="6"
      >
        <klaviyo
          :connected="integrations.includes('Klaviyo')"
          @update="update"
        />
      </b-col>
      <b-col
        md="4"
        sm="6"
      >
        <mailchimp
          :connected="integrations.includes('Mailchimp')"
          @update="update"
        />
      </b-col>
      <b-col
        md="4"
        sm="6"
      >
        <drip
          :connected="integrations.includes('Drip')"
          @update="update"
        />
      </b-col>
    </b-row>
  </div>
</template>

<script>
/*eslint-disable*/
import Klaviyo from './Klaviyo.vue'
import { BRow, BCol } from 'bootstrap-vue'
import Mailchimp from './Mailchimp.vue'
import Drip from './Drip.vue'

 export default {
    components: {
        Klaviyo,
        BRow,
        BCol,
        Mailchimp,
        Drip
    },
    data() {
      return {
        integrations: [],
      }
    },
    methods: {
      async update() {
        this.integrations = []
        let res = await this.$http.post('/user-manager/workspace/fetch');
        if (res.data.data.Item.klaviyoData && Object.keys(res.data.data.Item.klaviyoData).length !== 0) {
            this.integrations = [ ...this.integrations, 'Klaviyo']
        }
        if (res.data.data.Item.mailchimpData && Object.keys(res.data.data.Item.mailchimpData).length !== 0) {
            this.integrations = [ ...this.integrations, 'Mailchimp']
        }
        if (res.data.data.Item.dripData && Object.keys(res.data.data.Item.dripData).length !== 0) {
            this.integrations = [ ...this.integrations, 'Drip']
        }
      }
    },
    created() {
      this.update()
    }
 }
 </script>