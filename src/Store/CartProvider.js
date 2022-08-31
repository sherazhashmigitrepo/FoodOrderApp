import React, { useReducer } from 'react'
import CartContext from './CartContext'

const cartReducer = (state , action) => {
  if(action.type === 'addItem'){
    const updatedItems = state.items.concat(action.item)
    const updatedTotalAmount = state.totalAmount + action.item.amount * action.item.price; 
    return{
      items : updatedItems,
      amount : updatedTotalAmount
    }
  }
  return {items : [], totalAmount: 0}
}

function CartProvider(props) {

  const defaultValues = {
    items : [],
    totalAmount: 0
  }

  const [state, dispatch] = useReducer(cartReducer, defaultValues)

    const addItemToCartHandler = (item) =>{
        dispatch({type : 'addItem' , item : item})
    }
    const removeItemFromCartHandler = (id) =>{

    }
    const cartContext = {
        items : state.items,
        totalAmount:state.amount,
        addItem : addItemToCartHandler,
        removeItem : removeItemFromCartHandler
    }
  return (
    <CartContext.Provider value = {cartContext}>
        {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider