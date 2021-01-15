<template>
  <div class="cotainer">
    <Cabecera />
    <div>
      <Slider />
      <nuxt-content :document="doc" />
    </div>
    <Footer />
  </div>
</template>

<script>
import Cabecera from "~/components/Cabecera";
import Slider from "~/components/Slider";
import Footer from "~/components/Footer";

export default {
  components: {
    Cabecera,
    Slider,
    Footer,
  },
  data: function () {
    return {
      name: "lalala",
    };
  },
  async asyncData(context) {
    const { $content, app } = context;
    console.log("Probando cosas");
    console.log(app.i18n.locale);
    const doc = await $content(`${app.i18n.locale}/home`).fetch();

    return {
      doc,
    };
  },
};
</script>

<style scoped>
</style>
