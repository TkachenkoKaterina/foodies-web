import { useState, useEffect } from 'react';
import ListItems from '../../../components/ListItems';
import { TYPE_TABS, EMPTY_TEXT } from '../../../constants/common';
import { userApi } from '../../../services/Api';
import { useFollow, useOwner } from '../../../hooks/user';

const Following = () => {
  const [users, setUsers] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const owner = useOwner();
  const { onFollow, onUnfollow } = useFollow();

  const getUsers = async () => {
    try {
      const { data } = await userApi.getFollowing();
      setUsers(data.following);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <ListItems
      emptyText={EMPTY_TEXT.FOLLOWING}
      onCurrentPageChange={() => {}}
      list={users}
      type={TYPE_TABS.USER}
      isLoading={isLoading}
      followingList={owner?.following}
      onFollow={onFollow}
      onUnfollow={onUnfollow}
      owner={owner}
    />
  );
};

export default Following;
