<template>
  <div class="InfoBlock" :class="setCurrentBlockSize">
    <div class="">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: "InfoBlock",
});
const props = defineProps<{
  size: "medium" | "large";
}>();

const setCurrentBlockSize = () => {
  switch (props.size) {
    case "medium":
      return "text-base";
    case "large":
      return "text-lg";
  }
};
</script>

<style scoped></style>
