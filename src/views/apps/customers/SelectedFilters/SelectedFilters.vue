<template>
  <div
      class="cs-filter-group"
  >
    <div
      v-for="(filter, index) in filters"
      :key="filter.filterType + filter.values[0]"
      class="cs-filter-group-item"
    >
      <span
        class="filter"
        @click="() => editFilter(filter, index)"
      >
        {{ filter.title }}  {{ filter.filterType }}
        {{ filter.values[0] }}
        <span
          v-for="(value, i) in filter.values.slice(1)"
          :key="i"
        >{{ value !== '' ? 'and ' + value : null }}
        </span>
      </span>
      <feather-icon
        class="cancel"
        icon="XIcon"
        @click="() => removeFilter(index)"
      />
    </div>
  </div>
</template>
<script>

export default {
  props: {
    selectedFilters: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    filters() {
      return this.selectedFilters
    },
  },
  methods: {
    editFilter(filter, index) {
      this.$emit('editFilter', { filter, index })
    },
    removeFilter(index) {
      this.$emit('removeFilter', index)
    },
  },
}
</script>

<style>
.cancel{
    cursor: pointer;
    margin-left: 20px;
}
.filter{
    cursor: pointer;
}
.cs-filter-group {
    display: flex;
    flex-direction: row;
}
.cs-filter-group-item {
  display: flex;
  align-items: center;
  padding: 6px 8px;
  border: 1px solid;
  border-radius: 5px;
  margin-right: 12px;
}
</style>
