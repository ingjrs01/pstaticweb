<template>
  <header>
    <div class="has-text-right">
      <nuxt-link :to="switchLocalePath('en')">English</nuxt-link>
      <nuxt-link :to="switchLocalePath('es')">Español</nuxt-link>
      <nuxt-link :to="switchLocalePath('fr')">Frances</nuxt-link>
    </div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-itm" href="mipagina.io">
          <img src="~/assets/logo2.png" />
        </a>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <nuxt-link class="button" :to="localePath('/portada')">{{
            $t("menu_portada")
          }}</nuxt-link>
          <nuxt-link
            class="button"
            :to="localePath({ name: 'portada', hash: '#vinos' })"
            v-scroll-to="{ element: '#vinos' }"
            >{{ $t("menu_vinos") }}</nuxt-link
          >
          <!--<a href="" class="button">{{ $t("menu_vinos") }}</a>-->
          <a href="" class="button">{{ $t("menu_mapa") }}</a>
          <a href="" class="button">{{ $t("menu_contacto") }}</a>
        </div>
      </div>
    </nav>
  </header>
</template>