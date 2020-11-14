<template>
  <div>
    <div class="main list-container contents">
      <h1 class="page-header">Today I Learned</h1>
      <LoadingSpinner v-if="isLoading"></LoadingSpinner>
      <ul v-else>
        <PostListItem
          v-for="postItem in postItems"
          :key="postItem._id"
          :postItem="postItem"
          v-on:refresh="fetchData"
        ></PostListItem>
      </ul>
    </div>
    <router-link to="/add" class="create-button">
      <i class="fas fa-plus"></i>
    </router-link>
  </div>
</template>

<script>
import { fetchTIL } from '@/api/todoLists';
import PostListItem from '@/components/posts/PostListItem.vue';
import LoadingSpinner from '@/components/common/LoadingSpinner';
export default {
  components: {
    PostListItem,
    LoadingSpinner,
  },
  data() {
    return {
      postItems: [],
      isLoading: false,
    };
  },
  methods: {
    async fetchData() {
      this.isLoading = true;
      console.log('Username : ' + this.$store.getters.getUsername);
      const response = await fetchTIL(this.$store.getters.getUsername);
      this.isLoading = false;
      this.postItems = response.data.posts;
    },
  },
  created() {
    this.fetchData();
  },
};
</script>

<style></style>
