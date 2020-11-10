import { tils } from './index.js';

function fetchTIL(username) {
  return tils.get('selectTil', username);
}

export { fetchTIL };
