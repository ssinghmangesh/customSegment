<template>
  <div class="auth-wrapper auth-v1 px-2">
    <div class="auth-inner py-2">

      <!-- Register v1 -->
      <b-card class="mb-0">
        <b-link class="brand-logo">
          <vuexy-logo />
          <h2 class="brand-text text-primary ml-1">
            Custom Segment
          </h2>
        </b-link>

        <b-card-title class="mb-1">
          Forgot Password? 🔒
        </b-card-title>
        <b-card-text class="mb-2">
          Enter your email and we'll send you instructions to reset your password
        </b-card-text>

        <!-- form -->
        <validation-observer ref="registerForm">
          <b-form
            class="auth-register-form mt-2"
            @submit.prevent="validationForm"
          >
            <small class="text-danger">{{ error }}</small>
            <!-- email -->
            <b-form-group
              label="Email"
              label-for="email"
            >
              <validation-provider
                #default="{ errors }"
                name="Email"
                rules="required|email"
              >
                <b-form-input
                  id="email"
                  v-model="regEmail"
                  :state="errors.length > 0 ? false:null"
                  name="register-email"
                  :disabled="page !== 1"
                  placeholder="john@example.com"
                />
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>

            <b-form-group
              v-if="page === 2"
              label="OTP"
              label-for="otp"
            >
              <b-form-input
                id="otp"
                v-model="otp"
                placeholder="Enter OTP"
              />
            </b-form-group>
            <b-form-group
              v-if="page === 3"
              label="Enter Password"
              label-for="password"
            >
              <b-form-input
                id="password"
                v-model="password"
                type="password"
                placeholder="Enter password"
              />
            </b-form-group>
            <b-form-group
              v-if="page === 3"
              label="Confirm Password"
              label-for="confirm-password"
            >
              <b-form-input
                id="confirm-password"
                v-model="confirmPassword"
                type="password"
                placeholder="Confirm password"
              />
            </b-form-group>
            <!-- password -->
            <!-- <b-form-group
              label="Password"
              label-for="password"
            >
              <validation-provider
                #default="{ errors }"
                name="Password"
                rules="required"
              >
                <b-input-group
                  class="input-group-merge"
                  :class="errors.length > 0 ? 'is-invalid':null"
                >
                  <b-form-input
                    id="password"
                    v-model="password"
                    :type="passwordFieldType"
                    :state="errors.length > 0 ? false:null"
                    class="form-control-merge"
                    name="register-password"
                    placeholder="············"
                  />
                  <b-input-group-append is-text>
                    <feather-icon
                      :icon="passwordToggleIcon"
                      class="cursor-pointer"
                      @click="togglePasswordVisibility"
                    />
                  </b-input-group-append>
                </b-input-group>
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group> -->

            <!-- checkbox -->
            <!-- <b-form-group>
              <b-form-checkbox
                id="register-privacy-policy"
                v-model="status"
                name="checkbox-1"
              >
                I agree to
                <b-link>privacy policy & terms</b-link>
              </b-form-checkbox>
            </b-form-group> -->

            <!-- submit button -->
            <b-button
              v-if="page === 1"
              variant="primary"
              block
              type="submit"
            >
              <b-spinner
                v-if="loading"
                small
              />
              <span v-else>Send Otp</span>
            </b-button>
            <div
              v-if="page === 2"
              class="d-flex flex-row justify-content-center"
            >
              <b-button
                class="mr-1"
                variant="primary"
                :disabled="loading"
                @click="validationForm"
              >
                <b-spinner
                  v-if="loading === 'otp'"
                  small
                />
                <span v-else>Resend Otp</span>
              </b-button>
              <b-button
                variant="success"
                :disabled="loading || otp.length === 0"
                @click="verifyOtp"
              >
                <b-spinner
                  v-if="loading === 'verify'"
                  small
                />
                <span v-else>Verify</span>
              </b-button>
            </div>
            <b-button
              v-if="page === 3"
              variant="success"
              :disabled="loading"
              @click="register"
            >
              <b-spinner
                v-if="loading"
                small
              />
              <span v-else>Change Password</span>
            </b-button>
          </b-form>
        </validation-observer>

        <b-card-text class="text-center mt-2">
          <b-link :to="{name:'auth-login'}">
            <span>Back to login</span>
          </b-link>
        </b-card-text>

        <!-- <div class="divider my-2">
          <div class="divider-text">
            or
          </div>
        </div> -->

        <!-- social buttons -->
        <!-- <div class="auth-footer-btn d-flex justify-content-center">
          <b-button
            variant="facebook"
            href="javascript:void(0)"
          >
            <feather-icon icon="FacebookIcon" />
          </b-button>
          <b-button
            variant="twitter"
            href="javascript:void(0)"
          >
            <feather-icon icon="TwitterIcon" />
          </b-button>
          <b-button
            variant="google"
            href="javascript:void(0)"
          >
            <feather-icon icon="MailIcon" />
          </b-button>
          <b-button
            variant="github"
            href="javascript:void(0)"
          >
            <feather-icon icon="GithubIcon" />
          </b-button>
        </div> -->
      </b-card>
    <!-- /Register v1 -->
    </div>
  </div>

</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import {
  BCard, BLink, BCardTitle, BCardText, BForm,
  BButton, BFormInput, BFormGroup, BSpinner,
} from 'bootstrap-vue'
import VuexyLogo from '@core/layouts/components/Logo.vue'
import { required, email } from '@validations'
import { togglePasswordVisibility } from '@core/mixins/ui/forms'
// import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'

export default {
  components: {
    VuexyLogo,
    // BSV
    BCard,
    BLink,
    BCardTitle,
    BCardText,
    BForm,
    BButton,
    BFormInput,
    BFormGroup,
    // BInputGroup,
    // BInputGroupAppend,
    // BFormCheckbox,
    // validations
    ValidationProvider,
    ValidationObserver,
    BSpinner,
  },
  mixins: [togglePasswordVisibility],
  data() {
    return {
      regEmail: '',
      password: '',
      status: '',
      error: '',
      loading: false,
      page: 1,
      // validation rules
      required,
      email,
      otp: '',
      confiemPassword: '',
    }
  },
  computed: {
    passwordToggleIcon() {
      return this.passwordFieldType === 'password' ? 'EyeIcon' : 'EyeOffIcon'
    },
  },
  methods: {
    async validationForm() {
      this.loading = 'otp'
      try {
        await this.$http.post('/auth-manager/forgot-password', {
          userId: this.regEmail,
        })
        this.error = 'Otp has been sent to your email'
        this.page = 2
      } catch (err) {
        this.error = err.response.data
      }
      this.loading = false
    },
    async verifyOtp() {
      this.error = null
      this.loading = 'verify'
      try {
        await this.$http.post('/auth-manager/verify-otp', {
          userId: this.regEmail,
          otp: this.otp,
        })
        this.page = 3
      } catch (err) {
        this.error = 'Invalid OTP'
      }
      this.loading = false
    },
    async register() {
      this.error = null
      if (this.password.length < 8) {
        this.error = 'Password must contain 8 characters'
        return
      }
      if (this.password !== this.confirmPassword) {
        this.error = 'Passwords don\'t match'
        return
      }
      this.loading = true
      try {
        await this.$http.post('/auth-manager/set-password', {
          userId: this.regEmail,
          password: this.password,
        })
        this.$router.push('/login')
      } catch (err) {
        this.error = 'Something Went Wrong'
      }
      this.loading = false
    },
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/page-auth.scss';
</style>
