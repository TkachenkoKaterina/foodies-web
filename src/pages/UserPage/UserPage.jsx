import { useState } from 'react';

import User from '../../components/User';
import {
  useFollow,
  useOwner,
  useUpdateAvatar,
  useUserProfile,
} from '../../hooks/user';
import { useLogout } from '../../hooks/auth';

const UserPage = () => {
  const owner = useOwner();
  const { onFollow, onUnfollow } = useFollow();
  const { onLogout } = useLogout();
  const { onUpdateAvatar } = useUpdateAvatar();
  const [isLogoutModal, setIsLogoutModal] = useState(false);
  const { userProfile, isLoading } = useUserProfile();

  const onOpenLogoutModal = () => {
    setIsLogoutModal(true);
  };

  const onCloseLogoutModal = () => {
    setIsLogoutModal(false);
  };

  return (
    <User
      isOwner={owner?._id === userProfile?._id}
      user={userProfile}
      userImg={
        owner?._id === userProfile?._id ? owner?.avatar : userProfile?.avatar
      }
      isFollow={owner?.following.includes(userProfile?._id)}
      isLoading={isLoading}
      onFollowClick={
        owner?.following.includes(userProfile?._id) ? onUnfollow : onFollow
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
