const RecipeFilters = () => {
  const ingredients = [
    {
      _id: '640c2dd963a319ea671e37aa',
      name: 'Squid',
    },
    {
      _id: '640c2dd963a319ea671e37f5',
      name: 'Cabbage',
    },
    {
      _id: '640c2dd963a319ea671e3665',
      name: 'Baking Powder',
    },
    {
      _id: '640c2dd963a319ea671e3804',
      name: 'Smoked Haddock',
    },
    {
      _id: '640c2dd963a319ea671e382c',
      name: 'Pears',
    },
    {
      _id: '640c2dd963a319ea671e3770',
      name: 'Spring Onions',
    },
    {
      _id: '640c2dd963a319ea671e36e9',
      name: 'Ginger Cordial',
    },
  ];

  const areas = [
    {
      _id: '6462a6f04c3d0ddd28897f9b',
      name: 'Ukrainian',
    },
    {
      _id: '6462a6f04c3d0ddd28897f9c',
      name: 'Italian',
    },
    {
      _id: '6462a6f04c3d0ddd28897f9d',
      name: 'Moroccan',
    },
    {
      _id: '6462a6f04c3d0ddd28897f9e',
      name: 'Unknown',
    },
    {
      _id: '6462a6f04c3d0ddd28897f9f',
      name: 'Thai',
    },
    {
      _id: '6462a6f04c3d0ddd28897fa0',
      name: 'Irish',
    },
    {
      _id: '6462a6f04c3d0ddd28897fa1',
      name: 'British',
    },
  ];

  return (
    <>
      <label id="ingredients">
        <select name="selectedingredients" placeholder="Ingredients">
          {ingredients.map(item => {
            return (
              <option value={item.name} id={item._id} key={item._id}>
                {item.name}
              </option>
            );
          })}
        </select>
      </label>
      <label id="areas">
        <select name="selectedArea" placeholder="Area">
          {areas.map(item => {
            return (
              <option value={item.name} id={item._id} key={item._id}>
                {item.name}
              </option>
            );
          })}
        </select>
      </label>
    </>
  );
};
export default RecipeFilters;
