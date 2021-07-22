<template>
  <div>
    <b-card
      title="Mailchimp"
    >
      <b-card-text
        class="px-2"
      >
        Automatically sync your customer segments into Mailchimp and start building some marketing flows.
      </b-card-text>
      <b-button
        variant="outline-primary"
        class="w-100"
        @click="() => openModal()"
      >
        Connect
      </b-button>
    </b-card>

    <b-modal
      id="mailchimp"
      title="Integraions"
      centered
      :hide-footer="true"
    >
      <p class="h3">
        Mailchimp
      </p>
      <b-button
        @click="signin"
      >
        Connect
      </b-button>
    </b-modal>
  </div>
</template>

<script>
/*eslint-disable*/
import {BCard, BButton, BCardText, BCardHeader, BModal } from 'bootstrap-vue'

 export default {
    components: {
        BCardHeader,
        BCardText,
        BCard,
        BButton,
        BModal,
    },
    data() {
        return {
            loading: false,
            error: null,
        }
    },
    methods: {
        openModal() {
            this.$bvModal.show('mailchimp')
        },
        onCancel() {
            this.$bvModal.hide('klaviyo')
        },
        signin() {
            // window.removeEventListener('message', receiveMessage);
            const strWindowFeatures = 'toolbar=no, menubar=no, width=600, height=700, top=100, left=100';
            
            windowObjectReference = window.open('http://localhost:3000/auth/mailchimp', 'name', strWindowFeatures);

   // add the listener for receiving a message from the popup
            // window.addEventListener('message', event => receiveMessage(event), false);
        },
    }
 }
 </script>