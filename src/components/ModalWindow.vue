<script setup>
defineProps(['imgSrc', 'text'])
</script>

<template>
  <div class="modal">
    <div class="modal-shadow"></div>
    <div class="modal-content">
      <img :src="imgSrc">
      <p>{{ text }}</p>
      <button @click="$emit('closePopup', true)">Close</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "src/assets/base";

.modal {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: grid;
  place-items: center;

  &-shadow {
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: .5;
    z-index: 0;
  }

  &-content {
    z-index: 1;
    width: 846px;
    height: 628px;
    border: 3px solid $primary-text-color;
    overflow: hidden;
    background-color: #ffffff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;

    img {
      width: 537px;
      height: 302px;
    }

    button {
      width: 499px;
      height: 58px;
      font-size: 24px;
      font-weight: bold;
      background: transparent;
      border: 3px solid $primary-text-color;
      cursor: pointer;
    }

    p {
      font-size: 24px;
      font-weight: bold;
    }
  }
}
</style>
