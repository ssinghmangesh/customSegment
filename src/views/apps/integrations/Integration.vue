<template>
  <div>
    <b-row>
      <b-col
        cols="3"
      >
        <klaviyo />
      </b-col>
      <b-col
        cols="3"
      >
        <mailchimp />
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
 }
 </script>