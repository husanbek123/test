import React from 'react'
import styles from './index.module.scss'
import logo from '../../Assets/Logo.svg'
import { NavLink } from 'react-router-dom'
import { Button } from '@mui/material'

function Navbar() {
  return (
    <div className={styles.navbar}>
        <div className={styles.logo}>
            <img src={logo} alt="" />
        </div>
        <ul className={styles.menu}>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/products">Products</NavLink></li>
            <li><NavLink to="/categories">Categories</NavLink></li>
            <li><NavLink to="/brands">Brands</NavLink></li>
            <li><NavLink to="/pricing">Pricing</NavLink></li>
        </ul>
        <div className={styles.btns}>
            <Button  color='success' variant='text' style={{
                backgroundColor: "transparent",
            }}>Login</Button>
            <Button style={{
                backgroundColor: "#3C9379",
                borderRadius: "8px"
            }} color='success' variant='contained'>Register</Button>
        </div>
    </div>
  )
}
export default Navbar