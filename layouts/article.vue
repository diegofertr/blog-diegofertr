<template>
  <div :class="$store.state.darkMode ? 'main-dark' : 'main-light'">
    <Nuxt />
  </div>
</template>

<script>
export default {

}
</script>

<style>
</style>
