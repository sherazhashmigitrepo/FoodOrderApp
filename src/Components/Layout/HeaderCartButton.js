import React from 'react'
import { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import classes from './HeaderCartButton.module.css'
import CartContext from '../../Store/CartContext'

function HeaderCartButton(props) {
  const cartCtx = useContext(CartContext)
  const totalAmount = cartCtx.items.reduce((crun , items)=>{
    return crun+items.amount
  } , 0)
  return (
    <button onClick={props.showCart} className={classes.button}>
        <span ><FontAwesomeIcon className={classes.cart_icon} icon={faShoppingCart} /></span>
        <span >Your Cart</span>
        <span className={classes.cart_badge}>{totalAmount}</span>
    </button>
  )
}

export default HeaderCartButton