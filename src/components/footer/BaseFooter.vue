<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__wrapper">
        <p class="text text_size-xs text_gray text_uppercase footer__links">
          <a
            class="link"
            href="https://documentation.my.games/terms/mygames_tou"
          >
            TERMS OF USE</a
          >
          -
          <a
            class="link"
            href="https://documentation.my.games/terms/mygames_privacy"
          >
            PRIVACY POLICY</a
          >
          -
          <a class="link" href="https://documentation.my.games/terms/imprint">
            IMPRINT</a
          >
          -
          <a
            class="link"
            href="https://documentation.my.games/terms/mygames_eula"
          >
            EULA
          </a>
        </p>
        <p class="text text_size-xs text_gray text_uppercase footer__copyright">
          © 2024 MY.GAMES B.V. All rights reserved. All trademarks are the
          property of their respective owners.
        </p>

        <a href="https://my.games/" class="my-games-logo footer__mg-logo">
          <MyGamesLogo class="my-games-logo__content" />
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import MyGamesLogo from "../../assets/my-games-logo.vue";
</script>

<style src="../footer/style.scss"></style>
