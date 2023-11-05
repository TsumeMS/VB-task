<script setup>
import ModalWindow from "@/components/ModalWindow.vue";
import {ref} from "vue";

let showPopup = ref(false);

const toglePopup = () => {
  showPopup.value = !showPopup.value;
}
</script>

<template>
  <img src="./../assets/i-icon.svg" @click="toglePopup">
  <ModalWindow :text="'info popup'"
               :img-src="'src/assets/mountain-image.jpg'"
               v-show="showPopup"
               @close-popup="toglePopup"
  />
</template>

<style scoped lang="scss">
img {
  position: fixed;
  right: 34px;
  bottom: 34px;
  cursor: pointer;
}
</style>
