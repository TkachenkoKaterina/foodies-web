import ListItems from '../../../components/ListItems';
import { TYPE_TABS, EMPTY_TEXT } from '../../../constants/common';

const Favorites = () => {
  return (
    <ListItems
      emptyText={EMPTY_TEXT.FAVORITES}
      currentPage={1}
      onCurrentPageChange={() => {}}
      list={[{}]}
      type={TYPE_TABS.RECIPE}
    />
  );
};

export default Favorites;
