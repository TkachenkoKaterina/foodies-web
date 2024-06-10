import { useParams } from 'react-router-dom';

import ListItems from '../../../components/ListItems';
import { TYPE_TABS, EMPTY_TEXT } from '../../../constants/common';

const Favorites = () => {
  const { id } = useParams();
  const isOwner = id === '10';

  const onDeleteRecipe = id => {
    console.log('delete', id);
  };

  return (
    <ListItems
      emptyText={EMPTY_TEXT.FAVORITES}
      currentPage={1}
      onCurrentPageChange={() => {}}
      list={[]}
      type={TYPE_TABS.RECIPE}
      onDeleteRecipe={onDeleteRecipe}
      isOwner={isOwner}
    />
  );
};

export default Favorites;
