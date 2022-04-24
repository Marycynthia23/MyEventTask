import React from 'react'
import banner from '../../../images/AMVCA-banner1.webp';
import styles from './Hero.module.css';

export const Hero = () => {
  return (
    <div className={styles.HeroCont}>
    <div className={styles.Banner}>
    <div className={styles.HeroInfo}>
    <h2 className={styles.Title}>AMVCA</h2><br/>
    <h1 className={styles.SubTitle}>Africa Magic Viewers' Choice Awards</h1>
    </div>
    </div>
    <div className={styles.HeroText}>
    <h1 className={styles.HeroHeader}> About Event</h1>
    <p className={styles.About}>Africa Magic Viewers' Choice Awards is an annual accolade presented by 
      MultiChoice recognizing outstanding achievement in television and film.
      Organisers announce nominees in 33 categories. The organisers say the 
      viewers will decide the winners in 12 categories.Multichoice has fixed the 8th edition of the 
      Africa Magic Viewers' Choice Awards (AMVCA) for May 14. Click <span className={styles.Here}><a href="#register" className={styles.HereLink}>here </a></span> to reserve a seat.
    </p>
    </div>
    </div>
  )
}
