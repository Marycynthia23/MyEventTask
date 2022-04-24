import React from 'react'
import styles from './Nav.module.css';
import logo from '../../../images/AMVCA-logo.jpeg'

export const Nav = () => {
  return (
    <div className={styles.NavCont}>
    <div className={styles.Navleft}>
    <img src={logo} className={styles.Logo}/>
    <li><a href="#register" className={styles.NavLinks}>Register</a></li>
    </div>
    <div className={styles.NavRight}>
    <li><i className="fab fa-facebook"></i></li>
    <li><i className="fab fa-twitter"></i></li>
    <li><i className="fab fa-instagram"></i></li>
    </div>
    </div>
    
  )
}
