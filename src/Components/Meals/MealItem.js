import React from 'react'
import { useContext } from 'react'
import CartContext from '../../Store/CartContext'
import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm'

function MealItem(props) {
    const ctx = useContext(CartContext)
    const price = props.price.toFixed(2)
    const addToCartHandler=(amount)=>{
        ctx.addItem({
            key : props.id,
            id:props.id,
            name:props.name,
            price:props.price,
            amount:amount
        })
    }
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
                <MealItemForm onAddCart = {addToCartHandler}/>
            </div>
        </li>
    )
}

export default MealItem