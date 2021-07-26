<template>
  <div>
    <b-modal
      id="drip-delete"
      title="Integraions"
      centered
      :hide-footer="true"
    >
      <p class="fs-3">
        Do you want to disconnect Drip.
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
        @click="$bvModal.hide('drip-delete')"
      >No</b-button>
    </b-modal>
    <b-card
      title="Drip"
    >
      <b-card-text
        class="px-2"
      >
        Create and automate ecommerce campaigns with pre-built, customizable templates.
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
      id="drip"
      title="Integraions"
      centered
      :hide-footer="true"
    >
      <p class="h3">
        Drip
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
            this.$bvModal.show('drip-delete')
          }else{
            this.$bvModal.show('drip')
          }
        },
        signin() {
          window.location.replace('https://cs-service.herokuapp.com/auth/drip')
        },
        async disconnect() {
          this.loading = true
            try{
                await this.$http.post('/drip-manager/workspace/delete')
                this.$bvModal.hide('drip-delete')
                this.$emit('update')
            }catch{
                this.error = 'Cannot Disconnect'
            }
            this.loading=false
        },
    },
    async created() {
      const code = this.$route.query.code
      const integration = this.$route.query.integration
      if(integration === 'drip' && code) {
        this.loading = true
        this.$bvModal.show('drip')
        await this.$http.post('/oauth/drip/connect', {
          code
        })
        this.$router.replace({'query': null});
        this.$bvModal.hide('drip')
        this.loading = false
        this.$emit('update')
      }
    }
 }
 </script>