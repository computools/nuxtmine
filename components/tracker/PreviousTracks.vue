<template>
  <div class="previous-tracks">
    <div
      v-if="!loaded"
      id="loaderContainer"
      class="fill-row-loading vs-con-loading__container"
      style="margin: auto;"
    >
      <div
        :class="{ activeLoading: !loaded }"
        class=" loading-example "
        @click="openLoading(type)"
      ></div>
    </div>
    dqwdqwdqwd
  </div>
</template>
<script>
export default {
  name: 'PreviousTracks',
  data() {
    return {
      loaded: false
    }
  },
  mounted() {
    this.$vs.loading({
      container: `#loaderContainer`
    })
  },
  methods: {
    select(track) {
      this.$emit('select', track)
    }
  }
}
</script>
