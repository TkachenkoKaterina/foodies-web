import styles from './ListItems.module.scss';
import { TYPE_TABS } from '../../constants/common';
import RecipePreview from '../RecipePreview';
import UserCard from '../UserCard';

const ListItems = ({
  emptyText,
  type,
  list,
  followingList,
  onFollow,
  onUnfollow,
  // currentPage,
  // onCurrentPageChange,
}) => {
  if (!list.length) {
    return (
      <div className={styles.empty}>
        <p className={styles.empty_text}>{emptyText}</p>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        {list.map(item => {
          if (type === TYPE_TABS.RECIPE) {
            return (
              <li key={item.id} className={styles.item}>
                <RecipePreview recipe={item} />
              </li>
            );
          }

          if (type === TYPE_TABS.USER) {
            return (
              <li key={item.id} className={styles.item}>
                <UserCard
                  user={item}
                  isFollowing={followingList.includes(item.id)}
                  onFollow={onFollow}
                  onUnfollow={onUnfollow}
                />
              </li>
            );
          }

          return null;
        })}
      </ul>

      <div>pagination</div>
    </div>
  );
};

export default ListItems;
