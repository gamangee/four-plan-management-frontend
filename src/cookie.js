import { Cookies } from 'react-cookie';

const cookie = new Cookies();

// 쿠키 설정
export const setCookie = (name, value, option) => {
  return cookie.set(name, value, { ...option });
};

// 쿠키 가져오기
export const getCookie = name => {
  return cookie.get(name);
};
