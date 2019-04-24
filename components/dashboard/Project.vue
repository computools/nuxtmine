<template>
  <vs-list>
    <vs-list-header :title="title" color="primary"></vs-list-header>
    <Issue v-for="(issue, i) of issues" :key="i" :issue="issue" />
  </vs-list>
</template>
<script>
import Issue from './Issue'
export default {
  name: 'Project',
  components: {
    Issue
  },
  props: {
    title: {
      type: String,
      default: 'Title'
    },
    issues: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {}
  }
}
</script>
