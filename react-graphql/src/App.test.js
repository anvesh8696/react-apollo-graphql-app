import React from 'react';
import { render, getByText } from '@testing-library/react';
import DataTable from "./DataTable";
const dessertList = [
    {
        id: 1,
        dessert: "Oreo",
        nutritionInfo: {
            calories: 437,
            fat: 18,
            carb: 6,
            protein: 4,
        }
    },
    {
        id: 2,
        dessert: "Nougat",
        nutritionInfo: {
            calories: 447,
            fat: 1,
            carb: 3,
            protein: 4,
        }
    },

    {
        id: 3,
        dessert: "Marshmallow",
        nutritionInfo: {
            calories: 7,
            fat: 184,
            carb: 633,
            protein: 56,
        }
    },
    {
        id: 4,
        dessert: "Lollipop",
        nutritionInfo: {
            calories: 478,
            fat: 34,
            carb: 57,
            protein: 467,
        }
    },
    {
        id: 5,
        dessert: "Kitkat",
        nutritionInfo: {
            calories: 678,
            fat: 676,
            carb: 67,
            protein: 78,
        }
    }
]


test('renders learn react link', () => {
  const { getByText } = render(
      <DataTable
      rows={dessertList}
      onSubmit={(daat)=>{}}
      onDelete={(selected)=>{}}
      onReset={()=>{}}/>);
   const dessertElement = getByText('Dessert (100g serving)');
   expect(dessertElement).toBeInTheDocument();
    const caloriesElement = getByText('Calories');
    expect(caloriesElement).toBeInTheDocument();
    const fatElement = getByText('Fat (g)');
    expect(fatElement).toBeInTheDocument();
    const resetElement = getByText('Reset');
    expect(resetElement).toBeInTheDocument();

});
