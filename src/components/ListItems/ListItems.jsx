import styles from './ListItems.module.scss';
import { TYPE_TABS } from '../../constants/common';
import RecipePreview from '../RecipePreview';
import UserCard from '../UserCard';

const ListItems = ({
  emptyText,
  type,
  list,
  onDeleteRecipe,
  isOwner,
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
              <li key={item.id} className={styles.item_recipe}>
                <RecipePreview
                  recipe={item}
                  onDeleteRecipe={onDeleteRecipe}
                  isOwner={isOwner}
                />
              </li>
            );
          }

          if (type === TYPE_TABS.USER) {
            return (
              <li key={item.id} className={styles.item_user}>
                <UserCard user={item} />
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
