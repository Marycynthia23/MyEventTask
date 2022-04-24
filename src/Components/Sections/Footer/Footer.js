import React from 'react'
import styles from './Footer.module.css'

export const Footer = () => {
  return (
    <div className={styles.FooterCont}>
    <div className={styles.NavRight}>
    <li><i className="fab fa-facebook"></i></li>
    <li><i className="fab fa-twitter"></i></li>
    <li><i className="fab fa-instagram"></i></li>
    </div>
    </div>
  )
}
