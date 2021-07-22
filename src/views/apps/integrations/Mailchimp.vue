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
        :disabled="connected"
        @click="() => openModal()"
      >
        {{ connected ? 'Connected': 'Connect' }}
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
        :disabled="loading"
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
    props: {
      connected: {
        type: Boolean,
        default: () => false
      },
    },
    data() {
        return {
            loading: false,
            error: null,
            win: null,
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
          window.location.replace('https://cs-service.herokuapp.com/auth/mailchimp')
        },
    },
    async created() {
      const code = this.$route.query.code
      if(code) {
        this.loading = true
        this.$bvModal.show('mailchimp')
        await this.$http.post('/oauth/mailchimp/connect', {
          code
        })
        this.$router.replace({'query': null});
        this.$bvModal.hide('mailchimp')
        this.loading = false
        this.$emit('update')
      }
    }
 }
 </script>