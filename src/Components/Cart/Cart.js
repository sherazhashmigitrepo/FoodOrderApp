import React from 'react'
import Modal from '../UI/Modal'
import CartContext from '../../Store/CartContext'
import { useContext } from 'react'
import classes from './Cart.module.css'
import CartItem from './CartItem'

function Cart(props) {
  const cartCtx = useContext(CartContext)
  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  }
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  }
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
    const cartItems = cartCtx.items.map(item => <CartItem  
     id = {item.id} 
     key = {item.id} 
     name = {item.name} 
     price = {item.price} 
     amount = {item.amount}
     onAdd = {cartItemAddHandler.bind(null , item)}
     onRemove = {cartItemRemoveHandler.bind(null , item.id)}
      />)
  return (
    <Modal hideCart = {props.hideCart}>
      <div className={classes.cart_list}>
      <ul>
        {cartItems}
      </ul>
      </div>
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick ={props.hideCart}>Close</button>
            <button className={classes.button}>Order</button>
        </div>
    </Modal>
  )
}

export default Cart