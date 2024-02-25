<template>
  <div
    class="relative h-screen w-screen bg-rush-royale bg-cover bg-center bg-no-repeat"
  >
    <img
      :src="mageFire"
      alt="mage fire"
      class="absolute bottom-0 left-0 z-0 max-h-[70vh]"
    />
    <div
      class="relative z-10 flex h-full flex-col items-center justify-center gap-4 text-lg lg:gap-10"
    >
      <img :src="imgUrl" alt="Rush Royale Logo" class="h-[269px] w-[277px]" />

      <InfoBlock frame="union-frame">
        Игра больше не публикуется на площадке. Если вы играли в проект ранее,
        перейдите на сайт разработчика и авторизуйтесь, чтобы сохранить своего
        персонажа
        <br />
        <br />
        Нажимая "Перейти" вы соглашаетесь с передачей ваших данных компании
        MY.GAMES B.V. и их обработкой согласно Политике конфиденциальности
        портала MY.GAMES
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
</script>

<style scoped></style>
