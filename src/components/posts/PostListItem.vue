<template>
  <li>
    <div class="post-title">
      {{ postItem.title }}
    </div>
    <div class="post-contents">
      {{ postItem.contents }}
    </div>
    <div class="post-time">
      {{ postItem.createdat | formatDate }}
      <i class="icon ion-md-create" v-on:click="routeEditPage"></i>
      <i class="icon ion-md-trash" v-on:click="deleteItem"></i>
    </div>
  </li>
</template>

<script>
import { deletePost } from '@/api/posts.js';

export default {
  mounted() {
    console.log(this.postItem.createdat);
  },
  props: {
    postItem: {
      type: Object,
      required: true,
    },
  },
  // filters: {
  //   formatDate(value) {
  //     return new Date(value);
  //   },
  // },
  methods: {
    async deleteItem() {
      if (confirm('Do you want to delete it?')) {
        await deletePost(this.postItem._id);
        this.$emit('refresh');
      }
    },
    routeEditPage() {
      const id = this.postItem._id;
      this.$router.push(`/post/${id}`);
    },
  },
};
</script>

<style></style>
