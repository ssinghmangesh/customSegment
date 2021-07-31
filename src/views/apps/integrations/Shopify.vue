<template>
  <div>
    <!-- <b-modal
      id="klaviyo-delete"
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
        @click="$bvModal.hide('klaviyo-delete')"
      >No</b-button>
    </b-modal> -->

    <b-card
      title="Shopify"
    >
      <b-card-text
        class="px-2"
      >
        Connect your Shopify store.
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
      id="shopify"
      title="Integrations"
      centered
      :hide-footer="true"
    >
        <b-card>
            <p class="h3">
                Shopify
            </p>
            <connect-store />
        </b-card>
    </b-modal>
  </div>
</template>

<script>
/*eslint-disable*/
import { BForm, BFormGroup, BFormInput, BCard, BButton, BCardText, BCardHeader, BModal } from 'bootstrap-vue'
import { disconnect } from 'echarts/lib/echarts'
import ConnectStore from '../ConnectStore/ConnectStore.vue'

 export default {
    components: {
        BCardHeader,
        BCardText,
        BForm,
        BCard,
        BFormGroup,
        BFormInput,
        BButton,
        BModal,
        ConnectStore,
    },
    props: {
      connected: {
        type: Boolean,
        default: () => false
      },
    },
    data() {
        return {
            publicKey: '',
            privateKey: '',
            loading: false,
            error: null,
        }
    },
    methods: {
        openModal() {
            this.$bvModal.show('shopify')
        },
        // async disconnect() {
        //   this.loading = true
        //     try{
        //         await this.$http.post('/klaviyo-manager/workspace/delete')
        //         this.$bvModal.hide('klaviyo-delete')
        //         this.$emit('update')
        //     }catch{
        //         this.error = 'Cannot Disconnect'
        //     }
        //     this.loading=false
        // },
        onCancel() {
            this.$bvModal.hide('klaviyo')
        }
    }
 }
 </script>