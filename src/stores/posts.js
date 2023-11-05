import {defineStore} from "pinia";
import {ref} from "vue";
import {useAuthorStore} from "@/stores/author";

export const usePostsState = defineStore('posts', () => {
    const posts = ref([]);
    const author = useAuthorStore();

    function getPosts()
    {
        let filter = '';
        if (author.author.id > 0) {
            filter = '?userId=' + author.author.id;
        }

        fetch('https://jsonplaceholder.typicode.com/posts' + filter)
            .then((response) => response.json())
            .then((result) => posts.value = result);
    }

    return {posts, getPosts}
});
