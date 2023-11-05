import {defineStore} from "pinia";
import {ref} from "vue";

export const useAuthorStore = defineStore('author', () => {
    const author = ref({id: 0, name: 'All'});

    function setCurrent(user)
    {
        author.value = user;
    }

    return {author, setCurrent}
})
