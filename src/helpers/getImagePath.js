import { BASE_URL } from '../services/BaseUrl';
import defaultAvatar from '../assets/images/default/default-user-image.png';

export const getImagePath = (path, type) => {
  if (path) {
    return path.includes('www') || path.includes('https')
      ? path
      : `${BASE_URL}/${path}`;
  }

  return type === 'avatar' ? defaultAvatar : '';
};

export const TYPE_IMG = {
  AVATAR: 'avatar',
};
