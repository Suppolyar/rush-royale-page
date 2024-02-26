<template>
  <div
    class="relative h-screen w-screen overflow-hidden bg-rush-royale bg-cover bg-center bg-no-repeat"
  >
    <MyGamesLogo class="absolute right-[80px] top-[80px]" />
    <div
      class="flex h-full flex-col items-center justify-center py-20 text-lg 2xl:gap-10"
    >
      <img :src="imgUrl" alt="Rush Royale Logo" class="h-[269px] w-[277px]" />

      <InfoBlock class="relative" frame="union-frame">
        Игра больше не публикуется на площадке. Если вы играли в проект ранее,
        перейдите на сайт разработчика и авторизуйтесь, чтобы сохранить своего
        персонажа
        <br />
        <br />
        Нажимая "Перейти" вы соглашаетесь с передачей ваших данных компании
        MY.GAMES B.V. и их обработкой согласно Политике конфиденциальности
        портала MY.GAMES
        <img
          :src="mageFire"
          alt="mage fire"
          class="absolute bottom-[-400px] left-[-500px] max-h-[70vh]"
        />
      </InfoBlock>
      <BaseButton />
      <InfoBlock frame="frame">
        Скачивая MY.GAMES Launcher вы соглашаетесь с передачей ваших данных
        компании MY.GAMES B.V. и их обработкой согласно Политике
        конфиденциальности портала MY.GAMES
      </InfoBlock>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseButton from "../components/BaseButton.vue";
import InfoBlock from "../components/InfoBlock.vue";
import imgUrl from "../assets/main-logo-rr.png";
import mageFire from "../assets/mage-fire.png";
import MyGamesLogo from "../assets/my-games-logo.vue";
import BaseFooter from "../components/footer/BaseFooter.vue";
</script>

<style scoped></style>
