<template>
  <div>
    <b-modal
      id="mailchimp-delete"
      title="Integraions"
      centered
      :hide-footer="true"
    >
      <p class="fs-3">
        Do you want to disconnect Klaviyo.
      </p>
      <p>
        <small
          class="text-danger"
        >
          {{ error }}
        </small>
      </p>
      <b-button
        class="mr-1"
        variant="success"
        size="sm"
        :disabled="loading"
        @click="disconnect"
      >Yes</b-button>
      <b-button
        :disabled="loading"
        size="sm"
        @click="$bvModal.hide('mailchimp-delete')"
      >No</b-button>
    </b-modal>
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
          if(this.connected){
            this.$bvModal.show('mailchimp-delete')
          }else{
            this.$bvModal.show('mailchimp')
          }
        },
        onCancel() {
            this.$bvModal.hide('klaviyo')
        },
        signin() {
          window.location.replace('https://cs-service.herokuapp.com/auth/mailchimp')
        },
        async disconnect() {
          this.loading = true
            try{
                await this.$http.post('/mailchimp-manager/workspace/delete')
                this.$bvModal.hide('mailchimp-delete')
                this.$emit('update')
            }catch{
                this.error = 'Cannot Disconnect'
            }
            this.loading=false
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