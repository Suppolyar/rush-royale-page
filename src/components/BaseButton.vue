<template>
  <button @click="onBtnClick" class="">Скачать</button>
</template>

<script setup>
defineOptions({
  name: "BaseButton",
});

const onBtnClick = () => {
  window.__GEM.detectAndDownload(
    "13.2013983",
    "https://static.gc.my.games/HawkedLoader.exe",
  );
};
</script>

<style lang="scss" scoped></style>
