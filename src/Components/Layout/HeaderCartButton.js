import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import classes from './HeaderCartButton.module.css'

function HeaderCartButton() {
  return (
    <button className={classes.button}>
        <span ><FontAwesomeIcon className={classes.cart_icon} icon={faShoppingCart} /></span>
        <span >Your Cart</span>
        <span className={classes.cart_badge}>0</span>
    </button>
  )
}

export default HeaderCartButton