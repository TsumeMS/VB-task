<script setup>
import {usePostsState} from "@/stores/posts";
import {useAuthorStore} from "@/stores/author";
import PostList from "@/components/PostList.vue";

const posts = usePostsState();
const author = useAuthorStore();
posts.getPosts(author.author.id);

</script>

<template>
  <div>
    <div class="header">
      <div class="title">
        <h1>Posts</h1>
      </div>
    </div>
    <PostList :posts="posts.posts"/>
  </div>
</template>

<style scoped lang="scss">
@import "src/assets/base";

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 56px;

  .title h1 {
    font-size: 48px;
    color: $primary-text-color;
    font-weight: bold;
    width: 100%;
  }
}
</style>
