class formatData {

    static addCurrecncyFormat(currencyFormat) {
        this.currencyFormat = currencyFormat
    }
    isDate(key) {
        const keys = ['created_at', 'updated_at', 'accepts_marketing_updated_at']
        return keys.includes(key)
    }
    isBoolean(key) {
        const keys = ['accepts_marketing', 'updated_at']
        return keys.includes(key)
    }

    isAmount(key) {
        const keys = ['total_spent']
        return keys.includes(key)
    }
    
    transform({ key, value }) {

        const isDate = this.isDate(key)
        const isBoolean = this.isBoolean(key)
        const isAmount =  this.isAmount(key)
        if(isDate) {
            return value  //convert in date format   july 16, 2021
        }

        if(isBoolean) {
            return value ? 'Yes' : 'No'
        } else if(isAmount) {
            return value //add currency in front of value   "${{amount}}"
        } else if(key === 'default_address') {
            return 
            /**
             * 
             * { "id": 6374990741688, "zip": "", "city": "", "name": "", "phone": "", "company": "", "country": "India", "default": true, "address1": "", "address2": "", "province": "Andaman and Nicobar Islands", "last_name": "", "first_name": "", "customer_id": 5195819385016, "country_code": "IN", "country_name": "India", "province_code": "AN" }
             * 
             * mangesh singh, 
             * 678 254w65
             * 545674785
             * mumbai, 
             * state
             * country
             * pincode
             */

             return "mangesh singh, 678 254w65, 545674785, mumbai, , state, country, pincode"
        }
        else {
            return value
        }

        
    }
    snakeCaseToNormalText(value) {
        return '';
    }


}


// money_with_currency_format = > money with currency format


