<template>
    <div>
        <p
          v-for="(key, index) in Object.keys(data)"
          :key="index"
        >
            {{ key }}:  {{ data[key] }}
        </p>
    </div>
</template>
<script>
export default {
  props: {
    properties: {
      type: Object,
      required: true,
    },
  },
  computed: {
    data() {
      return this.properties
    },
  },
}
</script>
