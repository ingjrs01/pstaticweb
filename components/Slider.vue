<template>
  <div>
    <VueSlickCarousel
      :arrows="true"
      :dots="true"
      :autoplay="true"
      :centerMode="false"
    >
      <div>
        <img src="~/assets/slider/uvas.jpg" alt="" />
      </div>
      <div><img src="~/assets/slider/corchos.jpg" alt="" /></div>
      <div><img src="~/assets/slider/vinedo.jpg" alt="" /></div>
    </VueSlickCarousel>
  </div>
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  data: function () {
    return {
      nombre: "Paquito",
    };
  },
};
</script>