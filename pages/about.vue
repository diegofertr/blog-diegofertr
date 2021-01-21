<template>
  <div class="container">
    <h1 class="text-3xl">
      Sobre mí!!
    </h1>
    <div class="my-8">
      <img :class="`${$store.state.darkMode ? 'border-gray-300' : 'border-gray-800'} w-56 border-2 shadow-2xl border-dashed h-56 object-cover rounded-full`" src="~/assets/images/myPic.png" alt="foto personal">
    </div>
    <div class="text-lg md:text-xl mx-0 md:mx-24 xl:mx-56 px-10 lg:px-20 text-justify">
      <p>
        <strong>Hola!!</strong>, me llamo <strong>Diego Fernando Ticona Ramos</strong>, tengo <strong>26 años</strong> y soy oriundo <strong>de La Paz, Bolivia</strong>. Estudié Informática en la Universidad Mayor de San Andrés obteniendo la mención de <strong>Ingeniería de Sistemas</strong>.
      </p>
      <p class="mt-8">
        Actualmente cuento con <strong>más de 3 años de experiencia en el desarrollo de soluciones digitales web y móvil</strong>, usando tecnologías open source y colaborando en equipos de desarrollo ágiles. <br><br>
        Me defino como un apasionado por mi carrera y por el aprendizaje autodidacta de tecnologías emergentes que surgen a medida que la tecnología evoluciona, me encanta los videojuegos, tanto jugarlos como en algun momento desarrollarlos.
      </p>
    </div>
    <p class="mt-10 text-2xl animate-bounce text-gray-600 font-poppinsMedium inline-flex">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-10 mr-2">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg> Contenido en desarrollo
    </p>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
