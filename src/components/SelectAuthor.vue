<script setup>
import {ref} from "vue";
import {useUsersStore} from "@/stores/users";
import {useAuthorStore} from "@/stores/author";
import {usePostsState} from "@/stores/posts";

let isOpen = ref(false);
const users = useUsersStore();
const current = useAuthorStore();
const posts = usePostsState();

users.getUsers();

const clickSelect = () => {
  isOpen.value = !isOpen.value;
}

const selectUser = (id) => {
  current.setCurrent(users.users.filter((item) => item.id === id)[0]);
  posts.getPosts();
  isOpen.value = false;
}

</script>

<template>
  <div class="select">
    <div class="select-current select-item" :class="{'open': isOpen}" @click="clickSelect">
      <label>{{ current.author.name }}</label>
      <span class="arrow" :class="{'down': !isOpen, 'up': isOpen}"></span>
    </div>
    <div class="select-list" v-show="isOpen">
      <ul>
        <li v-for="author in users.users"
            @click="selectUser(author.id)"
            :class="{'open': current.author.id === author.id}"
            :key="author.id"
            class="select-item"
        >
          <label>{{ author.name }}</label>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "src/assets/base";

.select {
  position: relative;

  .select-item {
    border: 3px solid $primary-text-color;
    border-bottom: none;
    height: 58px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 22px;
    cursor: pointer;

    &:last-child {
      border-bottom: 3px solid $primary-text-color;
    }
  }

  .select-current {
    border-bottom: 3px solid $primary-text-color;

    label {
      font-weight: bold;
    }

    .arrow {
      width: 18px;
      height: 18px;
      background-color: $primary-text-color;
      position: relative;
      border: none;
      z-index: 0;
      transform: rotateZ(-45deg);

      &:before {
        position: absolute;
        z-index: 1;
        content: '';
        width: 150%;
        height: 75%;
        top: -3px;
        left: 0;
        transform: rotateZ(45deg);
        background-color: $background-color;
      }

      &.down {
        top: -8px;
      }

      &.up {
        overflow: hidden;
        top: 8px;
      }
    }
  }

  .open {
    background-color: $primary-text-color;
    color: $background-color;
  }

  .select-list {
    position: absolute;
    top: 100%;
    width: 100%;

    ul {
      list-style: none;
      margin: 20px 0;
      padding: 0;
      width: 100%;
    }
  }
}
</style>
