import { instance } from './index.js';

// 회원가입 API
function registerUser(userData) {
  return instance.post('api/join', userData);
}

// 로그인 API
function loginUser(userData) {
  return instance.post('api/login', userData);
}

export { registerUser, loginUser };
