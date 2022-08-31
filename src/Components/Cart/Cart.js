import React from 'react'
import Modal from '../UI/Modal'
import classes from './Cart.module.css'

function Cart(props) {
    const cartItems = [{id:'e1' ,name:'Chiken Krahi',Price:33.56}].map(item => <span>{item.name}</span>)
  return (
    <Modal hideCart = {props.hideCart}>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>33.56</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick ={props.hideCart}>Close</button>
            <button className={classes.button}>Order</button>
        </div>
    </Modal>
  )
}

export default Cart