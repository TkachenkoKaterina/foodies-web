import { useDispatch, useSelector } from 'react-redux';

import { userApi } from '../services/Api';
import { authSelectors, authReducer } from '../redux/auth';

export const useOwner = () => {
  const owner = useSelector(authSelectors.getUser);

  return owner;
};

export const useFollow = () => {
  const dispatch = useDispatch();

  const onFollow = async id => {
    try {
      await userApi.followUser(id);
      await dispatch(authReducer.updateFollowing(id));
    } catch (error) {
      console.log(error);
    }
  };

  const onUnfollow = async id => {
    try {
      await userApi.unfollowUser(id);
      await dispatch(authReducer.updateFollowing(id));
    } catch (error) {
      console.log(error);
    }
  };

  return { onFollow, onUnfollow };
};

export const useUpdateAvatar = () => {
  const dispatch = useDispatch();

  const onUpdateAvatar = async ({ target }) => {
    const formData = new FormData();
    formData.append('avatar', target.files[0]);

    try {
      const { data } = await userApi.updateAvatar(formData);
      dispatch(authReducer.updateAvatar(data?.avatar));
    } catch (error) {
      console.log(error);
    }
  };

  return { onUpdateAvatar };
};
