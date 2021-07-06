<template>
  <b-card-code
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
        title="Notification"
      >
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
      <b-tab>
        <b-card-text>
          Chocolate croissant cupcake croissant jelly donut. Cheesecake toffee apple pie chocolate bar biscuit tart croissant. Lemon drops danish cookie. Oat cake macaroon icing tart lollipop cookie sweet bear claw.
        </b-card-text>
        <b-card-text>
          Carrot cake dragée chocolate. Lemon drops ice cream wafer gummies dragée. Chocolate bar liquorice cheesecake cookie chupa chups marshmallow oat cake biscuit. Dessert toffee fruitcake ice cream powder tootsie roll cake.
        </b-card-text>
      </b-tab>
    </b-tabs>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BTabs, BTab, BCardText } from 'bootstrap-vue'
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

export default {
  components: {
    BCardCode,
    BTabs,
    BCardText,
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
