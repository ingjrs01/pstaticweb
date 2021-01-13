<template>
  <div class="cotainer">
    <Cabecera />
    <div>
      <Slider />
      <nuxt-content :document="doc" />
      <p><NLink to="/" class="button--grey">Volver</NLink></p>
    </div>
  </div>
</template>

<script>
import Cabecera from "~/components/Cabecera";
import Slider from "~/components/Slider";

export default {
  components: {
    Cabecera,
    Slider,
  },
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
