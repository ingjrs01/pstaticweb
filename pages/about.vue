<template>
  <div class="container">
    <div>
      <h1>
        Hola from <span class="name">{{ name }}</span
        >.
      </h1>
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
