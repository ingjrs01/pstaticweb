<template>
  <div class="cotainer">
    <Cabecera />
    <div>
      <Slider />
      <nuxt-content :document="doc" />
      <div>
        <p>Despues de esto va lo importante</p>
        {{ $t("welcome") }}
        <p>Fin</p>
      </div>
    </div>
    pie de página
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
  async asyncData(context) {
    const { $content, app } = context;
    const doc = await $content(`${app.i18n.locale}/home`).fetch();

    return {
      doc,
    };
  },
};
</script>

<style scoped>
</style>
