<template>
  <b-card>
    <ContentLoader v-if="!userData.user_id">
      <rect x="16" y="0" rx="3" ry="3" width="calc(100% - 32px)" height="10" />
      <rect x="16" y="20" rx="3" ry="3" width="calc(100% - 32px)" height="10" />
      <rect x="16" y="40" rx="3" ry="3" width="calc(100% - 32px)" height="10" />
      <rect x="16" y="60" rx="3" ry="3" width="calc(100% - 32px)" height="10" />
      <rect x="16" y="80" rx="3" ry="3" width="calc(100% - 32px)" height="10" />
      <rect x="16" y="100" rx="3" ry="3" width="calc(100% - 32px)" height="10" />
    </ContentLoader>

    <b-row v-else>

      <!-- User Info: Left col -->
      <b-col
        cols="21"
        xl="6"
        class="d-flex justify-content-between flex-column"
      >
        <!-- User Avatar & Action Buttons -->
        <div class="d-flex justify-content-start">
          <b-avatar
            :src="userData.src"
            size="104px"
            rounded
          />
          <div class="d-flex flex-column ml-1">
            <div class="mb-1">
              <h4 class="mb-0">
                {{ userData.name }}
              </h4>
              <span class="card-text">{{ userData.user_id }}</span>
            </div>
            <div class="d-flex flex-wrap">
              <b-button
                :to="{ name: 'apps-users-edit', params: { id: userData.user_id } }"
                variant="primary"
              >
                Edit
              </b-button>
              <b-button
                variant="outline-danger"
                class="ml-1"
              >
                Delete
              </b-button>
            </div>
          </div>
        </div>
      </b-col>

      <!-- Right Col: Table -->
      <b-col
        cols="12"
        xl="6"
      >
        <table class="mt-2 mt-xl-0 w-100">
          <tr>
            <th class="pb-50">
              <feather-icon
                icon="UserIcon"
                class="mr-75"
              />
              <span class="font-weight-bold">Username</span>
            </th>
            <td class="pb-50">
              {{ userData.username }}
            </td>
          </tr>
          <tr>
            <th class="pb-50">
              <feather-icon
                icon="CheckIcon"
                class="mr-75"
              />
              <span class="font-weight-bold">Status</span>
            </th>
            <td class="pb-50 text-capitalize">
              {{ userData.status }}
            </td>
          </tr>
          <tr>
            <th class="pb-50">
              <feather-icon
                icon="StarIcon"
                class="mr-75"
              />
              <span class="font-weight-bold">Role</span>
            </th>
            <td class="pb-50 text-capitalize">
              {{ userData.role }}
            </td>
          </tr>
          <!-- <tr>
            <th class="pb-50">
              <feather-icon
                icon="FlagIcon"
                class="mr-75"
              />
              <span class="font-weight-bold">Country</span>
            </th>
            <td class="pb-50">
              {{ userData.country }}
            </td>
          </tr>
          <tr>
            <th>
              <feather-icon
                icon="PhoneIcon"
                class="mr-75"
              />
              <span class="font-weight-bold">Contact</span>
            </th>
            <td>
              {{ userData.contact }}
            </td>
          </tr> -->
        </table>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import {
  BCard, BButton, BAvatar, BRow, BCol,
} from 'bootstrap-vue'
import { avatarText } from '@core/utils/filter'
import { ContentLoader } from 'vue-content-loader'
import useUsersList from '../users-list/useUsersList'

export default {
  components: {
    BCard, BButton, BRow, BCol, BAvatar, ContentLoader,
  },
  props: {
    userData: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const { resolveUserRoleVariant } = useUsersList()
    return {
      avatarText,
      resolveUserRoleVariant,
    }
  },
}
</script>

<style>

</style>
