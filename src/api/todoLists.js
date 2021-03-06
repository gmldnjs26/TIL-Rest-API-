import { instance } from './index.js';
// import qs from 'qs';

function fetchTILS(username) {
  return instance.get('api/selectTil', {
    params: {
      id: username,
    },
    // paramsSerializer: params => qs.stringify(params, { arrayFormat: 'repeat' }),
  });
}

function updateTIL(til) {
  return instance.post('api/updateTil', til);
}

function createTIL(til) {
  return instance.post('api/insertTil', til);
}

function deleteTIL(til) {
  return instance.post('api/deleteTil', til);
}

// 하나의 TodoList 가져오기

export { fetchTILS, updateTIL, createTIL, deleteTIL };
