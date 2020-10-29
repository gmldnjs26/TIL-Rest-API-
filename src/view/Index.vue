<template>
  <div class="container">
    <div class="jumbotron text-center">
        <h1><span class="fa fa-shopping-cart"></span> 쇼핑몰 홈</h1>
    <br>
      <div v-if="login_success">
        <p>로그인되어 있습니다.</p>
        <br>
        <a href="/logout" class="btn btn-default"><span class="fa fa-user"></span>로그아웃</a>
      </div>
      <div v-else>
        <p>로그인하세요.<p>
        <p>계정이 없으시면 회원가입하세요.</p>
        <br>
            <a href="/login" class="btn btn-default"><span class="fa fa-user"></span>로그인</a>
            <a href="/signup" class="btn btn-default"><span class="fa fa-user"></span>회원가입</a>
        <br>
        <a href="/auth/facebook" class="btn btn-primary"><span class="fa fa-facebook"></span> 페이스북으로 로그인</a>
      </div>
    </div>
	</div>
</template>

<script>
export default {
  data: {
    login_success : {
      return false;
    }
  },

  created(){
    console.log("Index Vue 생성완료");
  }
}
</script>

<style>
body { padding-top:80px; }
        	
/* @font-face {
  font-family: 'Nanum Gothic'; font-style: normal; font-weight: 400;
  src: url('../public/NanumGothic-Regular.eot');
  src: local('NanumGothic'),
    url('../public/NanumGothic-Regular.eot?#iefix') format('embedded-opentype'),
    url('../public/NanumGothic-Regular.woff2') format('woff2'),
    url('../public/NanumGothic-Regular.woff') format('woff'),
    url('../public/NanumGothic-Regular.ttf') format('truetype');
}
        	
h1, p, a { font-family: 'Nanum Gothic' } */
</style>

