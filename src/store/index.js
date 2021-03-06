import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import { loginUser } from '@/api/auth';

import {
  getAuthFromCookie,
  getUserFromCookie,
  saveAuthToCookie,
  saveUserToCookie,
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
    getUsername(state) {
      return state.username;
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
      var map = new Map();
      todoItems.forEach(element => {
        map.set(element.tilno, element);
      });
      state.todoItems = map;
      console.log(map);
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
      context.commit('setUsername', response.data.member.username);
      context.commit('setToken', response.data.token);
      saveUserToCookie(response.data.member.username);
      saveAuthToCookie(response.data.token);
      console.log('token' + response.data.token);
      return response;
    },
  },
});
