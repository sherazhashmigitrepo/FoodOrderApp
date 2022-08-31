import React, { Fragment } from 'react'
import img from '../../assets/meals.jpg'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'

function Header(props) {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Hashmi Resturant</h1>
                <HeaderCartButton showCart = {props.showCart}/>
            </header>
            <div className={classes['main-img']}>
                <img src={img} alt="Image of full of delicious foods" />
            </div>
        </Fragment>
    )
}

export default Header