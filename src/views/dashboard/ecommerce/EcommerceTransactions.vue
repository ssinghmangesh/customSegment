<template>
  <b-card
    v-if="data"
    class="card-transaction card-transaction-height"
    no-body
  >
    <b-card-header>
      <b-card-title>{{ title }}</b-card-title>
      <span @click="$emit('refresh')"><feather-icon icon="RefreshCwIcon" /></span>
      <b-dropdown
        variant="link"
        no-caret
        class="chart-dropdown"
        toggle-class="p-0"
        right
      >
        <template #button-content>
          <feather-icon
            icon="MoreVerticalIcon"
            size="18"
            class="text-body cursor-pointer"
          />
        </template>
        <b-dropdown-item href="#">
          Last 28 Days
        </b-dropdown-item>
        <b-dropdown-item href="#">
          Last Month
        </b-dropdown-item>
        <b-dropdown-item href="#">
          Last Year
        </b-dropdown-item>
      </b-dropdown>
    </b-card-header>

    <b-card-body>
      <ContentLoader v-if="!data.length">
        <rect x="0" y="0" rx="3" ry="3" width="100%" height="10" />
        <rect x="0" y="20" rx="3" ry="3" width="100% " height="10" />
        <rect x="0" y="40" rx="3" ry="3" width="100%" height="10" />
        <rect x="0" y="60" rx="3" ry="3" width="100%" height="10" />
        <rect x="0" y="80" rx="3" ry="3" width="100%" height="10" />
        <rect x="0" y="100" rx="3" ry="3" width="100%" height="10" />
      </ContentLoader>
      <div
        v-for="transaction in data"
        :key="transaction.mode"
        class="transaction-item"
      >
        <b-media no-body>
          <b-media-aside>
            <b-avatar
              rounded
              size="42"
              :variant="transaction.avatarVariant"
            >
              <feather-icon
                size="18"
                :icon="transaction.avatar"
              />
            </b-avatar>
          </b-media-aside>
          <b-media-body>
            <h6 class="transaction-title">
              {{ transaction.mode }}
            </h6>
            <small>{{ transaction.types }}</small>
          </b-media-body>
        </b-media>
        <div
          class="font-weight-bolder"
          :class="transaction.deduction ? 'text-danger':'text-success'"
        >
          {{ transaction.payment }}
        </div>
      </div>
    </b-card-body>
  </b-card>
</template>

<script>
import {
  BCard, BCardHeader, BCardTitle, BCardBody, BMediaBody, BMedia, BMediaAside, BAvatar, BDropdown, BDropdownItem,
} from 'bootstrap-vue'
import { ContentLoader } from 'vue-content-loader'

export default {
  components: {
    BCard,
    BCardHeader,
    BCardTitle,
    BCardBody,
    BMediaBody,
    BMedia,
    BMediaAside,
    BAvatar,
    BDropdown,
    BDropdownItem,
    ContentLoader,
  },
  props: {
    title: {
      type: String,
      default: () => '',
    },
    data: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
<style>
.card-transaction-height {
  height: calc(100% - 2rem);
}
</style>
