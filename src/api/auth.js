import { instance } from './index.js';

// 회원가입 API
function registerUser(userData) {
  return instance.post('api/join', userData);
}

// 로그인 API
function loginUser(userData) {
  return instance.post('api/login', userData);
}

// 비밀번호 양식 가져오기
function getPasswordPattern() {
  return instance.get('api/pwdPattern');
}

export { registerUser, loginUser, getPasswordPattern };
