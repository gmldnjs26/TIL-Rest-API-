import axios from 'axios';
import { setInterceptors } from './common/interceptors';

function createInstance() {
  const ins = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    // headers: {
    //   'Access-Control-Allow-Origin': '*',
    //   'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    // },
  });
  return setInterceptors(ins);
}

// 인
function createInstanceWithAuth(url) {
  const instance = axios.create({
    baseURL: `${process.env.VUE_APP_API_URL}${url}`,
  });
  return setInterceptors(instance);
}

export const instance = createInstance();
export const posts = createInstanceWithAuth('posts');
export const tils = createInstanceWithAuth('todoLists');
