<template>
  <vs-popup
    v-if="show"
    class="holamundo"
    :title="issue.name"
    :active.sync="show"
  >
    <vs-row>
      <vs-col vs-w="6">
        <div>Date: <input v-model="date" type="date" /></div>
        <div style="max-width: 153px">
          <vs-input-number v-model="hours" label="Time:" :step="1" />
        </div>

        <vs-select v-model="activityId" placeholder="Select" label="Activity">
          <vs-select-item
            v-for="(item, i) in activities"
            :key="i"
            :value="item.id"
            :text="item.name"
          />
        </vs-select>

        <vs-input
          v-model="comment"
          label-placeholder="Comment"
          :danger="true"
        />
      </vs-col>
      <vs-col vs-w="6">
        <PrevoiusTracks @select="selectTemplate($event)" />
      </vs-col>
    </vs-row>
  </vs-popup>
</template>
<script>
import PrevoiusTracks from '~/components/tracker/PreviousTracks'

export default {
  components: {
    PrevoiusTracks
  },
  props: {
    issue: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      show: false,
      activityId: null,
      comment: '',
      hours: 0,
      date: Date.now()
    }
  },
  computed: {
    activities() {
      return this.$store.getters['issues/activities']
    }
  },
  methods: {
    open() {
      this.show = true
    },
    selectTemplate(template) {
      console.log(template)
    },
    logTime() {
      this.$store.dispatch('issues/logTime', {
        projectId: this.issue.projectId
      })
    }
  }
}
</script>
