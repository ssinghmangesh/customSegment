<template>
  <div>
    <form-wizard
      color="#7367F0"
      :title="null"
      :subtitle="null"
      shape="square"
      finish-button-text=""
      back-button-text="Previous"
      class="mb-3"
    >

      <!-- accoint details tab -->
      <tab-content
        title="Order"
      >
        {{ count.orders }} Orders in Database<br>
        {{ syncCount.orders }} Orders in Shopify<br>
        {{ syncStatus.orders }}<br>
        <b-button
          class="mt-2"
          variant="primary"
          :disabled="loading.order || count.orders >= syncCount.orders || busy"
          @click="() => sync('order')"
        >
          <b-spinner
            v-if="loading.order"
            small
          />
          <span v-else>Sync</span>
        </b-button>
        <b-button
          class="mt-2 ml-1"
          variant="danger"
          :disabled="loading.order || loading2.order || busy"
          @click="() => clearData('order')"
        >
          <b-spinner
            v-if="loading2.order"
            small
          />
          <span v-else>Clear Data</span>
        </b-button>
      </tab-content>

      <!-- product -->
      <tab-content
        title="Product"
      >
        {{ count.products }} Products in Database<br>
        {{ syncCount.products }} Products in Shopify<br>
        {{ syncStatus.products }}<br>
        <b-button
          class="mt-2"
          variant="primary"
          :disabled="loading.product || count.products >= syncCount.products || busy"
          @click="() => sync('product')"
        >
          <b-spinner
            v-if="loading.product"
            small
          />
          <span v-else>Sync</span>
        </b-button>
        <b-button
          class="mt-2 ml-1"
          variant="danger"
          :disabled="loading.product || loading2.product || busy"
          @click="() => clearData('product')"
        >
          <b-spinner
            v-if="loading2.order"
            small
          />
          <span v-else>Clear Data</span>
        </b-button>
      </tab-content>

      <!-- personal details tab -->
      <tab-content
        title="Discount"
      >
        {{ count.discounts }} Discounts in Database<br>
        {{ syncCount.discounts }} Discounts in Shopify<br>
        {{ syncStatus.discounts }}<br>
        <b-button
          class="mt-2"
          variant="primary"
          :disabled="loading.discount || count.discounts >= syncCount.discounts || busy"
          @click="() => sync('discount')"
        >
          <b-spinner
            v-if="loading.discount"
            small
          />
          <span v-else>Sync</span>
        </b-button>
        <b-button
          class="mt-2 ml-1"
          variant="danger"
          :disabled="loading.discount || loading2.discount || busy"
          @click="() => clearData('discount')"
        >
          <b-spinner
            v-if="loading2.discount"
            small
          />
          <span v-else>Clear Data</span>
        </b-button>
      </tab-content>

      <!-- personal details tab -->
      <tab-content
        title="Cart"
      >
        {{ count.carts }} Carts in Database<br>
        {{ syncCount.carts }} Carts in Shopify<br>
        {{ syncStatus.carts }}<br>
        <b-button
          class="mt-2"
          variant="primary"
          :disabled="loading.cart || count.carts >= syncCount.carts || busy"
          @click="() => sync('cart')"
        >
          <b-spinner
            v-if="loading.cart"
            small
          />
          <span v-else>Sync</span>
        </b-button>
        <b-button
          class="mt-2 ml-1"
          variant="danger"
          :disabled="loading.cart || loading2.cart || busy"
          @click="() => clearData('cart')"
        >
          <b-spinner
            v-if="loading2.cart"
            small
          />
          <span v-else>Clear Data</span>
        </b-button>
      </tab-content>

      <!-- personal details tab -->
      <tab-content
        title="Draft Order"
      >
        {{ count.draftOrders }} Draft Orders in Database<br>
        {{ syncCount.draftOrders }} Draft Orders in Shopify<br>
        {{ syncStatus.draftOrders }}<br>
        <b-button
          class="mt-2"
          variant="primary"
          :disabled="loading.draftorder || count.draftOrders >= syncCount.draftOrders || busy"
          @click="() => sync('draftorder')"
        >
          <b-spinner
            v-if="loading.draftorder"
            small
          />
          <span v-else>Sync</span>
        </b-button>
        <b-button
          class="mt-2 ml-1"
          variant="danger"
          :disabled="loading.draftorder || loading2.draftorder || busy"
          @click="() => clearData('draftorder')"
        >
          <b-spinner
            v-if="loading2.draftorder"
            small
          />
          <span v-else>Clear Data</span>
        </b-button>
      </tab-content>

      <!-- address  -->
      <tab-content
        title="Location"
      >
        {{ count.locations }} Locations in Database<br>
        {{ syncCount.locations }} Locations in Shopify<br>
        {{ syncStatus.locations }}<br>
        <b-button
          class="mt-2"
          variant="primary"
          :disabled="loading.location || count.locations >= syncCount.locations || busy"
          @click="() => sync('location')"
        >
          <b-spinner
            v-if="loading.location"
            small
          />
          <span v-else>Sync</span>
        </b-button>
        <b-button
          class="mt-2 ml-1"
          variant="danger"
          :disabled="loading.location || loading2.location || busy"
          @click="() => clearData('location')"
        >
          <b-spinner
            v-if="loading2.location"
            small
          />
          <span v-else>Clear Data</span>
        </b-button>
      </tab-content>

      <!-- personal details tab -->
      <tab-content
        title="Customer"
      >
        {{ count.customers }} Customers in Database<br>
        {{ syncCount.customers }} Customers in Shopify<br>
        {{ syncStatus.customers }}<br>
        <b-button
          class="mt-2"
          variant="primary"
          :disabled="loading.customer || count.customers >= syncCount.customers || busy"
          @click="() => sync('customer')"
        >
          <b-spinner
            v-if="loading.customer"
            small
          />
          <span v-else>Sync</span>
        </b-button>
        <b-button
          class="mt-2 ml-1"
          variant="danger"
          :disabled="loading.customer || loading2.customer || busy"
          @click="() => clearData('customer')"
        >
          <b-spinner
            v-if="loading2.customer"
            small
          />
          <span v-else>Clear Data</span>
        </b-button>
      </tab-content>

    </form-wizard>

  </div>
</template>

<script>
import { FormWizard, TabContent } from 'vue-form-wizard'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
// import { codeIcon } from './code'
import io from 'socket.io-client'
import { BButton, BSpinner } from 'bootstrap-vue'

export default {
  components: {
    FormWizard,
    TabContent,
    BButton,
    BSpinner,
    // eslint-disable-next-line vue/no-unused-components
    ToastificationContent,
  },
  data() {
    return {
      count: {},
      syncCount: {},
      syncStatus: {},
      loading: {},
      loading2: {},
      busy: false,
    }
  },
  async created() {
    const socket = io('https://custom-segment-socket.herokuapp.com/workspace')
    socket.on('connect', () => {
      socket.emit('workspaceId', 56788582584)
    })
    socket.on('sync', (type, message) => {
      this.syncStatus = { ...this.syncStatus, [type]: message }
    })
    this.update()
  },
  methods: {
    async clearData(type) {
      this.loading2[type] = true
      console.log(this.loading2[type])
      await this.$http.post('/data-manager/clear-data', { type })
      this.loading2[type] = false
      this.update()
    },
    async update() {
      this.busy = true
      let res = await this.$http.post('/analytics-manager/count', { table: 'order' })
      this.count = { ...this.count, orders: res.data.data.count }
      res = await this.$http.post('/analytics-manager/count', { table: 'product' })
      this.count = { ...this.count, products: res.data.data.count }
      res = await this.$http.post('/analytics-manager/count', { table: 'discount' })
      this.count = { ...this.count, discounts: res.data.data.count }
      res = await this.$http.post('/analytics-manager/count', { table: 'cart' })
      this.count = { ...this.count, carts: res.data.data.count }
      res = await this.$http.post('/analytics-manager/count', { table: 'draftorder' })
      this.count = { ...this.count, draftOrders: res.data.data.count }
      res = await this.$http.post('/analytics-manager/count', { table: 'location' })
      this.count = { ...this.count, locations: res.data.data.count }
      res = await this.$http.post('/analytics-manager/count', { table: 'customer' })
      this.count = { ...this.count, customers: res.data.data.count }
      res = await this.$http.get('/shopify-manager/count')
      this.syncCount = { ...this.syncCount, ...res.data.count }
      this.busy = false
    },
    async sync(table) {
      this.loading = { ...this.loading, [table]: true }
      await this.$http.post('/shopify-manager/sync', { table })
      this.loading = { ...this.loading, [table]: false }
      this.update()
    },
  },
}
</script>
