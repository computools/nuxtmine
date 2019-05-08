<template>
  <vs-popup
    class="holamundo"
    :title="'Issue - ' + issue.name"
    :active.sync="show"
  >
    <vs-row>
      <vs-col vs-w="6">
        <div class="tracker-input">
          <div>
            Date:
            <input
              :value="date || currentDate"
              type="date"
              @input="date = $event.target.value"
            />
          </div>
        </div>
        <div class="tracker-input">
          <vs-select
            v-model="activityId"
            style="margin-top: 12px"
            placeholder="Activity"
          >
            <vs-select-item
              v-for="(item, i) in activities"
              :key="i"
              :value="item.id"
              :text="item.name"
            />
          </vs-select>
          <p v-if="showErrors && activityId === null" class="error">
            You need to choose an activity
          </p>
        </div>
        <div class="tracker-input">
          <div
            class="time-input-container"
            :class="{ 'time-error': showErrors && $v.hours.$error }"
          >
            <vs-input-number
              v-model.number="$v.hours.$model"
              label="Time:"
              :step="1"
            />
            <p v-if="showErrors && $v.hours.$error" class="error">
              Time value is invalid
            </p>
          </div>
        </div>

        <div class="tracker-input">
          <vs-input
            v-model="$v.comment.$model"
            label-placeholder="Comment"
            :danger="showErrors && $v.comment.$invalid"
          />
        </div>
        <vs-button color="success" type="flat" icon="done" @click="submit()"
          >Track time</vs-button
        >
      </vs-col>
      <vs-col vs-w="6">
        <PrevoiusTracks
          v-if="show"
          :issue-id="issue.id"
          @select="selectTemplate($event)"
        />
      </vs-col>
    </vs-row>
  </vs-popup>
</template>
<script>
import PrevoiusTracks from '~/components/tracker/PreviousTracks'
import { required, maxLength, between } from 'vuelidate/lib/validators'
import moment from 'moment'

export default {
  validations: {
    hours: {
      required,
      between: between(0.1, 24)
    },
    comment: {
      required,
      maxLength: maxLength(240)
    }
  },
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
      date: null,
      showErrors: false
    }
  },
  computed: {
    activities() {
      return this.$store.getters['issues/activities']
    },
    currentDate() {
      return moment().format('YYYY-MM-DD')
    }
  },
  methods: {
    open() {
      this.show = true
    },
    selectTemplate(template) {
      this.hours = template.hours
      this.activityId = template.activity.id
      this.comment = template.comments
    },
    submit() {
      if (this.$v.$invalid) {
        this.showErrors = true
      } else {
        this.$store
          .dispatch('issues/logTime', {
            projectId: this.issue.projectId,
            issueId: this.issue.id,
            comment: this.comment,
            hours: this.hours,
            date: this.date || this.currentDate,
            activityId: this.activityId
          })
          .then(() => {
            this.comment = ''
            this.hours = 0
            this.activityId = null
            this.show = false
          })
      }
    }
  }
}
</script>
