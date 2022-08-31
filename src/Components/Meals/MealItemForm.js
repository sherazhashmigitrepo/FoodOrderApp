import React, { useState } from 'react'
import Input from '../UI/Input'
import classes from './MealItemForm.module.css'
import { useRef , useEffect} from 'react';

function MealItemForm(props) {
    const [isValid , setIsValid] = useState(true)
    const inputRef = useRef()
    const submitFormHandler = (e) => {
        e.preventDefault();
        const enteredAmount = inputRef.current.value
        const enteredAmountNumber = +enteredAmount
        if (
            enteredAmount.trim().length === '' ||
            enteredAmountNumber < 1 ||
            enteredAmountNumber > 5
        ) {
            setIsValid(false)
            return;
        }
        props.onAddCart(enteredAmountNumber)
    }
    return (
        <form className={classes.mealForm} onSubmit={submitFormHandler}>
            <Input label='Amount'
                input={{
                    ref: inputRef,
                    id: 'Amount_' + props.id,
                    type: 'number',
                    min: '1',
                    max: '5',
                    defaultValue: '1'
                }} />
            <button className={classes.button} >+ Add</button>
            {!isValid && <p>Please enter between 1-5</p>}
        </form>
    )
}

export default MealItemForm