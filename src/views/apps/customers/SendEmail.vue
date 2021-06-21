<template>
  <div>
    <!-- input form -->
    <div v-if="currentPage === 0">
      <b-form-group
        id="fieldset-1"
        label="From"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          disabled
          trim
          value="Custom Segment"
        />
      </b-form-group>

      <b-form-group
        id="fieldset-2"
        label="To"
        label-for="input-2"
        :invalid-feedback="invalidEmail"
        :state="emailState"
      >
        <b-form-input
          id="input-2"
          v-model="email"
          :state="emailState"
          trim
        />
      </b-form-group>

      <b-form-group
        id="fieldset-2"
        label="Subject"
        label-for="input-3"
      >
        <b-form-input
          id="input-3"
          v-model="subject"
        />
      </b-form-group>
    </div>
    <!-- choose template -->
    <div v-if="currentPage === 1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-chevron-left"
        style="position: absolute; top: 200px; left: 10px"
        role="button"
        @click="prevSlide"
      >
        <polyline
          points="15 18 9 12 15 6"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-chevron-right"
        style="position: absolute; top: 205px; right: 10px"
        role="button"
        @click="nextSlide"
      >
        <polyline points="9 18 15 12 9 6" />
      </svg>
      <b-card
        :border-variant="template.template_id === templates[slide].template_id ? 'primary' : ''"
        role="button"
        style="width: 90%;"
        class="mx-auto"
        @click="() => select(templates[slide])"
      >
        <iframe
          :src="templates[slide].html_path"
          style="width:100%; height:400px"
          title="Iframe Example"
        />
      </b-card>
    </div>
    <!-- confirmation page -->
    <div v-if="currentPage === 2">
      <b-form-group
        id="fieldset-1"
        label="From"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          disabled
          trim
          value="Custom Segment"
        />
      </b-form-group>

      <b-form-group
        id="fieldset-2"
        label="To"
        label-for="input-2"
      >
        <b-form-input
          id="input-2"
          v-model="email"
          disabled
          trim
        />
      </b-form-group>

      <b-form-group
        id="fieldset-2"
        label="Subject"
        label-for="input-3"
      >
        <b-form-input
          id="input-3"
          v-model="subject"
          disabled
        />
      </b-form-group>

      <b-card
        role="button"
        style="width: 90%;"
        class="mx-auto"
      >
        <iframe
          :src="template.html_path"
          style="width:100%; height:400px"
          title="Iframe Example"
        />
      </b-card>
    </div>
    <!-- next button -->
    <b-button
      v-if="currentPage !== 2"
      variant="primary"
      class="button"
      @click="next"
    >
      Next
    </b-button>
    <!-- send button -->
    <b-button
      v-if="currentPage === 2"
      variant="primary"
      class="button"
      @click="send"
    >
      Send
    </b-button>
    <!-- cancel button -->
    <b-button
      v-if="currentPage === 0"
      class="button mr-1"
      @click="closeModal"
    >
      Cancel
    </b-button>
    <!-- back button -->
    <b-button
      v-if="currentPage !== 0"
      class="button mr-1"
      @click="back"
    >
      Back
    </b-button>
  </div>
</template>

<script>
import {
  BButton, BFormGroup, BFormInput, BCard,
} from 'bootstrap-vue'

export default {
  components: {
    BButton,
    BFormGroup,
    BFormInput,
    BCard,
  },
  props: {
    templates: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      email: '',
      page: 0,
      template: {},
      subject: '',
      slide: 0,
    }
  },
  computed: {
    currentPage() {
      return this.page
    },
    emailState() {
      return this.email.length >= 4
    },
    invalidEmail() {
      if (this.email.length < 4) {
        return 'Invalid Email'
      }
      return ''
    },
  },
  methods: {
    send() {
      const data = {
        to: this.email,
        subject: this.subject,
        template: this.template,
      }
      this.$emit('sendEmail', data)
    },
    back() {
      this.page -= 1
    },
    select(val) {
      this.template = val
    },
    closeModal() {
      this.$bvModal.hide('send-email')
    },
    next() {
      if (this.page === 0 && this.invalidEmail.length === 0) {
        this.page += 1
      } else if (this.page === 1 && this.template) {
        this.page += 1
      }
    },
    nextSlide() {
      this.slide = (this.slide + 1) % this.templates.length
    },
    prevSlide() {
      this.slide = this.slide ? (this.slide - 1) : this.templates.length - 1
    },
  },
}
</script>
<style>
.template{
  width: 0%;
}
</style>
