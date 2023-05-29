import React from 'react'
import classes from './Button.module.css'
const Button = ({button}) => {
    console.log(button);
    const customClass = `${classes.btn} ${!button.isSuccess ? classes.red : classes.green}`
  return (
    <button className={customClass}>{button.title}</button>
)
}

export default Button