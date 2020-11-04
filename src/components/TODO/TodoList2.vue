<template>
  <div>
    <transition-group name="list" tag="ul">
      <li
        v-for="(todoItem, index) in this.storedTodoItems"
        v-bind:key="todoItem.item"
        class="shadow"
      >
        <i
          class="checkBtn fas fa-check"
          v-bind:class="{ checkBtnCompleted: todoItem.completed }"
          v-on:click="toggleComplete({ todoItem, index })"
        ></i>
        <!--textCompleted 속성이 todoItem.completed 가 true 일때 적용시키겠다. -->
        <span v-bind:class="{ textCompleted: todoItem.completed }">{{
          todoItem.item
        }}</span>
        <span class="removeBtn">
          <i
            class="fas fa-trash-alt"
            v-on:click="removeTodo({ todoItem, index })"
          ></i>
        </span>
      </li>
    </transition-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      perPage: '',
      totalCount: '',
      startPageNo: '',
    };
  },
  computed: {
    totalPage() {
      return Math.ceil(this.totalCount / this.perPage);
    },
    currentPage() {
      return this.startPageNo / this.perPage + 1;
    },
    listPages() {
      return Array(this.totalPage)
        .fill()
        .map((v, i) => i + 1)
        .filter(i => i >= this.currentPage - this.maxNoOfPageItems)
        .filter(i => i >= 1)
        .filter(i => i <= this.totalPage);
    },
  },
};
</script>

<style scoped>
/*해당 컴포넌트만 스타일 적용하겠다.*/
ul {
  list-style-type: none; /* 점 없애기 */
  padding-left: 0px;
  margin-top: 10px;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}
.checkBtnCompleted {
  color: #b3adad;
}
.textCompleted {
  /* 완료일시 줄 긋기 */
  text-decoration: line-through;
  color: #b3adad;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}

/* 리스트 아이템 트랜지션 효과 */
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
