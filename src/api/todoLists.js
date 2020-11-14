import { instance } from './index.js';

function fetchTIL(id) {
  console.log('id' + id);
  return instance.get('api/selectTil', id);
}

export { fetchTIL };
