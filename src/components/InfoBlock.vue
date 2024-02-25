<template>
  <div
    class="InfoBlock bg-contain bg-center bg-no-repeat"
    :class="
      props.frame === 'union-frame'
        ? 'bg-union-frame h-[262px] w-[529px] pl-14 py-6 pr-8'
        : 'bg-frame h-[130px] w-[351px] px-6 py-4 text-base'
    "
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: "InfoBlock",
});

const props = defineProps<{
  frame: "union-frame" | "frame";
}>();
</script>

<style scoped></style>
