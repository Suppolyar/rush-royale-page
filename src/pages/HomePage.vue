<template>
  <div class="flex flex-col overflow-hidden">
    <div
      class="logo-screen:h-full relative h-screen w-screen overflow-hidden bg-rush-royale bg-cover bg-center bg-no-repeat"
    >
      <MyGamesLogo class="absolute right-[80px] top-[80px]" />
      <div class="flex h-full flex-col items-center justify-center py-16">
        <img
          :src="MainLogo"
          alt="Main Logo Rush royale"
          class="mb-16 h-[269px] w-[277px] object-contain"
        />

        <InfoBlock size="large" class="relative mb-16 -translate-x-0.5">
          <QuotesBlock class="l-1/2 absolute top-1/2 -translate-y-1/2" />
          <div class="relative z-10 w-[390px] translate-x-20">
            <p class="mb-6">
              Игра больше не публикуется на площадке. Если вы играли в проект
              ранее, перейдите на сайт разработчика и авторизуйтесь, чтобы
              сохранить своего персонажа.
            </p>

            <p>
              Нажимая "Перейти", вы соглашаетесь с передачей ваших данных
              компании MY.GAMES B.V. и их обработкой согласно
              <a
                class="underline"
                href="https://documentation.my.games/terms/mygames_privacy"
                target="_blank"
                >Политике конфиденциальности
              </a>
              портала MY.GAMES
            </p>
          </div>
        </InfoBlock>

        <BaseButton class="mb-6" />

        <InfoBlock size="medium" class="border-4 border-[#2C2525] font-[400]">
          Скачивая MY.GAMES Launcher, вы соглашаетесь с передачей ваших данных
          компании MY.GAMES B.V. и их обработкой согласно
          <a
            class="underline"
            href="https://documentation.my.games/terms/mygames_privacy"
            target="_blank"
            >Политике конфиденциальности
          </a>
          портала MY.GAMES
        </InfoBlock>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTitle } from "@vueuse/core";
import BaseButton from "../components/BaseButton.vue";
import InfoBlock from "../components/InfoBlock.vue";
import MyGamesLogo from "../assets/my-games-logo.vue";
import QuotesBlock from "../assets/quotes.vue";
import MainLogo from "../assets/main-logo.png";
const title = useTitle();
title.value = "Rush Royale";
</script>

<style scoped></style>
