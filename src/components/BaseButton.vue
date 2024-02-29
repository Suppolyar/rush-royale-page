<template>
  <a
    target="_blank"
    href="https://store.my.games/app/5356"
    class="CustomBtn bg-btn-bg bg-center bg-no-repeat px-24 py-10 uppercase transition duration-150 hover:scale-105"
  >
    <span> Перейти </span>
  </a>
</template>

<script setup>
defineOptions({
  name: "BaseButton",
});
</script>

<style lang="scss" scoped>
.CustomBtn {
  span {
    color: transparent;

    font-size: 32.584px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 2.281px;
    text-transform: uppercase;
  }
}
</style>
