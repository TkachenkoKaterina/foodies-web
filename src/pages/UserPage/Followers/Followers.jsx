import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import ListItems from '../../../components/ListItems';
import { TYPE_TABS, EMPTY_TEXT } from '../../../constants/common';
import { userApi } from '../../../services/Api';
import { useFollow, useOwner } from '../../../hooks/user';

const Followers = () => {
  const { id } = useParams();
  const [users, setUsers] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const owner = useOwner();
  const { onFollow, onUnfollow } = useFollow();

  const getUsers = async () => {
    try {
      const { data } = await userApi.getFollowers(id);
      setUsers(data?.followers);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!id) return;

    getUsers();
  }, [id]);

  return (
    <ListItems
      type={TYPE_TABS.USER}
      emptyText={EMPTY_TEXT.FOLLOWERS}
      currentPage={1}
      onCurrentPageChange={() => {}}
      list={users}
      isLoading={isLoading}
      owner={owner}
      onFollow={onFollow}
      onUnfollow={onUnfollow}
    />
  );
};

export default Followers;
