import {defineStore} from "pinia";
import {ref} from "vue";

export const useUsersStore = defineStore('users', () => {
    const users = ref([]);

    function getUsers()
    {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((result) => users.value = [{id: 0, name: 'All'}, ...result]);
    }

    return {users, getUsers};
})
