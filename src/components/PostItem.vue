<script setup>
import {useUsersStore} from "@/stores/users";

defineProps(['post']);

const users = useUsersStore();
users.getUsers();

function firstToUpper(text)
{
  return text.charAt(0).toUpperCase() + text.slice(1);
}
</script>

<template>
  <div class="post-item">
    <h1 class="title">{{ firstToUpper(post.title) }}</h1>
    <p class="author"><span>by </span>{{ users.users[post.userId].name }}</p>
    <p class="body">{{ post.body }}</p>
  </div>
</template>

<style scoped lang="scss">
@import "src/assets/base";

.post-item {
  margin-bottom: 4rem;

  .title {
    font-size: 2rem;
    font-weight: bold;
  }

  .author {
    font-size: 1rem;
    font-weight: bold;
    padding: 2rem 0;

    span {
      color: $tertiary-text-color;
      font-size: 1rem;
    }
  }
}
</style>
