<template>
  <b-card
    v-if="data"
    no-body
  >
    <b-card-header>
      <b-card-title class="ml-25">
        {{ title }}
      </b-card-title>
    </b-card-header>

    <!-- timeline -->
    <b-card-body>
      <app-timeline
        v-for="(item, index) in data"
        :key="index"
      >
        <app-timeline-item variant="primary">
          <div class="d-flex justify-content-between flex-sm-row flex-column mb-sm-0 mb-1">
            <h6>Customer id: {{ item.customer_id }}</h6>
            <small class="timeline-item-time text-nowrap text-muted ml-1">{{ item.created_at }}</small>
          </div>
          <p>Order id: {{ item.id }}</p>
          <!-- <b-media no-body>
            <b-media-aside class="mr-1">
              <b-img
                :src="data.step1.img"
                height="23"
                :alt="data.step1.fileName "
              />
            </b-media-aside>
            <b-media-body class="my-auto">
              <h6 class="media-body mb-0">
                {{ data.step1.fileName }}
              </h6>
            </b-media-body>
          </b-media> -->
        </app-timeline-item>
      </app-timeline>
      <!--/ timeline -->
    </b-card-body>
  </b-card>
</template>

<script>
import {
  BCard, BCardBody, BCardHeader, BCardTitle,
} from 'bootstrap-vue'
import AppTimeline from '@core/components/app-timeline/AppTimeline.vue'
import AppTimelineItem from '@core/components/app-timeline/AppTimelineItem.vue'
/* eslint-disable global-require */
export default {
  components: {
    BCard,
    // BImg,
    BCardBody,
    BCardHeader,
    BCardTitle,
    AppTimeline,
    AppTimelineItem,
    // BMedia,
    // BAvatar,
    // BMediaBody,
    // BMediaAside,
    // BAvatarGroup,
  },
  // directives: {
  //   'b-tooltip': VBTooltip,
  // },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    title: {
      type: String,
      default: () => 'Title',
    },
  },
}
</script>
