import React, { Fragment } from 'react'
import classes from './Modal.module.css'
import ReactDom from 'react-dom'

const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.hideCart} />
}
const Overlay = (props) => {
    return <div className={classes.overlay}>
      <div className={classes.content}>{props.children}</div>
    </div>
}
const container = document.getElementById('overlay')
function Modal(props) {
  return (
    <Fragment>
    {ReactDom.createPortal(<Backdrop hideCart = {props.hideCart}/> , container)}
    {ReactDom.createPortal(<Overlay>{props.children}</Overlay> , container)}
    </Fragment>
  )
}

export default Modal