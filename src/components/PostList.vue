<script setup>
import PostItem from "@/components/PostItem.vue";

defineProps(['posts']);
</script>

<template>
  <div class="posts">
    <PostItem v-for="post in posts" :post="post" :key="post.id"/>
  </div>
</template>

<style scoped lang="scss">
.posts {
  margin-top: 109px;
}
</style>
