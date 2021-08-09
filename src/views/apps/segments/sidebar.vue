<template>
  <b-card
    active
    title=""
  >
    <b-tabs>
      <b-tab title="Properties">
        <Properties
          :properties="row"
        />
      </b-tab>
      <b-tab
        v-if="type === 'customers'"
        title="Orders"
      >
        <CustomerOrder
          :customer="row"
        />
      </b-tab>
      <b-tab
        v-if="type === 'customers'"
        title="Purchased Items"
      >
        <PurchasedProduct
          :customer="row"
        />
      </b-tab>
      <b-tab
        v-if="type === 'customers'"
        title="Cart"
      >
        <CustomerCart
          :customer="row"
        />
      </b-tab>
      <b-tab
        v-if="type === 'customers'"
        title="Timeline"
      >
        <Timeline
          :customer="row"
        />
      </b-tab>
      <b-tab
        v-if="type === 'customers'"
        title="Recommendations"
      >
        <ProductRecommendations
          :recommendations="row"
          :customer-id="row.id"
        />
      </b-tab>
      <b-tab
        v-if="type === 'customers'"
        title="Notifications"
      >
        <Notifications
          :customer="row"
        />
      </b-tab>
      <b-tab
        v-if="type === 'orders'"
        title="Fulfillments"
      >
        <Fulfillments
          :order="row"
        />
      </b-tab>
      <b-tab
        v-if="type === 'orders'"
        title="Purchased Items"
      >
        <OrderProduct
          :order="row"
        />
      </b-tab>
      <b-tab
        v-if="type === 'orders'"
        title="Refunds"
      >
        <OrderRefund
          :order="row"
        />
      </b-tab>
      <b-tab
        v-if="type === 'orders'"
        title="Transactions"
      >
        <OrderTransaction
          :order="row"
        />
      </b-tab>
      <b-tab
        v-if="type === 'draftorders'"
        title="Purchased Items"
      >
        <DraftOrderProduct
          :draftorder="row"
        />
      </b-tab>
      <b-tab
        v-if="type === 'cart'"
        title="Purchased Items"
      >
        <CartProduct
          :cart="row"
        />
      </b-tab>
      <b-tab
        v-if="type === 'customers'"
        title="Tag Manager"
      >
        <CustomerTagManager
          :customer="row"
        />
      </b-tab>
      <b-tab
        v-if="type === 'orders'"
        title="Tag Manager"
      >
        <order-tag-manager
          :order="row"
        />
      </b-tab>
      <b-tab
        v-if="type === 'variantaggregate'"
        title="Tag Manager"
      >
        <product-tag-manager
          :variant="row"
        />
      </b-tab>
      <b-tab
        v-if="type === 'draftorders'"
        title="Tag Manager"
      >
        <draft-order-tag-manager
          :order="row"
        />
      </b-tab>
      <b-tab
        v-if="type === 'customers'"
        title="Aggregate"
      >
        <CustomerAggregate
          :customer="row"
        />
      </b-tab>
      <b-tab
        v-if="type === 'variantaggregate'"
        title="Aggregate"
      >
        <variant-aggregate
          :variant="row"
        />
      </b-tab>
    </b-tabs>
  </b-card>
</template>

<script>
import {
  BTabs, BTab, BCard,
} from 'bootstrap-vue'
import Properties from './Sidebar/Properties.vue'
import Timeline from './Sidebar/Timeline.vue'
import CustomerOrder from './Sidebar/CustomerOrder.vue'
import CustomerCart from './Sidebar/CustomerCart.vue'
import PurchasedProduct from './Sidebar/PurchasedProduct.vue'
import Fulfillments from './Sidebar/Fulfillments.vue'
import OrderProduct from './Sidebar/OrderProduct.vue'
import DraftOrderProduct from './Sidebar/DraftOrderProduct.vue'
import CartProduct from './Sidebar/CartProduct.vue'
import ProductRecommendations from './Sidebar/ProductRecommendations.vue'
import Notifications from './Sidebar/Notifications.vue'
import OrderRefund from './Sidebar/OrderRefund.vue'
import OrderTransaction from './Sidebar/OrderTransaction.vue'
import CustomerTagManager from './Sidebar/CustomerTagManager.vue'
import OrderTagManager from './Sidebar/OrderTagManager.vue'
import DraftOrderTagManager from './Sidebar/DraftOrderTagManager.vue'
import ProductTagManager from './Sidebar/ProductTagManager.vue'
import CustomerAggregate from './Sidebar/CustomerAggregate.vue'
import VariantAggregate from './Sidebar/VariantAggregate.vue'

export default {
  components: {
    BCard,
    BTabs,
    VariantAggregate,
    CustomerAggregate,
    CustomerTagManager,
    OrderTagManager,
    ProductTagManager,
    DraftOrderTagManager,
    BTab,
    Properties,
    Timeline,
    CustomerOrder,
    CustomerCart,
    PurchasedProduct,
    Fulfillments,
    OrderProduct,
    DraftOrderProduct,
    CartProduct,
    ProductRecommendations,
    Notifications,
    OrderRefund,
    OrderTransaction,
  },
  props: {
    row: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    type() {
      return this.$route.params.type
    },
  },
}
</script>
