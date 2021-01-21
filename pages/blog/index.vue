<template>
  <div class="container">
    <h1 class="text-3xl">
      Blog
    </h1>
    <!-- <hr> -->
    <div class="mt-2 grid grid-cols-1 lg:grid-cols-2 gap-10 px-5">
      <div v-for="(post, index) in posts" :key="index" class="">
        <div :class="`max-w-4xl px-10 my-4 py-6 ${$store.state.darkMode ? 'bg-black bg-opacity-75' : 'bg-white bg-opacity-75'} rounded-lg shadow-md transform duration-500 hover:-translate-y-1 hover:shadow-2xl`">
          <div class="flex justify-between items-center">
            <!-- <span class="font-light text-gray-600">mar 10, 2019</span> -->
            <span class="font-light text-gray-600">{{ post.year }}</span>
            <!-- <span class="font-light text-gray-600">{{ createdAt(post.createdAt) }}</span> -->
            <span class="px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500 cursor-pointer">{{ post.type }}</span>
          </div>
          <div class="mt-2 text-left">
            <nuxt-link :class="`text-2xl ${$store.state.darkMode ? 'text-gray-300 hover:text-gray-400' : 'text-gray-700 hover:text-gray-600'} font-bold cursor-pointer`" :to="`/blog/${post.slug}`">
              {{ post.title }}
            </nuxt-link>
            <p :class="`mt-2 ${$store.state.darkMode ? 'text-gray-400' : 'text-gray-600'}`">
              {{ post.description }}
            </p>
          </div>
          <div class="flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center mt-4">
            <div>
              <span v-for="tag in post.tags" :key="tag" :class="`${$store.state.darkMode ? 'bg-gray-700 text-gray-400' : 'bg-gray-300 text-gray-700'} px-3 py-1 mr-1 text-center rounded-full text-xs`">
                #{{ tag }}
              </span>
              <!-- <a class="flex items-center" href="#">
                <img class="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block" src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=373&q=80" alt="avatar">
                <h1 class="text-gray-700 font-bold">diegofertr</h1>
              </a> -->
            </div>
            <nuxt-link class="text-blue-600 hover:text-blue-400 cursor-pointer uppercase inline-flex" :to="`/blog/${post.slug}`">
              Leer más
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="ml-2 w-5">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const posts = await $content('articles').fetch()

    return {
      posts
    }
  },
  methods: {
    toPost (post) {
      // console.log('go to post :: ', post)
      this.$router.push(`/blog/${post.slug}`)
    },
    createdAt (createdAt) {
      const fecha = new Date(createdAt)
      return `${fecha.getDate()}/${fecha.getMonth() + 1}/${fecha.getFullYear()}`
    }
  }
  // data () {
  //   return {
  //     posts: []
  //   }
  // },
  // mounted () {
  //   this.getPosts()
  // },
  // methods: {
  //   async getPosts () {
  //     this.posts = await this.$content('articles').fetch()
  //     console.log('posts disponibles:: ', this.posts)
  //   }
  // }
}
</script>

<style>

</style>
