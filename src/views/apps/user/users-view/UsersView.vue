<template>
  <div>

    <!-- Alert: No item found -->
    <b-alert
      variant="danger"
      :show="userData === undefined"
    >
      <h4 class="alert-heading">
        Error fetching user data
      </h4>
      <div class="alert-body">
        No user found with this user id. Check
        <b-link
          class="alert-link"
          :to="{ name: 'apps-users-list'}"
        >
          User List
        </b-link>
        for other users.
      </div>
    </b-alert>

    <template v-if="userData">
      <!-- First Row -->
      <b-row>
        <b-col
          cols="12"
        >
          <user-view-user-info-card :user-data="userData" />
        </b-col>
      </b-row>

      <b-row>
        <b-col
          cols="12"
        >
          <user-view-user-permissions-card />
        </b-col>
      </b-row>
    </template>

  </div>
</template>

<script>
import {
  BRow, BCol, BAlert, BLink,
} from 'bootstrap-vue'
import UserViewUserInfoCard from './UserViewUserInfoCard.vue'
import UserViewUserPermissionsCard from './UserViewUserPermissionsCard.vue'

export default {
  components: {
    BRow,
    BCol,
    BAlert,
    BLink,

    // Local Components
    UserViewUserInfoCard,
    UserViewUserPermissionsCard,
  },
  data() {
    return {
      userData: {},
    }
  },
  async created() {
    const res = await this.$http.post('user-manager/user/fetch', {
      user_id: this.$route.params.id,
    })
    this.userData = { ...res.data.data }
  },
}
</script>

<style>

</style>
