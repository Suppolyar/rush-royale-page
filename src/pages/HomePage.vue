<template>
  <div class="h-screen w-screen bg-rush-royale bg-cover bg-center bg-no-repeat">
    <div
      class="flex h-full flex-col items-center justify-center gap-10 text-lg"
    >
      <img :src="imgUrl" alt="Rush Royale Logo" class="h-[269px] w-[277px]" />

      <InfoBlock size="large">
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
      <InfoBlock size="medium">
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
</script>

<style scoped></style>
