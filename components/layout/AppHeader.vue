<template>
  <nav class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 p-8 shadow-md">
    <!-- <div>MiLogo</div> -->
    <nuxt-link to="/">
      <!-- Mi logo -->
      <img v-if="$store.state.darkMode" class="w-10 padding-0 margin-0 cursor-pointer" src="~/assets/images/logo-light.png" alt="darkmode_icon">
      <img v-if="!$store.state.darkMode" class="w-10 padding-0 margin-0 cursor-pointer" src="~/assets/images/logo-dark.png" alt="darkmode_icon">
    </nuxt-link>
    <ul class="flex space-between items-center space-x-8 uppercase font-semibold">
      <li>
        <!-- <input v-model="$store.state.darkMode" type="checkbox" @click="toggleDarkmode"> {{ $store.state.darkMode ? 'dark' : 'light' }} -->

        <span v-if="!$store.state.darkMode" @click="toggleDarkmode">
          <!-- <img class="w-8 padding-0 margin-0 cursor-pointer" src="~/assets/images/esoteric-icon-moon.png" alt="darkmode_icon"> -->
          <img class="w-8 padding-0 margin-0 cursor-pointer" src="~/assets/images/moon.png" alt="darkmode_icon">
        </span>
        <span v-if="$store.state.darkMode" @click="toggleDarkmode">
          <!-- <img class="w-8 padding-0 margin-0 cursor-pointer" src="~/assets/images/esoteric-icon-sun.png" alt="darkmode_icon"> -->
          <img class="w-8 padding-0 margin-0 cursor-pointer" src="~/assets/images/dom.png" alt="darkmode_icon">
        </span>
      </li>
      <li>
        <nuxt-link class="hover:text-gray-600 hover:underline p-2" to="/blog">
          Blog
        </nuxt-link>
      </li>
      <li>
        <nuxt-link class="hover:text-gray-600 hover:underline p-2" to="/projects">
          Proyectos
        </nuxt-link>
      </li>
      <li>
        <nuxt-link class="hover:text-gray-600 hover:underline p-2" to="/about">
          Sobre mi
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data () {
    return {
      darkMode: false
    }
  },
  methods: {
    ...mapMutations(['toggleDarkmode'])
  }
}
</script>

<style>

</style>
