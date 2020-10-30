import { shallowMount } from '@vue/test-utils';
import LoginForm from './LoginForm.vue';

describe('LoginForm.vue', () => {
  test('ID는 이메일 형식이어햐 한다.', () => {
    const wrapper = shallowMount(LoginForm, {
      data() {
        return {
          username: 'test@abc.com',
        };
      },
    });
    const usernameInput = wrapper.find('#username'); // find함수 잘 보자
    console.log(usernameInput.html());
    console.log(usernameInput.element.value);
    // computed에 있는 isUsernameValid
    console.log(wrapper.vm.isUsernameValid); // 이메일 유효성 검사함수
  });
});
