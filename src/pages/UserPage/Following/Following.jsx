import ListItems from '../../../components/ListItems';
import { TYPE_TABS, EMPTY_TEXT } from '../../../constants/common';

const Following = () => {
  return (
    <ListItems
      emptyText={EMPTY_TEXT.FOLLOWING}
      onCurrentPageChange={() => {}}
      list={[]}
      type={TYPE_TABS.USER}
    />
  );
};

export default Following;
