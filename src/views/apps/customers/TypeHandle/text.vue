<template>


</template>
<script>
export default {
    props: {
        selectedFilter: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            filterType: 'contains',
            values: []
        }
    },

    methods: {
        appliedFilter() {
            const { filterType, values, selectedFilter }  = this
            this.$emit('appliedFilter', {
                filterType, values,
                ...selectedFilter
            })
        }
    }
}
</script>