<template>
  <div>
    <b-modal
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
    </b-modal>

    <b-card
      title="Klaviyo"
    >
      <b-card-text
        class="px-2"
      >
        Automatically sync your customer segments into Klaviyo and start building some marketing flows.
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
      id="klaviyo"
      title="Integrations"
      centered
      :hide-footer="true"
    >
      <p class="h3">
        Klaviyo
      </p>
      <b-form @submit="onSubmit">
        <b-form-group
          id="input-group-1"
          label="Public Key"
          label-for="input-1"
          description="We'll never share your Public Key with anyone else."
        >
          <b-form-input
            id="input-1"
            v-model="publicKey"
            type="text"
            placeholder="Enter Public Key"
            required
          />
        </b-form-group>

        <b-form-group
          id="input-group-2"
          label="Private Key"
          label-for="input-2"
          description="We'll never share your Private Key with anyone else."
        >
          <b-form-input
            id="input-2"
            v-model="privateKey"
            placeholder="Enter Private Key"
            required
          />
        </b-form-group>
        <p>
          <small
            class="text-danger"
          >
            {{ error }}
          </small>
        </p>

        <b-button
          type="cancel"
          class="mr-1"
          :disabled="loading"
          @click="onCancel"
        >Cancel</b-button>
        <b-button
          type="submit"
          variant="primary"
          :disabled="loading"
        >Submit</b-button>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
/*eslint-disable*/
import { BForm, BFormGroup, BFormInput, BCard, BButton, BCardText, BCardHeader, BModal } from 'bootstrap-vue'
import { disconnect } from 'echarts/lib/echarts'

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
          if(this.connected) {
            this.$bvModal.show('klaviyo-delete')
          }else{
            this.$bvModal.show('klaviyo')
          }
        },
        async disconnect() {
          this.loading = true
            try{
                await this.$http.post('/klaviyo-manager/workspace/delete')
                this.$bvModal.hide('klaviyo-delete')
                this.$emit('update')
            }catch{
                this.error = 'Cannot Disconnect'
            }
            this.loading=false
        },
        async onSubmit(event) {
            event.preventDefault()
            this.loading = true
            try{
                await this.$http.post('/klaviyo-manager/workspace/insert', {
                    publicKey: this.publicKey,
                    privateKey: this.privateKey
                })
                this.$bvModal.hide('klaviyo')
                this.$emit('update')
            }catch{
                this.error = 'Cannot Connect'
            }
            this.loading=false
        },
        onCancel() {
            this.$bvModal.hide('klaviyo')
        }
    }
 }
 </script>