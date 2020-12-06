<template>
  <li>
    <div class="post-title">
      {{ til.title }}
    </div>
    <div class="post-contents">
      {{ til.contents }}
    </div>
    <div class="post-time">
      {{ til.createdat | formatDate }}
      <i class="icon ion-md-create" v-on:click="routeEditPage"></i>
      <i class="icon ion-md-trash" v-on:click="deleteItem"></i>
    </div>
  </li>
</template>

<script>
import { deleteTIL } from '@/api/todoLists';

export default {
  mounted() {},
  props: {
    til: {
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
        await deleteTIL({
          id: this.$store.getters.getUsername,
          tilno: this.til.tilno,
        });
        this.$emit('refresh');
      }
    },
    routeEditPage() {
      const id = this.til.tilno;
      this.$router.push(`/til/${id}`);
    },
  },
};
</script>

<style></style>
