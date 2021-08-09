<template>
<!-- eslint-disable -->
    <div>
        <b-button
            :disabled="loading"
            @click="updateTags"
        >
            Update Aggregate
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
            await this.$http.post('/data-manager/product/aggregate', { id: this.variant.id })
            this.loading = false
        }
    }
}
</script>