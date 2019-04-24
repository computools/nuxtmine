<template>
  <vs-navbar v-model="activeItem" class="nabarx">
    <div slot="title">
      <vs-navbar-title>
        Nuxtmine
      </vs-navbar-title>
    </div>

    <vs-navbar-item index="0">
      <a href="#">Home</a>
    </vs-navbar-item>
    <vs-navbar-item index="1">
      <a href="#">News</a>
    </vs-navbar-item>
    <vs-navbar-item index="2">
      <a href="#">Update</a>
    </vs-navbar-item>
  </vs-navbar>
</template>
<script>
export default {
  name: 'Navbar',
  data() {
    return {
      activeItem: false
    }
  }
}
</script>
