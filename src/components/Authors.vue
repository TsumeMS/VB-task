<script setup>
import SelectAuthor from "@/components/SelectAuthor.vue";
import InfoIcon from "@/components/infoIcon.vue";
</script>

<template>
  <div class="authors">
    <label>Authors:</label>
    <SelectAuthor/>
    <InfoIcon/>
  </div>
</template>

<style scoped lang="scss">
@import "src/assets/base";

.authors {
  width: 400px;
  margin-left: auto;

  label {
    color: $secondary-text-color;
    font-size: 24px;
    height: 44px;
    display: inline-block;
  }
}
</style>
