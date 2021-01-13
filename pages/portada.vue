<template>
  <div class="cotainer">
    <div>
      <h1>Hola desde arriba</h1>
      <h2>{{ name }}</h2>
      <p>Aqui el contenido</p>
      <nuxt-content :document="doc" />
      <p><NLink to="/" class="button--grey">Volver</NLink></p>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      name: "lalala",
    };
  },
  async asyncData({ $content, params }) {
    const doc = await $content("home").fetch();

    return {
      doc,
    };
  },
};
</script>

<style scoped>
</style>
