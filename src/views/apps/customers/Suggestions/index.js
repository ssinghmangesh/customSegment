const customeraggregate = require('./customeraggregate.json')
const customers = require('./customer.json')
const orders = require('./orders.json')
const discounts = require('./discounts.json')
const taxes = require('./taxes.json')
const draftorders = require('./draftorders.json')
const cart = require('./cart.json')
const visitors = require('./visitors.json')
const products = require('./products.json')
const events = require('./events.json')
const notifications = require('./notifications.json')
const sentEmail = require('./sentEmail.json')

const Suggestions = {
  customeraggregate,
  customers,
  orders,
  discounts,
  taxes,
  draftorders,
  cart,
  visitors,
  products,
  notifications,
  events,
  sentEmail,
}

module.exports = Suggestions
