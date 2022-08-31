import React from 'react'
import classes from './CartItem.module.css'

function CartItem(props) {
    const price = `$${props.price.toFixed(2)}`
    const addToCartHandler =(e) => {
      e.preventDefault();
      props.onAdd();
    }
    const reomveCartHandler =(e) => {
      e.preventDefault();
      props.onRemove();
    }
  return (
    <div className={classes['cart-item']}>
        <div className={classes.items}>
            <h3>{props.name}</h3>
            <span>{price}</span>
            <span>x {props.amount}</span>
        </div>
        <div className={classes.actions}>
            <button className={classes.btn_alt} onClick={reomveCartHandler}>-</button>
            <button onClick={addToCartHandler}>+</button>
        </div>
    </div>
  )
}

export default CartItem