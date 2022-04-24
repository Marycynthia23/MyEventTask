import React from 'react'
import Am from '../../../images/African-magic-logo.jpeg'
import MultiChoice from '../../../images/multichoice-logo.jpeg'
import Amstel from '../../../images/Amstel-Logo.png'
import styles from './Sponsors.module.css';


export const Sponsors = () => {
  return (
    <div>
    <h1 className={styles.SponsorsHeader}>Sponsors</h1>
    <div className={styles.SponsorsCont}>
    <img src={Am} alt="" className={styles.images}/>
    <img src={MultiChoice} alt="" className={styles.images}/>
    <img src={Amstel} alt="" className={styles.images}/>
    </div>
    </div>
  )
}
