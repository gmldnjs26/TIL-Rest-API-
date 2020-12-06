import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store/index.js';

Vue.use(VueRouter); // plugin을 실행하기 위해 초기화하는 코드

// 외부에서 사용할 수 있게 모듈화
// default 는 하나만 내보내겠다 는 의미
const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/login', // 초기 진입 페이지 설정
    },
    {
      path: '/login',
      component: () => import('@/views/LoginPage.vue'), // login에 해당하는 페이지만 들고온다.
    },
    {
      path: '/signup',
      component: () => import('@/views/SignupPage.vue'),
    },
    {
      path: '/main',
      component: () => import('@/views/MainPage.vue'),
      meta: { auth: true }, // 이 페이지에 접근은 권한이 필요하다.
    },
    {
      path: '/add',
      component: () => import('@/views/TILAddPage.vue'),
      meta: { auth: true },
    },
    {
      path: '/til/:id',
      component: () => import('@/views/TILEditPage.vue'),
      meta: { auth: true },
    },
    {
      path: '*', // 위에 없는 모든 URL에 대해 반응하겠다.
      component: () => import('@/views/NotFoundPage.vue'),
    },
  ],
});

router.beforeEach((to, from, next) => {
  // to(가는곳) from(지금) next(가라)
  if (to.meta.auth && !store.getters.isLogin) {
    console.log('인증이 필요합니다.');
    next('/login');
    return; // 여기서 return 을 안하면 다음의 next가 실행되버린다.
  }
  next();
});

export default router;
