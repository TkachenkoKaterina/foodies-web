import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import User from '../../components/User';
import { userApi } from '../../services/Api';
import { useFollow, useOwner, useUpdateAvatar } from '../../hooks/user';
import { useLogout } from '../../hooks/auth';

const UserPage = () => {
  const owner = useOwner();
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { onFollow, onUnfollow } = useFollow();
  const { onLogout } = useLogout();
  const { onUpdateAvatar } = useUpdateAvatar();
  const [isLogoutModal, setIsLogoutModal] = useState(false);

  const onOpenLogoutModal = () => {
    setIsLogoutModal(true);
  };

  const onCloseLogoutModal = () => {
    setIsLogoutModal(false);
  };

  const getUser = async () => {
    try {
      const { data } = await userApi.getProfile(id);
      setUser(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!id) return;

    getUser();
  }, [id]);

  return (
    <User
      isOwner={owner?._id === user?._id}
      user={user}
      userImg={owner?._id === user?._id ? owner?.avatar : user?.avatar}
      isFollow={owner?.following.includes(user?._id)}
      isLoading={isLoading}
      onFollowClick={
        owner?.following.includes(user?._id) ? onUnfollow : onFollow
      }
      onUpdateAvatar={onUpdateAvatar}
      onLogout={onLogout}
      isLogoutModal={isLogoutModal}
      onOpenLogoutModal={onOpenLogoutModal}
      onCloseLogoutModal={onCloseLogoutModal}
    />
  );
};

export default UserPage;
