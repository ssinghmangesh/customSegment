<template>
  <b-card-code
    active
    title="Details"
  >
    <b-tabs>
      <b-tab title="Properties">
        <Properties
          :properties="row"
        />
      </b-tab>
      <b-tab
        title="Orders"
      >
        <CustomerOrder
          :customer="row"
        />
      </b-tab>
      <b-tab
        title="Purchased Items"
      >
        <PurchasedProduct
          :customer="row"
        />
      </b-tab>
      <b-tab
        title="Cart"
      >
        <CustomerCart
          :customer="row"
        />
      </b-tab>
      <b-tab title="Timeline">
        <Timeline
          :customer="row"
        />
      </b-tab>
      <b-tab title="Notification">
        <b-card-text>
          Chocolate croissant cupcake croissant jelly donut. Cheesecake toffee apple pie chocolate bar biscuit tart croissant. Lemon drops danish cookie. Oat cake macaroon icing tart lollipop cookie sweet bear claw.
        </b-card-text>
        <b-card-text>
          Carrot cake dragée chocolate. Lemon drops ice cream wafer gummies dragée. Chocolate bar liquorice cheesecake cookie chupa chups marshmallow oat cake biscuit. Dessert toffee fruitcake ice cream powder tootsie roll cake.
        </b-card-text>
      </b-tab>
    </b-tabs>

    <template #code>
      {{ codeDefault }}
    </template>
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
  },
  props: {
    row: {
      type: Object,
      default: () => {},
    },
  },
//   data() {
//     return {
//       codeDefault,
//     }
//   },
}
</script>
