import { SESSION_COOKIE_NAME } from '@/lib/constants';
import Cookies from 'js-cookie';

export default function getToken() {
  const token = Cookies.get(SESSION_COOKIE_NAME);
  console.log("GetToken 1", token)
  console.log("GetToken", Cookies)
  return token;
};
