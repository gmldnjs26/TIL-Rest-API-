import { instance } from './index.js';
// import qs from 'qs';

function fetchTIL(username) {
  return instance.get('api/selectTil', {
    params: {
      id: username,
    },
    // paramsSerializer: params => qs.stringify(params, { arrayFormat: 'repeat' }),
  });
}

export { fetchTIL };
