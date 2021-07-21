<template>
  <div>
    <b-row>
      <b-col
        v-for="(integration, index) in integrations"
        :key="index"
        :cols="12"
        :md="4"
      >
        <b-card
          :title="integration.title"
        >
          <b-card-text
            class="px-2"
          >
            {{ integration.description }}
          </b-card-text>
          <b-button
            variant="outline-primary"
            class="w-100"
            @click="() => openModal(integration.title)"
          >
            Connect
          </b-button>
        </b-card>
      </b-col>
    </b-row>
    <b-modal
      id="integrations"
      title="Integraions"
      centered
      :hide-footer="true"
    >
      <p class="h3">{{ selected }}</p>
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
import { BForm, BFormGroup, BFormInput, BCard, BButton, BCardText, BCardHeader, BRow, BCol, BModal } from 'bootstrap-vue'
import integrations from './integrations.json'
 export default {
    components: {
        BCol,
        BCardHeader,
        BCardText,
        BForm,
        BCard,
        BRow,
        BFormGroup,
        BFormInput,
        BButton,
        BModal,
    },
    data() {
        return {
            selected: '',
            publicKey: '',
            privateKey: '',
            integrations,
            loading: false,
            error: null,
        }
    },
    methods: {
        openModal(val) {
            this.selected = val
            this.$bvModal.show('integrations')
        },
        async onSubmit(event) {
            event.preventDefault()
            this.loading = true
            try{
                await this.$http.post('/klaviyo-manager/workspace/insert', {
                    publicKey: this.publicKey,
                    privateKey: this.privateKey
                })
                this.$bvModal.hide('integrations')
            }catch{
                this.error = 'Cannot Connect'
            }
            this.loading=false
        },
        onCancel() {
            this.$bvModal.hide('integrations')
        }
    }
 }
 </script>