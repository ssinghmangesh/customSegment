<template>
  <b-card-code
    active
    title="Details"
  >
    <b-tabs>
      <b-tab title="Properties">
        <p
          v-for="(key, index) in Object.keys(row)"
          :key="index"
        >
          {{ key }}:  {{ row[key] }}
        </p>
      </b-tab>
      <b-tab
        title="Service"
      >
        <b-card-text>
          Biscuit macaroon sugar plum sesame snaps oat cake halvah fruitcake pudding cotton candy. Cheesecake tart wafer soufflé. Chocolate marzipan donut pie soufflé dragée cheesecake. Gummi bears dessert croissant chocolate jujubes fruitcake. Pie cupcake halvah.
        </b-card-text>
        <b-card-text>Tiramisu carrot cake marzipan sugar plum powder marzipan sugar plum bonbon powder. Macaroon jujubes ice cream sugar plum lollipop wafer caramels. Cheesecake chocolate tart cake gingerbread fruitcake cake candy jelly-o. Candy cookie lollipop. Wafer lemon drops chocolate cake gummi bears.</b-card-text>
      </b-tab>
      <b-tab
        title="Disabled"
      >
        <b-card-text>
          Carrot cake dragée chocolate.
        </b-card-text>
      </b-tab>
      <b-tab title="Account">
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

export default {
  components: {
    BCardCode,
    BTabs,
    BCardText,
    BTab,
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
