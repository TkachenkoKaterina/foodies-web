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
  const [page, setPage] = useState(1);

  const onChangePage = page => {
    setPage(page);
  };

  const getUsers = async () => {
    try {
      const { data } = await userApi.getFollowing({ page });
      setUsers(data);
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
      data={users}
      type={TYPE_TABS.USER}
      isLoading={isLoading}
      followingList={owner?.following}
      onFollow={onFollow}
      onUnfollow={onUnfollow}
      owner={owner}
      currentPage={page}
      onChangePage={onChangePage}
    />
  );
};

export default Following;
