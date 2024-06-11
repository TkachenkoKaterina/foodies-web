import Cookies from 'js-cookie';

export const getToken = () => {
  return Cookies.get('id_token');
};

export const setToken = (token, expires) => {
  if (!token) {
    return Cookies.remove('id_token');
  }
  return Cookies.set('id_token', token, { expires: expires || 30 });
};
