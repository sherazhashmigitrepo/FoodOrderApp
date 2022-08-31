import React from 'react'
import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm'

function MealItem(props) {
    const price = props.price.toFixed(2)
    return (
        <li>
            <div>
                <h2>
                    {props.name}
                </h2>
                <div className={classes.description}>
                    {props.description}
                </div>
                <div className={classes.price}>
                   $ {price}
                </div>
            </div>
            <div className={classes.form}>
                <MealItemForm />
            </div>
        </li>
    )
}

export default MealItem