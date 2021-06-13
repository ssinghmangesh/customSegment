<template>
  <div>

    <!-- Media -->
    <b-media class="mb-2">
      <template #aside>
        <b-avatar
          ref="previewEl"
          :src="src"
          size="90px"
          rounded
        />
      </template>
      <h4 class="mb-1">
        {{ name }}
      </h4>
      <div class="d-flex flex-wrap">
        <b-button
          variant="primary"
          @click="fileInput"
        >
          <input
            id="fileInput"
            type="file"
            class="d-none"
            @input="fileUpload"
          >
          <span class="d-none d-sm-inline">Update</span>
          <feather-icon
            icon="EditIcon"
            class="d-inline d-sm-none"
          />
        </b-button>
        <b-button
          variant="outline-secondary"
          class="ml-1"
        >
          <span class="d-none d-sm-inline">Remove</span>
          <feather-icon
            icon="TrashIcon"
            class="d-inline d-sm-none"
          />
        </b-button>
      </div>
    </b-media>
    <!-- User Info: Input Fields -->
    <b-form>
      <b-row>

        <!-- Field: Username -->
        <b-col
          cols="12"
          md="4"
        >
          <b-form-group
            label="Username"
            label-for="username"
          >
            <b-form-input
              id="username"
              v-model="username"
            />
          </b-form-group>
        </b-col>

        <!-- Field: Full Name -->
        <b-col
          cols="12"
          md="4"
        >
          <b-form-group
            label="Name"
            label-for="full-name"
          >
            <b-form-input
              id="full-name"
              v-model="name"
            />
          </b-form-group>
        </b-col>

        <!-- Field: Email -->
        <b-col
          cols="12"
          md="4"
        >
          <b-form-group
            label="Email"
            label-for="email"
          >
            <b-form-input
              id="email"
              v-model="user_id"
              type="email"
              :disabled="true"
            />
          </b-form-group>
        </b-col>

        <!-- Field: Status -->
        <b-col
          cols="12"
          md="4"
        >
          <b-form-group
            label="Status"
            label-for="user-status"
          >
            <v-select
              v-model="status"
              :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
              :options="statusOptions"
              :reduce="val => val.value"
              :clearable="false"
              input-id="user-status"
            />
          </b-form-group>
        </b-col>

        <!-- Field: Role -->
        <b-col
          cols="12"
          md="4"
        >
          <b-form-group
            label="User Role"
            label-for="user-role"
          >
            <v-select
              v-model="role"
              :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
              :options="roleOptions"
              :reduce="val => val.value"
              :clearable="false"
              input-id="user-role"
            />
          </b-form-group>
        </b-col>

        <!-- Field: Email -->
        <b-col
          cols="12"
          md="4"
        >
          <b-form-group
            label="Company"
            label-for="company"
          >
            <b-form-input
              id="company"
              v-model="company"
            />
          </b-form-group>
        </b-col>

      </b-row>
    </b-form>

    <!-- PERMISSION TABLE -->
    <b-card
      no-body
      class="border mt-1"
    >
      <b-card-header class="p-1">
        <b-card-title class="font-medium-2">
          <feather-icon
            icon="LockIcon"
            size="18"
          />
          <span class="align-middle ml-50">Permission</span>
        </b-card-title>
      </b-card-header>
      <b-table
        striped
        responsive
        class="mb-0"
        :items="permissionsData"
      >
        <template #cell(module)="data">
          {{ data.value }}
        </template>
        <template #cell()="data">
          <b-form-checkbox :checked="data.value" />
        </template>
      </b-table>
    </b-card>

    <!-- Action Buttons -->
    <b-button
      variant="primary"
      class="mb-1 mb-sm-0 mr-0 mr-sm-1"
      :block="$store.getters['app/currentBreakPoint'] === 'xs'"
      @click="save"
    >
      Save Changes
    </b-button>
    <b-button
      variant="outline-secondary"
      type="reset"
      :block="$store.getters['app/currentBreakPoint'] === 'xs'"
    >
      Reset
    </b-button>
  </div>
</template>

<script>
import {
  BButton, BMedia, BAvatar, BRow, BCol, BFormGroup, BFormInput, BForm, BTable, BCard, BCardHeader, BCardTitle, BFormCheckbox,
} from 'bootstrap-vue'
import { avatarText } from '@core/utils/filter'
import vSelect from 'vue-select'

export default {
  components: {
    BButton,
    BMedia,
    BAvatar,
    BRow,
    BCol,
    BFormGroup,
    BFormInput,
    BForm,
    BTable,
    BCard,
    BCardHeader,
    BCardTitle,
    BFormCheckbox,
    vSelect,
  },
  props: {
    userData: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const roleOptions = [
      { label: 'Admin', value: 'admin' },
      { label: 'Author', value: 'author' },
      { label: 'Editor', value: 'editor' },
      { label: 'Maintainer', value: 'maintainer' },
      { label: 'Subscriber', value: 'subscriber' },
    ]

    const statusOptions = [
      { label: 'Pending', value: 'pending' },
      { label: 'Active', value: 'active' },
      { label: 'Inactive', value: 'inactive' },
    ]

    const permissionsData = [
      {
        module: 'Admin',
        read: true,
        write: false,
        create: false,
        delete: false,
      },
      {
        module: 'Staff',
        read: false,
        write: true,
        create: false,
        delete: false,
      },
      {
        module: 'Author',
        read: true,
        write: false,
        create: true,
        delete: false,
      },
      {
        module: 'Contributor',
        read: false,
        write: false,
        create: false,
        delete: false,
      },
      {
        module: 'User',
        read: false,
        write: false,
        create: false,
        delete: true,
      },
    ]

    return {
      avatarText,
      roleOptions,
      statusOptions,
      permissionsData,
    }
  },
  data() {
    return {
      file: null,
      src: '',
      username: 'mangesh123',
      user_id: 'singhmangeshk@gmail.com',
      name: 'Mangesh Singh',
      company: 'custom-segment',
      status: 'pending',
      role: 'editor',
    }
  },
  watch: {
    file() {
      console.log(this.file)
    },
  },
  async created() {
    console.log(this.$route.params.id)
    const res = await this.$http.post('user-manager/user/fetch', {
      user_id: this.user_id,
    })
    const user = res.data.data
    this.name = user.name
    this.status = user.status
    this.role = user.role
    this.company = user.company
    this.username = user.username
    this.src = user.src
  },
  methods: {
    fileInput() {
      document.getElementById('fileInput').click()
    },
    async fileUpload(event) {
      /*eslint-disable */
      this.file = event.target.files[0]
      this.updateSrc(this.file)
    },
    async save() {
      const formData = new FormData()
      formData.append('file', this.file);
      formData.append('user_id', this.user_id);
      formData.append('name', this.name);
      formData.append('status', this.status);
      formData.append('role', this.role);
      formData.append('company', this.company);
      formData.append('username', this.username);
      await this.$http.post('/user-manager/user/edit', formData)
    },
    updateSrc(file) {
      const reader = new FileReader()
      reader.addEventListener(
        'load',
        () => {
          this.src = reader.result
        },
        false,
      )

      if (file) {
        reader.readAsDataURL(file)
      }
    }
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
</style>
