<template>
  <div>
    <div class="main list-container contents">
      <h1 class="page-header">Today I Learned</h1>
      <LoadingSpinner v-if="isLoading"></LoadingSpinner>
      <ul v-else>
        <TodoList
          v-for="til in todoLists"
          :key="til._id"
          :til="til"
          v-on:refresh="fetchData"
        ></TodoList>
      </ul>
    </div>
    <router-link to="/add" class="create-button">
      <i class="fas fa-plus"></i>
    </router-link>
  </div>
</template>

<script>
import { fetchTILS } from '@/api/todoLists';
import TodoList from '@/components/posts/TodoList.vue';
import LoadingSpinner from '@/components/common/LoadingSpinner';
export default {
  components: {
    TodoList,
    LoadingSpinner,
  },
  data() {
    return {
      todoLists: [],
      isLoading: false,
    };
  },
  methods: {
    async fetchData() {
      this.isLoading = true;
      const response = await fetchTILS(this.$store.getters.getUsername);
      this.isLoading = false;
      this.todoLists = response.data;
      this.$store.commit('setTodoItems', response.data);
    },
  },
  created() {
    this.fetchData();
  },
};
</script>

<style></style>
