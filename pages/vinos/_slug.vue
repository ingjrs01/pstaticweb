<template>
  <div>
    <Cabecera />
    <h1 class="title">Para mi y para ti</h1>
    <nuxt-content :document="doc" />
  </div>
</template>

<script>
import Cabecera from "~/components/Cabecera";
export default {
  components: {
    Cabecera,
  },
  async asyncData(context) {
    //const slug = params.slug; // Cuando llamas /abc, el slug va a ser "abc"
    const { $content, app, params } = context;
    console.log(app.i18n.locale);
    console.log(params.slug);
    const doc = await $content(`${app.i18n.locale}/${params.slug}`).fetch();
    return {
      doc,
    };
    //return { slug };
  },
};
</script>
