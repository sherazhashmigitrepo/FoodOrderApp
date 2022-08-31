import React from 'react'
import classes from './Cart.module.css'

function Cart() {
    const cartItems = [{id:'e1',name:'Chiken Krahi',Price:33.56}].map(item => <li>{item.name}</li>)
  return (
    <div>
        {cartItems}
        <div className={classes.totalAmount}>
            <span>Total Amount</span>
            <span>33.56</span>
        </div>
        <div className={classes.actions}>
            <button>Close</button>
            <button>Order</button>
        </div>
    </div>
  )
}

export default Cart