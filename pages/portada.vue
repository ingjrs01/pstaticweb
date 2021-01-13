<template>
  <div class="container">
    <div>
      <h1>Hola desde arriba</h1>
      <p>Aqui el contenido</p>
      <p><NLink to="/" class="button--grey">Volver</NLink></p>
    </div>
  </div>
</template>

<script>
export default {
  asyncData() {
    return {
      name: process.server ? "server" : "client",
    };
  },
};
</script>

<style scoped>
</style>
