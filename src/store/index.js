import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import { loginUser } from '@/api/auth';
import {
  getAuthFromCookie,
  getUserFromCookie,
  //saveAuthToCookie,
  //saveUserToCookie,
} from '@/utils/cookies.js';

export default new Vuex.Store({
  state: {
    username: getUserFromCookie() || '',
    token: getAuthFromCookie() || '',
    todoItems: [],
  },
  getters: {
    isLogin(state) {
      return state.username !== '';
    },
    storedTodoItems(state) {
      return state.todoItems;
    },
  },
  mutations: {
    setUsername(state, username) {
      state.username = username;
    },
    setToken(state, token) {
      state.token = token;
    },
    setTodoItems(state, todoItems) {
      const arr = [
        {
          item: 'Vue 학습하기1',
          completed: false,
        },
        {
          item: 'Vue 학습하기2',
          completed: false,
        },
        {
          item: 'Vue 학습하기3',
          completed: true,
        },
      ];
      todoItems = arr;
      state.todoItems = todoItems;
    },
    togleOneItem(state, payload) {
      console.log(payload.todoItem, payload.index);
    },
    clearUsername(state) {
      state.username = '';
    },
    clearToken(state) {
      state.token = '';
    },
  },
  actions: {
    async Login(context, userData) {
      var response = await loginUser(userData); // from auth
      context.commit('setUsername', response.data.usename);
      context.commit('setToken', response.data.token);
      return response;
    },
  },
});
