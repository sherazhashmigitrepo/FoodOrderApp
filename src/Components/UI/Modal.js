import React from 'react'
import classes from './Modal.module.css'
import { ReactDOM } from 'react'
import { createPortal } from 'react-dom'

const Backdrop = (props) => {
    return <div className={classes.backdrop}>{props.children}</div>
}
const Overlay = (props) => {
    const overlay_class = classes.overlay +''+ props.className
    return <div className={overlay_class}>{props.children}</div>
}

function Modal() {
  return (
    ReactDOM.createPortal(child, container)
  )
}

export default Modal