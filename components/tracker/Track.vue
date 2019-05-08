<template>
  <div class="track-item">
    <div class="info">
      <div class="date">{{ track.spent_on }} - {{ activity }}</div>
      <div class="comment">
        <h5>{{ track.hours }}h</h5>
        {{ track.comments }}
      </div>
    </div>
    <div class="actions">
      <vs-button
        color="primary"
        type="line"
        icon="play_for_work"
        @click="$emit('select')"
      ></vs-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TrackItem',
  props: {
    track: {
      type: Object,
      required: true
    }
  },
  computed: {
    activity() {
      return this.$store.getters['issues/activities'].find(
        a => a.id === this.track.activity.id
      ).name
    }
  }
}
</script>
