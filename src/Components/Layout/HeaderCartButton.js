import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import classes from './HeaderCartButton.module.css'
import CartContext from '../../Store/CartContext'

function HeaderCartButton(props) {
  const [btnIsBump , setBtnIsBump] = useState(false)
  const cartCtx = useContext(CartContext)
  const totalAmount = cartCtx.items.reduce((crun , items)=>{
    return crun+items.amount
  } , 0)
  const btnClass = `${classes.button}  ${btnIsBump ? classes.bump : ''} `
  const {items} = cartCtx;
  useEffect(() => {
    if(items.length === 0){
      return;
    }
    setBtnIsBump(true)
   const timer =  setTimeout(() => {
      setBtnIsBump(false)
    },300)

    return () => {clearTimeout(timer)}
  },[items])
  return (
    <button onClick={props.showCart} className={btnClass}>
        <span ><FontAwesomeIcon className={classes.cart_icon} icon={faShoppingCart} /></span>
        <span >Your Cart</span>
        <span className={classes.cart_badge}>{totalAmount}</span>
    </button>
  )
}

export default HeaderCartButton