import React from 'react'
import Card from '../UI/Card'
import classes from './AvailableMeals.module.css'
import MealItem from './MealItem'


const Dummy_Meals = [
    {
        id:'e1',
        name: 'Mutton Krahi',
        description: 'Lorem ipsum dolor sit amet consectetur.',
        price: 33.44
    },
    {
        id:'e2',
        name: 'Chicken Krahi',
        description: 'Lorem ipsum dolor sit amet consectetur.',
        price: 21.35
    },
    {
        id:'e3',
        name: 'Beaf Plao',
        description: 'Lorem ipsum dolor sit amet consectetur.',
        price: 18.29
    },
    {
        id:'e4',
        name: 'Sindhi Biryaani',
        description: 'Lorem ipsum dolor sit amet consectetur.',
        price: 26.0489
    },
]

const meals = Dummy_Meals.map((item) => <MealItem 
id = {item.id}
key = {item.id}
name = {item.name}
description = {item.description}
price = {item.price}
 />)

function AvailableMeals() {
  return (
    <Card className={classes.meals}>
        <ul>
    {meals}
        </ul>
    </Card>
  )
}

export default AvailableMeals