import React, { Fragment, useState } from 'react'
import Modal from '../UI/Modal'
import CartContext from '../../Store/CartContext'
import { useContext } from 'react'
import classes from './Cart.module.css'
import CartItem from './CartItem'
import Checkout from './Checkout'

function Cart(props) {
  const [order , setOrder] = useState(false)
  const [submiting , setSubmiting] = useState(false)
  const [submited , setSubmited] = useState(false)
  const orderMealHandler = (e) => {
    e.preventDefault();
    setOrder(true)
  }
  const cancelOrderMealHandler = () => {
    setOrder(false)
  }
  const cartCtx = useContext(CartContext)
  const hasItems = cartCtx.items.length > 0;
  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  }
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  }
  const orderHandler = (userData) => {
    setSubmiting(true)
    fetch('https://foodorderapp-abb98-default-rtdb.asia-southeast1.firebasedatabase.app/order.json',{
    method: 'POST',
    body: JSON.stringify({
      user : userData,
      orderItems : cartCtx.items
    })
    }
    )
    cartCtx.clearCart();
    setSubmiting(false)
    setSubmited(true)
  }
  const totalAmount = `Rs${cartCtx.totalAmount.toFixed(2)}`
    const cartItems = cartCtx.items.map(item => <CartItem  
     id = {item.id} 
     key = {item.id} 
     name = {item.name} 
     price = {item.price} 
     amount = {item.amount}
     onAdd = {cartItemAddHandler.bind(null , item)}
     onRemove = {cartItemRemoveHandler.bind(null , item.id)}
      />)
      const cartModalContent = <Fragment>
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
            {!order && <button className={classes['button--alt']} onClick ={props.hideCart}>Close</button>}
            {hasItems && !order &&<button onClick={orderMealHandler} className={classes.button}>Order</button>}
        </div>
        {order && <Checkout onConfirm = {orderHandler} cancelOrder = {cancelOrderMealHandler}/>}
      </Fragment>
      const submittingParagraph = <p>Your order is submitting</p>
      const submittedParagraph = <p>Succecfully Your order is submited</p>

  return (
    <Modal hideCart = {props.hideCart}>
      {!submiting && !submited && cartModalContent}
      {submiting && submittingParagraph}
      {submited && submittedParagraph}
    </Modal>
  )
}

export default Cart