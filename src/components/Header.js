import React from 'react'
import classes from './Header.module.css'
const Header = () => {
  return (
    <nav>
        <div className={classes.one}>
            <p id={classes.logo}>EDYODA</p>
            <p>Courses<select></select></p>
            <p>Programs<select></select></p>
            
        </div>
        <div className={classes.two}>
            <p>🔍</p>
            <p>Login</p>
            <button>Join Now</button>
        </div>
    </nav>
  )
}

export default Header