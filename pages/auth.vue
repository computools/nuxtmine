<template>
  <div class="auth-page">
    <vs-row vs-justify="center">
      <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="3">
        <vs-card>
          <div slot="header">
            <h3>Authorize</h3>
          </div>
          <vs-row vs-justify="space-between" vs-align="flex-end">
            <div>
              <vs-input v-model="token" label-placeholder="Token" />
            </div>
            <vs-button
              :color="error ? 'danger' : 'success'"
              type="border"
              @click="authorize"
              >Sign In</vs-button
            >
          </vs-row>
          <p class="error-label" v-text="error"></p>
        </vs-card>
      </vs-col>
    </vs-row>
  </div>
</template>
<script>
export default {
  name: 'Auth',
  layout: 'auth',
  data() {
    return {
      token: '',
      error: null
    }
  },
  created() {
    this.error = this.$route.query ? this.$route.query.error : null
  },
  methods: {
    async authorize() {
      await this.$store.dispatch('auth/authorize', this.token)
      this.$router.replace('/')
    }
  }
}
</script>
