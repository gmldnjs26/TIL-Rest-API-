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
  mounted() {},
  props: {
    postItem: {
      type: Object,
      required: true,
    },
  },
  filters: {
    formatDate(value) {
      return new Date(
        value.substring(0, 4),
        value.substring(4, 6),
        value.substring(6, 8),
      );
    },
  },
  methods: {
    async deleteItem() {
      if (confirm('Do you want to delete it?')) {
        await deletePost(this.postItem._id);
        this.$emit('refresh');
      }
    },
    routeEditPage() {
      const id = this.postItem.tilno;
      // const til = {
      //   id: this.postItem._id,
      //   title: this.postItem.title,
      //   contents: this.postItem.contents,
      //   tilno: this.postItem.tilno,
      // };
      this.$router.push(`/post/${id}`);
    },
  },
};
</script>

<style></style>
