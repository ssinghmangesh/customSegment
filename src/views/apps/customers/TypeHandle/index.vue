<template>
    <text-handle 
        v-if="type === 'text'"
        :selectedFilter="selectedFilter"
        @appliedFilter="appliedFilter"
    />
    <number-handle v-else-if="type === 'number'"/>
    <boolean-handle v-else-if="type === 'boolean'"/>
    <dropdown-handle v-if="type === 'dropdown'"/>
</template>
<script>
export default {
    props: {
        selectedFilter: {
            type: Object,
            required: true,
        },
    },
    computed: {
        type() {
            return this.selectedFilter.type
        },
    },
    methods: {
        appliedFilter(data) {
            this.$emit('appliedFilter', data)
        },
    }
}
</script>

