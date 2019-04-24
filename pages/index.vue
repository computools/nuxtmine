<template>
  <vs-row>
    <vs-col vs-w="12">
      <h1>Projects</h1>
      <Project
        v-for="(project, i) in projects"
        :key="i"
        :title="project.name"
        :issues="project.issues"
      />
    </vs-col>
  </vs-row>
</template>

<script>
import Project from '~/components/dashboard/Project'
export default {
  components: {
    Project
  },
  computed: {
    projects() {
      return this.$store.state.issues.projects
    }
  },
  created() {
    this.$store.dispatch('issues/fetchMyIssues')
  }
}
</script>
