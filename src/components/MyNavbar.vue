<template >
  <header>
    <v-app-bar app color="primary" dark>
      <router-link to="/">
        <v-img
          alt="Sport Form Logo"
          class="shrink mr-2"
          contain
          src="@/assets/logo.svg"
          transition="scale-transition"
          width="40"
        />
      </router-link>
      <v-toolbar-title @click="goHome"  class="d-flex align-center">Сайт о спорте</v-toolbar-title>
    </v-app-bar>
  </header>
</template>
<script>
export default {
  data() {
  },
  methods: {
    goHome() {
      if (this.$route.path !== '/') {
        this.$router.push('/');
      }
    }
  }
}
</script>
<style scoped>
  .d-flex{
    cursor: pointer;
  }
</style>