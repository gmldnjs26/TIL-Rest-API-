<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput></TodoInput>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from '@/components/TODO/TodoHeader.vue';
import TodoFooter from '@/components/TODO/TodoFooter.vue';
import TodoInput from '@/components/TODO/TodoInput.vue';
import TodoList from '@/components/TODO/TodoList.vue';

export default {
  components: {
    TodoHeader,
    TodoFooter,
    TodoInput,
    TodoList,
  },
};
</script>

<style>
body {
  text-align: center;
  background-color: #f6f6f6;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.2);
}
</style>
