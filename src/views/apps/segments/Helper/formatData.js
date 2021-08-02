class formatData {
  static addCurrecncyFormat(currencyFormat) {
    this.currencyFormat = currencyFormat
  }

  static isDate(key) {
    const keys = ['created_at', 'updated_at', 'completed_at', 'closed_at', 'first_order_at', 'last_order_at', 'last_seen',
      'accepts_marketing_updated_at', 'ends_at', 'starts_at', 'invoice_sent_at', 'cancelled_at', 'processed_at',
      'published_at', 'valid_till', 'sent_time']
    return keys.includes(key)
  }

  static isBoolean(key) {
    const keys = ['gift_card', 'taxable', 'buyer_accepts_marketing', 'taxes_included', 'requires_shipping', 'accepts_marketing',
      'abandoned_cart', 'tax_exempt', 'verified_email', 'once_per_customer', 'custom', 'tracked', 'active',
      'legacy', 'test']
    return keys.includes(key)
  }

  static isAmount(key) {
    const keys = ['total_discount', 'total_discounts', 'discounts', 'tip', 'total_line_items_price', 'total_price', 'total_tax',
      'subtotal_price', 'total_duties', 'total_amount_spent', 'total_spent', 'current_total_discounts',
      'current_total_price', 'current_subtotal_price', 'current_total_tax', 'total_outstanding', 'total_tip_received',
      'discounted_price', 'line_price', 'original_line_price', 'original_price', 'price', 'variant_price', 'compare_at_price',
      'avg_order_price', 'compare_at_price', 'revenue', 'taxes_collected', 'total_tax_amount', 'IGST', 'average_customer_lifetime', 'average_order']
    return keys.includes(key)
  }

  static isAddress(key) {
    const keys = ['billing_address', 'shipping_address', 'addresses', 'default_address']
    return keys.includes(key)
  }

  static convertAddress(value) {
    let string = ''
    if (value.first_name) string += `${value.first_name} `
    if (value.last_name) string += `${value.last_name}, `
    if (value.address1) string += `${value.address1}, `
    if (value.address2) string += `${value.address2}, `
    if (value.zip) string += `${value.zip}, `
    if (value.city) string += `${value.city}, `
    if (value.province) string += `${value.province}, `
    if (value.state) string += `${value.state}, `
    if (value.country) string += `${value.country}, `
    if (string[string.length - 1] === ' ' && string[string.length - 2] === ',') {
      return string.substr(0, string.length - 2)
    }
    return string
  }

  static convertDate(value) {
    if (!value) {
      return ''
    }
    const date = `${new Date(value).toDateString()} (${new Date(value).toLocaleTimeString()})`
    return date
  }

  static transform({ key, value }) {
    const Date = this.isDate(key)
    const Boolean = this.isBoolean(key)
    const Amount = this.isAmount(key)
    const Address = this.isAddress(key)
    if (Date) {
      return this.convertDate(value)
    }
    if (Boolean) {
      return value ? 'Yes' : 'No'
    }
    if (Amount && value) {
      return `Rs ${Number(value).toFixed(2)}`
    }
    if (Address) {
      return this.convertAddress(value)
    }
    return value
  }

  static snakeCaseToNormalText(value) {
    const array = value.split('_')
    const string = array.map(str => str.charAt(0).toUpperCase() + str.slice(1)).join(' ')
    return string
  }
}

module.exports = formatData
