<template>
  <div>
    <b-row>
      <b-col
        cols="3"
      >
        <klaviyo
          :connected="integrations.includes('Klaviyo')"
          @update="update"
        />
      </b-col>
      <b-col
        cols="3"
      >
        <mailchimp
          :connected="integrations.includes('Mailchimp')"
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

 export default {
    components: {
        Klaviyo,
        BRow,
        BCol,
        Mailchimp,
    },
    data() {
      return {
        integrations: [],
      }
    },
    methods: {
      async update() {
        let res = await this.$http.post('/user-manager/workspace/fetch');
        if (res.data.data.Item.klaviyoData) {
            this.integrations.push('Klaviyo')
        }
        if (res.data.data.Item.mailchimpData) {
            this.integrations.push('Mailchimp')
        }
      }
    },
    created() {
      this.update()
    }
 }
 </script>