<template>
  <div id="app">
    <Navbar />
    <vs-row class="default-layout-container">
      <vs-col
        vs-type="flex"
        vs-justify="center"
        vs-align="center"
        vs-w="4"
        vs-offset="4"
      >
        <nuxt />
      </vs-col>
    </vs-row>
  </div>
</template>
<script>
import Navbar from '~/components/Navbar'

export default {
  components: {
    Navbar
  }
}
</script>
