import { getPasswordPattern } from '@/api/auth';

function validateEmail(email) {
  // var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var re2 = getPasswordPattern();
  return new RegExp(RegExp(re2)).test(String(email).toLowerCase());
}

export { validateEmail };
