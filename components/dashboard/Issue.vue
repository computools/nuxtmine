<template>
  <vs-list-item :title="issue.name" :subtitle="issue.tracked">
    <vs-button
      color="primary"
      type="flat"
      icon="av_timer"
      @click="$refs.tracker.open()"
    ></vs-button>
    <TimeTrackerModal ref="tracker" :issue="issue" />
  </vs-list-item>
</template>
<script>
import TimeTrackerModal from '../modals/TimeTrackerModal'

export default {
  name: 'Issue',
  components: {
    TimeTrackerModal
  },
  props: {
    issue: {
      type: Object,
      required: true
    }
  }
}
</script>
