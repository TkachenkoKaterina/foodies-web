import { BASE_URL } from '../services/BaseUrl';
import defaultAvatar from '../assets/images/default/default-user-image.png';

const getImagePath = path => {
  if (path) {
    return path.includes('www') || path.includes('https')
      ? path
      : `${BASE_URL}/${path}`;
  }

  return defaultAvatar;
};

export default getImagePath;
