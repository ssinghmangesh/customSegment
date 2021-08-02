const customeraggregate = require('./customeraggregate.json')
const customers = require('./customer.json')
const orders = require('./orders.json')
const discounts = require('./discounts.json')
const taxes = require('./taxes.json')
const draftorders = require('./draftorders.json')
const cart = require('./cart.json')
const visitors = require('./visitors.json')
const product = require('./products.json')
const events = require('./events.json')
const notifications = require('./notifications.json')
const sentEmail = require('./sentEmail.json')
const variantaggregate = require('./variantaggregate.json')
const inventoryitem = require('./inventoryitem.json')

const pageDefination = {
  customeraggregate,
  customers,
  orders,
  discounts,
  taxes,
  draftorders,
  cart,
  visitors,
  product,
  notifications,
  events,
  sentEmail,
  variantaggregate,
  inventoryitem,
}

module.exports = {
  pageDefination,
}
