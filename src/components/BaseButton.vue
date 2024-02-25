<template>
  <button
    @click="onBtnClick"
    class="bg-btn bg-contain bg-center bg-no-repeat p-8 pb-10"
  >
    <div class="BtnText">СКАЧАТЬ</div>
  </button>
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

<style scoped>
.BtnText {
  color: #fff;

  text-shadow: 0px 2px 0px #0e2e73;
  -webkit-text-stroke-width: 2;
  -webkit-text-stroke-color: #0e2e73;
  font-family: Oswald;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 2.8px;
  text-transform: uppercase;
}
</style>
