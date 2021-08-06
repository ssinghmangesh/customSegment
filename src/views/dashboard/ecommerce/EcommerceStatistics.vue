<template>
  <b-card
    v-if="data"
    no-body
    class="card-statistics"
  >
    <b-card-header>
      <b-card-title>{{ title }}</b-card-title>
      <!-- <b-card-text class="font-small-2 mr-25 mb-0">
        Updated 13 month ago
      </b-card-text> -->
      <span @click="$emit('refresh')"><feather-icon class="mr-1" icon="RefreshCwIcon" /></span>
    </b-card-header>
    <ContentLoader v-if="!data.length">
      <rect x="16" y="0" rx="3" ry="3" width="calc(100% - 32px)" height="10" />
      <rect x="16" y="20" rx="3" ry="3" width="calc(100% - 32px)" height="10" />
      <rect x="16" y="40" rx="3" ry="3" width="calc(100% - 32px)" height="10" />
      <rect x="16" y="60" rx="3" ry="3" width="calc(100% - 32px)" height="10" />
      <rect x="16" y="80" rx="3" ry="3" width="calc(100% - 32px)" height="10" />
      <rect x="16" y="100" rx="3" ry="3" width="calc(100% - 32px)" height="10" />
    </ContentLoader>
    <b-card-body v-else class="statistics-body">
      <b-row>
        <b-col
          v-for="item in data"
          :key="item.icon"
          xl="3"
          sm="6"
          :class="item.customClass"
        >
          <b-media no-body>
            <b-media-aside

              class="mr-2"
            >
              <b-avatar
                size="48"
                :variant="item.color"
              >
                <feather-icon
                  size="24"
                  :icon="item.icon"
                />
              </b-avatar>
            </b-media-aside>
            <b-media-body class="my-auto">
              <h4 class="font-weight-bolder mb-0">
                {{ item.title }}
              </h4>
              <b-card-text class="font-small-3 mb-0">
                {{ item.subtitle }}
              </b-card-text>
            </b-media-body>
          </b-media>
        </b-col>
      </b-row>
    </b-card-body>
  </b-card>
</template>

<script>
import {
  BCard, BCardHeader, BCardTitle, BCardText, BCardBody, BRow, BCol, BMedia, BMediaAside, BAvatar, BMediaBody,
} from 'bootstrap-vue'
import { ContentLoader } from 'vue-content-loader'

export default {
  components: {
    BRow,
    BCol,
    BCard,
    BCardHeader,
    BCardTitle,
    BCardText,
    BCardBody,
    BMedia,
    BAvatar,
    BMediaAside,
    BMediaBody,
    ContentLoader,
  },
  props: {
    title: {
      type: String,
      require: true,
      default: () => 'Title',
    },
    data: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
