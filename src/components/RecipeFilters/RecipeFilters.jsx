import { useState } from 'react';
import Select from '../../ui-kit/Select';

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
      <Select arrayOfObjects={areas} placeholder="Area" id="area" />
      <Select
        arrayOfObjects={ingredients}
        placeholder="Ingredients"
        id="ingredients"
      />
    </>
  );
};
export default RecipeFilters;
