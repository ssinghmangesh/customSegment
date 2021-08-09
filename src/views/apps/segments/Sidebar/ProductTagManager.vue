<template>
<!-- eslint-disable -->
    <div>
        <b-button
            :disabled="loading"
            @click="updateTags"
        >
            Update Tags
        </b-button>
    </div>
</template>

<script>
/* eslint-disable */
import { BButton } from 'bootstrap-vue'

export default {
    components:{
        BButton,
    },
    props: {
        variant: {
            type: Object,
            default: () => {}
        }
    },
    data() {
        return {
            loading: false
        }
    },
    methods: {
        async updateTags() {
            this.loading = true
            const filters = {
                conditions: [{
                    columnName: 'id',
                    dataType: 'numeric',
                    filterType: 'equal_to',
                    values: [this.variant.product_id]
                }]
            }
            await this.$http.post('/tag-manager/apply', { filters, type: 'product' })
            this.loading = false
        }
    }
}
</script>