<template>
  <div :class="`mx-0 sm:mx-10 md:mx-20 lg:mx-24 xl:mx-48 p-10 rounded-lg bg-opacity-75 ${$store.state.darkMode ? 'bg-gray-900' : 'bg-gray-100'}`">
    <div class="flex justify-between">
      <nuxt-link class="text-lg font-poppinsMedium inline-flex items-center hover:text-gray-700 focus:outline-none" to="/blog">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 mr-1">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
        atrás
      </nuxt-link>

      <span v-if="!$store.state.darkMode" @click="toggleDarkmode">
        <!-- <img class="w-8 padding-0 margin-0 cursor-pointer" src="~/assets/images/esoteric-icon-moon.png" alt="darkmode_icon"> -->
        <img class="w-8 padding-0 margin-0 cursor-pointer" src="~/assets/images/moon.png" alt="darkmode_icon">
      </span>
      <span v-if="$store.state.darkMode" @click="toggleDarkmode">
        <!-- <img class="w-8 padding-0 margin-0 cursor-pointer" src="~/assets/images/esoteric-icon-sun.png" alt="darkmode_icon"> -->
        <img class="w-8 padding-0 margin-0 cursor-pointer" src="~/assets/images/dom.png" alt="darkmode_icon">
      </span>
    </div>
    <div class="mt-10 bg-opacity-75">
      <!-- <div class="flex justify-between">
      </div> -->
      <h1 class="text-4xl text-center mb-5 font-poppinsBold">
        {{ post.title }}
      </h1>
      <img class="h-40 w-full shadow-2xl rounded-md object-cover object-center opacity-50" :src="require(`~/assets/images/${post.img}`)" :alt="`${post.title}`">
      <div class="my-5 border-b border-gray-400 pb-2">
        <span class="font-poppinsSemiBold ml-2">{{ post.year }}</span>
        <!-- <span class="font-poppinsSemiBold">Creado el: {{ createdAt }}</span> -->
      </div>
      <nuxt-content :document="post" />
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  layout: 'article',
  async asyncData ({ $content, route }) {
    const { slug } = route.params
    // console.log(slug)
    const data = await $content('articles').where({ slug }).fetch()
    const post = data[0]
    // console.log('post obtenido', post)

    return {
      post
    }
  },
  computed: {
    createdAt () {
      const fecha = new Date(this.post.createdAt)
      return `${fecha.getDate()}/${fecha.getMonth() + 1}/${fecha.getFullYear()}`
    }
  },
  methods: {
    ...mapMutations(['toggleDarkmode']),
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang='scss'>
$secondary: #030303;
$screen-xs:           375px;
$screen-sm:           768px;
$screen-md:           992px;
$screen-lg:           1140px;
$screen-xlg:          1900px;

// $screens: "xxs" false,
//           "xs" $screen-xs,
//           "sm" $screen-sm,
//           "md" $screen-md,
//           "lg" $screen-lg;

.nuxt-content {
  @media (min-width: $screen-sm){
    padding: 5.2rem 0;
    font-size: 19px;
  }

  h1 {
    @apply text-2xl;
    // @apply text-primary;
    @apply font-poppinsBold;
    @apply mt-8;
  }

  h2 {
    padding-bottom: 3.2rem;
    padding-bottom: 2rem;

    @media (max-width: $screen-sm){
      font-size: 2rem;
    }
  }

  h3 {
    font-size: 2.2rem;
    padding-bottom: 2rem;
  }

  li {
    @apply mx-10;
    list-style-type: initial;
  }

  p {
    @apply my-10;
    @apply tracking-wide;
    @apply leading-relaxed;
  }

  a {
    @apply text-blue-500;
  }

  div pre {
    // display: inline-block;
    padding-right: 10em;
    padding-top: 3rem;
    border-radius: 6px;
    // background: #1d262f;
    background-image: url('data:image/svg+xml;utf8, <svg xmlns="http://www.w3.org/2000/svg" width="54" height="14" viewBox="0 0 54 14"><g fill="none" fillRule="evenodd" transform="translate(1 1)"><circle cx="6" cy="6" r="6" fill="%23FF5F56" stroke="%23E0443E" strokeWidth=".5" /><circle cx="26" cy="6" r="6" fill="%23FFBD2E" stroke="%23DEA123" strokeWidth=".5" /><circle cx="46" cy="6" r="6" fill="%2327C93F" stroke="%231AAB29" strokeWidth=".5" /></g></svg>');
    background-repeat: no-repeat;
    background-position: 16px 16px;
    box-shadow: 2px 2px 15px 0px rgba(50, 50, 50, 0.75);
  }

  /**
 * prism.js Twilight theme
 * Based (more or less) on the Twilight theme originally of Textmate fame.
 * @author Remy Bach
 */
  code,
  pre {
    color: white;
    background: none;
    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    text-align: left;
    text-shadow: 0 -.1em .2em black;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;
    text-shadow: 0 0 transparent;

    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;

    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  pre,
  :not(pre) > code {
    // background: hsl(0, 0%, 8%); /* #141414 */
    @apply bg-gray-900;
  }

  /* Code blocks */
  pre {
    border-radius: .5em;
    border: .15em solid hsl(0, 0%, 33%); /* #282A2B */
    box-shadow: .5px .5px .5em black inset;
    margin: .5em 0;
    overflow: auto;
    padding: 1em;
  }

  pre::-moz-selection {
    /* Firefox */
    background: hsl(200, 4%, 16%); /* #282A2B */
  }

  pre::selection {
    /* Safari */
    background: hsl(200, 4%, 16%); /* #282A2B */
  }

  /* Text Selection colour */
  pre::-moz-selection, pre ::-moz-selection,
  code::-moz-selection, code ::-moz-selection {
    text-shadow: none;
    background: hsla(0, 0%, 93%, 0.15); /* #EDEDED */
  }

  pre::selection, pre ::selection,
  code::selection, code ::selection {
    text-shadow: none;
    background: hsla(0, 0%, 93%, 0.15); /* #EDEDED */
  }

  /* Inline code */
  :not(pre) > code {
    border-radius: .3em;
    box-shadow: 1px 1px .3em -.1em black inset;
    padding: .18em .2em;
    white-space: normal;
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: hsl(0, 0%, 47%); /* #777777 */
  }

  .token.punctuation {
    opacity: .7;
  }

  .namespace {
    opacity: .7;
  }

  .token.tag,
  .token.boolean,
  .token.number,
  .token.deleted {
    color: hsl(14, 58%, 55%); /* #CF6A4C */
  }

  .token.keyword,
  .token.property,
  .token.selector,
  .token.constant,
  .token.symbol,
  .token.builtin {
    color: hsl(53, 89%, 79%); /* #F9EE98 */
  }

  .token.attr-name,
  .token.attr-value,
  .token.string,
  .token.char,
  .token.operator,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string,
  .token.variable,
  .token.inserted {
    color: hsl(76, 21%, 52%); /* #8F9D6A */
    background: transparent;
  }

  .token.atrule {
    color: hsl(218, 22%, 55%); /* #7587A6 */
  }

  .token.regex,
  .token.important {
    color: hsl(42, 75%, 65%); /* #E9C062 */
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }
  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }

  pre[data-line] {
    padding: 1em 0 1em 3em;
    position: relative;
  }

  /* Markup */
  .language-markup .token.tag,
  .language-markup .token.attr-name,
  .language-markup .token.punctuation {
    color: hsl(33, 33%, 52%); /* #AC885B */
  }

  /* Make the tokens sit above the line highlight so the colours don't look faded. */
  .token {
    position: relative;
    z-index: 1;
  }

  .line-highlight {
    background: hsla(0, 0%, 33%, 0.25); /* #545454 */
    background: linear-gradient(to right, hsla(0, 0%, 33%, .1) 70%, hsla(0, 0%, 33%, 0)); /* #545454 */
    border-bottom: 1px dashed hsl(0, 0%, 33%); /* #545454 */
    border-top: 1px dashed hsl(0, 0%, 33%); /* #545454 */
    left: 0;
    line-height: inherit;
    margin-top: 0.75em; /* Same as .prism’s padding-top */
    padding: inherit 0;
    pointer-events: none;
    position: absolute;
    right: 0;
    white-space: pre;
    z-index: 0;
  }

  .line-highlight:before,
  .line-highlight[data-end]:after {
    background-color: hsl(215, 15%, 59%); /* #8794A6 */
    border-radius: 999px;
    box-shadow: 0 1px white;
    color: hsl(24, 20%, 95%); /* #F5F2F0 */
    content: attr(data-start);
    font: bold 65%/1.5 sans-serif;
    left: .6em;
    min-width: 1em;
    padding: 0 .5em;
    position: absolute;
    text-align: center;
    text-shadow: none;
    top: .4em;
    vertical-align: .3em;
  }

  .line-highlight[data-end]:after {
    bottom: .4em;
    content: attr(data-end);
    top: auto;
  }
}
</style>
