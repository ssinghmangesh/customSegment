<template>
<!-- eslint-disable -->
<div>
    <div>
      <span class="mr-1"><strong>When:</strong></span>
      <ul>
          <li 
            v-for="(item, index) in tag.trigger_points" 
            :key="index"
          >{{getLabel(item)}}</li>
      </ul>
    </div>
    <div>
      <span class="mr-1"><strong>If:</strong></span>
      <p class="mb-0 ml-3">Relation: {{tag.filters.relation}}</p>
      <ul>
          <li 
            v-for="(filter, index) in tag.filters.conditions" 
            :key="index"
          >
            <span>
                {{ filter.title }}  {{ filter.filterType }}
                {{ filter.values[0] }}
                <span
                v-for="(value, i) in filter.values.slice(1)"
                :key="i"
                >{{ value !== '' ? (filter.type !== 'dropdown' ? 'and ' : 'or ') + value : null }}
                </span>
            </span>
          </li>
      </ul>
    </div>
    <div>
      <span class="mr-1"><strong>Then:</strong></span>
      <span>{{ tag.then }}</span>
    </div>
    <div>
      <span class="mr-1"><strong>Else:</strong></span>
      <span>{{ tag.else }}</span>
    </div>
</div>
</template>

<script>
/* eslint-disable */
import triggerPoints from './TriggerPoints'

export default {
    props: {
        tag: {
            type: Object,
            default: () => {}
        }
    },
    computed: {
        whenOptions() {
            return triggerPoints[this.$route.params.type]
        }
    },
    methods: {
        getLabel(val) {
            return this.whenOptions.find(option => option.value === val).text
        }
    }
}
</script>