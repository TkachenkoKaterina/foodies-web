import { BASE_URL } from '../services/BaseUrl';
import defaultAvatar from '../assets/images/default/default-user-image.png';
import defaultImage from '../assets/images/default/default-image.jpg';
import defaultIngredient from '../assets/images/default/default-ingredient-image.jpg';

export const getImagePath = (path, type) => {
  if (path) {
    return path.includes('www') || path.includes('https')
      ? path
      : `${BASE_URL}/${path}`;
  }

  return type === 'avatar'
    ? defaultAvatar
    : type === 'ingredient'
    ? defaultIngredient
    : type === 'recipe'
    ? defaultImage
    : defaultImage;
};

export const TYPE_IMG = {
  AVATAR: 'avatar',
  RECIPE: 'recipe',
};
