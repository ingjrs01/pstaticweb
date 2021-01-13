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
    console.log(app.i18n.locale);
    //const posts = await $content(`${app.i18n.locale}/blog'`).fetch();
    console.log("Idioma detectado");
    console.debug(app);
    const doc = await $content(`${app.i18n.locale}/home`).fetch();

    return {
      doc,
    };
  },
};
</script>

<style scoped>
</style>
