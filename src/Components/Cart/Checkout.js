import React, { useRef, useState } from 'react'
import classes from './Checkout.module.css'

function Checkout(props) {
    const [formIsValid, setFormIsValid] = useState(false)
    const nameInputRef = useRef('')
    const streetInputRef = useRef('')
    const postalInputRef = useRef('')
    const cityInputRef = useRef('')

    const cancelOrderHandler = () => {
        props.cancelOrder();
    }
    const confirmHandler = (e) => {
        e.preventDefault();
        const enteredName = nameInputRef.current.value
        const enteredStreet = streetInputRef.current.value
        const enteredPostal = postalInputRef.current.value
        const enteredCity = cityInputRef.current.value
        if (enteredName === '' || enteredStreet === '' || enteredPostal === '' || enteredCity === '') {
            setFormIsValid(true)
            return;
        } else {
            props.onConfirm({
               name: enteredName,
                street :enteredStreet,
                postal :enteredPostal,
                city :enteredCity
            });
        }

    }
    const cotrolClasses = `${classes.control} ${formIsValid ? classes.invalid : ''}`
    return (
        <form onSubmit={confirmHandler}>
            <div className={cotrolClasses}>
                <label htmlFor="name">Your Name</label>
                <input type="text" ref={nameInputRef} />
            </div>
            <div className={cotrolClasses}>
                <label htmlFor="street">Street</label>
                <input type="text" ref={streetInputRef} />
            </div>
            <div className={cotrolClasses}>
                <label htmlFor="postal">Postal Code</label>
                <input type="text" ref={postalInputRef} />
            </div>
            <div className={cotrolClasses}>
                <label htmlFor="city">City</label>
                <input type="text" ref={cityInputRef} />
            </div>
            <button>Confirm</button>
            <button onClick={cancelOrderHandler}>Cancel</button>
        </form>
    )
}

export default Checkout