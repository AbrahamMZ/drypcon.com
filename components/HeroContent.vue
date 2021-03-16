<template>
  <div class="pt-24">
    <div
      class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center"
    >
      <!--Left Col-->
      <div
        class="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left"
      >
        <p class="uppercase tracking-loose w-full">¿En busca en donde vivir?</p>
        <h1 class="my-4 text-5xl font-bold leading-tight">
          Te ayudamos en la construccion de tu nuevo Hogar
        </h1>
        <p class="leading-normal text-2xl mb-8">
          Somos la mejor solucion en el area de contruccion.
        </p>

        <!-- <button
          class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg"
        >
          Subscribe
        </button> -->
      </div>
      <!--Right Col-->
      <div class="w-full md:w-3/5 pb-6 text-center">
        <img class="w-full md:w-4/2 z-50" src="~assets/img/logo.png" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroContent'
}
</script>
