import React from 'react'
import Card from '../UI/Card'
import classes from './MealSummary.module.css'

function MealSummary() {
  return (
    <Card className={classes.summary}>
        <h1>Lorem ipsum dolor sit amet.</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum, alias vitae praesentium necessitatibus totam aut.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum, alias vitae praesentium necessitatibus totam aut.</p>
    </Card>
  )
}

export default MealSummary