import React, { useReducer } from 'react'
import CartContext from './CartContext'

const cartReducer = (state , action) => {

  //In case of adding items
  if(action.type === 'addItem'){
    const updatedTotalAmount = state.totalAmount + action.item.amount * action.item.price; 

    const existingItemIndex = state.items.findIndex(item => item.id === action.item.id)
    const existingItem = state.items[existingItemIndex]


    //Logic to get same items in a cart item
    let updatedItems;
    if(existingItem){
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount + action.item.amount
      }
      updatedItems = [...state.items]
      updatedItems[existingItemIndex] = updatedItem
    }else{
       updatedItems = state.items.concat(action.item)
    }
    //result after  execution of AddItem function part
    return{
      items : updatedItems,
      totalAmount : updatedTotalAmount
    }
  }
  
  //In case of removing items
  if(action.type === 'removeItem'){
    
    const existingItemIndex = state.items.findIndex(item => item.id === action.id)
    const existingItem = state.items[existingItemIndex]
    const updatedTotalAmount = state.totalAmount -  existingItem.price;
    
    //Logic to get same items in a cart item
     //Logic to get same items in a cart item
     let updatedItems;
     if(existingItem.amount === 1){
       updatedItems = state.items.filter(item => item.id !== action.id)
      }else{
       const  updatedItem = {
          ...existingItem , amount: existingItem.amount-1
        }
        updatedItems=[...state.items];
        updatedItems[existingItemIndex] = updatedItem;
     }
    
    
    //result after  execution of AddItem function part
    return{
      items : updatedItems,
      totalAmount : updatedTotalAmount
    }    
    }

  //Default return of cart reducer
  return {
    items : [],
    totalAmount: 0
  };
}





//CartProvider main function to be export
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
      dispatch({type : 'removeItem' , id : id})
    }
    const cartContext = {
        items : state.items,
        totalAmount:state.totalAmount,
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