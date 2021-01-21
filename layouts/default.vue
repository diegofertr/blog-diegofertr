<template>
  <div :class="$store.state.darkMode ? 'main-dark' : 'main-light'">
    <AppHeader />
    <Nuxt />
  </div>
</template>

<script>
import AppHeader from '../components/layout/AppHeader'

export default {
  components: {
    AppHeader
  }
}
</script>

<style>

</style>
