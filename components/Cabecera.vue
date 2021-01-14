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
            $t("home")
          }}</nuxt-link>
          <!--<a href="" class="button">{{ $t("menu_portada") }}</a>-->
          <a href="" class="button">{{ $t("menu_vinos") }}</a>
          <a href="" class="button">{{ $t("menu_mapa") }}</a>
          <a href="" class="button">{{ $t("menu_contacto") }}</a>
        </div>
      </div>
    </nav>
  </header>
</template>