<template>
  <div
    class="InfoBlock bg-contain bg-center bg-no-repeat"
    :class="
      props.frame === 'union-frame'
        ? 'bg-union-frame h-[262px] w-[529px] pl-12 pt-6 pr-8'
        : 'bg-frame h-[130px] w-[351px] px-4 py-2 text-base'
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
