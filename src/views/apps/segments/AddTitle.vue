<template>
  <div>
    <b-form-input
      v-model="title"
      placeholder="Title"
    />
    <b-button
      v-ripple.400="'rgba(255, 255, 255, 0.15)'"
      variant="primary"
      class="button"
      @click="add"
    >
      ADD
    </b-button>
  </div>
</template>

<script>
import {
  BFormInput,
  // BFormInput,
  BButton,
} from 'bootstrap-vue'

export default {
  components: {
    BFormInput,
    BButton,
  },
  data() {
    return {
      title: '',
    }
  },
  computed: {
    filters() {
      return this.selectedFilters
    },
    type() {
      return this.$route.params.type
    },
  },
  methods: {
    add() {
      this.$emit('add', this.title)
    },
  },
}
</script>
<style lang="scss" >
.button{
  margin-top: 10px;
}
</style>
