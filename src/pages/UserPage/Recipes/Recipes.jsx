import { useParams } from 'react-router-dom';
import ListItems from '../../../components/ListItems';
import { TYPE_TABS, EMPTY_TEXT } from '../../../constants/common';
import foodImg from '../../../assets/images/food.png';

const recipes = [
  {
    id: '1',
    img: foodImg,
    title: 'SALMON AVOCADO SALAD qwerty',
    decription:
      'Is a healthy salad recipe tha`s big on nutrients and flavor. A moist, pan seared salmon is layered on top of spinach, avocado, tomatoes, and red onions. Then drizzled with a homemade lemon vinaigrette. Is a healthy salad recipe that`s big on nutrients and flavor.',
  },
  {
    id: '2',
    img: foodImg,
    title: 'SALMON AVOCADO SALAD qwerty',
    decription:
      'Is a healthy salad recipe tha`s big on nutrients and flavor. A moist, pan seared salmon is layered on top of spinach, avocado, tomatoes, and red onions. Then drizzled with a homemade lemon vinaigrette. Is a healthy salad recipe that`s big on nutrients and flavor.',
  },
  {
    id: '3',
    img: foodImg,
    title: 'SALMON AVOCADO SALAD qwerty',
    decription:
      'Is a healthy salad recipe tha`s big on nutrients and flavor. A moist, pan seared salmon is layered on top of spinach, avocado, tomatoes, and red onions. Then drizzled with a homemade lemon vinaigrette. Is a healthy salad recipe that`s big on nutrients and flavor.',
  },
  {
    id: '4',
    img: foodImg,
    title: 'SALMON AVOCADO SALAD qwerty',
    decription:
      'Is a healthy salad recipe tha`s big on nutrients and flavor. A moist, pan seared salmon is layered on top of spinach, avocado, tomatoes, and red onions. Then drizzled with a homemade lemon vinaigrette. Is a healthy salad recipe that`s big on nutrients and flavor.',
  },
  {
    id: '5',
    img: foodImg,
    title: 'SALMON AVOCADO SALAD qwerty',
    decription:
      'Is a healthy salad recipe tha`s big on nutrients and flavor. A moist, pan seared salmon is layered on top of spinach, avocado, tomatoes, and red onions. Then drizzled with a homemade lemon vinaigrette. Is a healthy salad recipe that`s big on nutrients and flavor.',
  },
  {
    id: '6',
    img: foodImg,
    title: 'SALMON AVOCADO SALAD qwerty',
    decription:
      'Is a healthy salad recipe tha`s big on nutrients and flavor. A moist, pan seared salmon is layered on top of spinach, avocado, tomatoes, and red onions. Then drizzled with a homemade lemon vinaigrette. Is a healthy salad recipe that`s big on nutrients and flavor.',
  },
  {
    id: '7',
    img: foodImg,
    title: 'SALMON AVOCADO SALAD qwerty',
    decription:
      'Is a healthy salad recipe tha`s big on nutrients and flavor. A moist, pan seared salmon is layered on top of spinach, avocado, tomatoes, and red onions. Then drizzled with a homemade lemon vinaigrette. Is a healthy salad recipe that`s big on nutrients and flavor.',
  },
  {
    id: '8',
    img: foodImg,
    title: 'SALMON AVOCADO SALAD qwerty',
    decription:
      'Is a healthy salad recipe tha`s big on nutrients and flavor. A moist, pan seared salmon is layered on top of spinach, avocado, tomatoes, and red onions. Then drizzled with a homemade lemon vinaigrette. Is a healthy salad recipe that`s big on nutrients and flavor.',
  },
  {
    id: '9',
    img: foodImg,
    title: 'SALMON AVOCADO SALAD qwerty',
    decription:
      'Is a healthy salad recipe tha`s big on nutrients and flavor. A moist, pan seared salmon is layered on top of spinach, avocado, tomatoes, and red onions. Then drizzled with a homemade lemon vinaigrette. Is a healthy salad recipe that`s big on nutrients and flavor.',
  },
];

const Recipes = () => {
  const { id } = useParams();

  const isOwner = id === '10';

  const onDeleteRecipe = id => {
    console.log('delete', id);
  };
  return (
    <ListItems
      emptyText={EMPTY_TEXT.RECIPES}
      currentPage={1}
      onCurrentPageChange={() => {}}
      list={recipes}
      type={TYPE_TABS.RECIPE}
      onDeleteRecipe={onDeleteRecipe}
      isOwner={isOwner}
    />
  );
};

export default Recipes;
