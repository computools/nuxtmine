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
    <div v-else>
      <h5>Previous logs:</h5>
      <div class="tracks-container">
        <Track
          v-for="(log, i) of logs"
          :key="i"
          :track="log"
          @select="$emit('select', log)"
        />
      </div>
    </div>
  </div>
</template>
<script>
import Track from './Track'
export default {
  name: 'PreviousTracks',
  components: {
    Track
  },
  props: {
    issueId: {
      type: Number,
      required: true
    }
  },
  data() {
    return {}
  },
  computed: {
    loaded() {
      return this.$store.state.issues.previousLogs.issue === this.issueId
    },
    logs() {
      return this.$store.state.issues.previousLogs.logs
    }
  },
  mounted() {
    if (!this.loaded) {
      this.$vs.loading({
        container: `#loaderContainer`
      })
    }
    // setTimeout(() => {
    this.$store.dispatch('issues/getLastLogsForIssue', this.issueId)
    // }, 100)
  }
}
</script>
