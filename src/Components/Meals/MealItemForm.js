import React from 'react'
import Input from '../UI/Input'
import classes from './MealItemForm.module.css'

function MealItemForm(props) {
    return (
        <form className={classes.mealForm}>
            <Input label='Amount'
                input={{
                    id: 'Amount_'+props.id,
                    type: 'number',
                    min: '1',
                    max: '5',
                    defaultValue: '1'
                }} />
            <button className={classes.button}>+ Add</button>
        </form>
    )
}

export default MealItemForm