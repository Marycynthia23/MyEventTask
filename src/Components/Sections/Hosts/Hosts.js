import React from 'react'
import SuSu from '../../../images/susu.jpeg'
import Dan from '../../../images/Dan.webp'
import styles from './Hosts.module.css';

export const Hosts = () => {
  return (
    <div>
    <h1 className={styles.HostsHeader}>Hosts</h1>
    <div className={styles.HostsCont}>
    <div className={styles.HostsCol}>
        <img src={SuSu} alt="" className={styles.host}/>
        <div className={styles.HostsText}>
            <h3>Adesua Etomi-Wellington</h3>
            <p>Female Host</p>
        </div>
    </div>
    <div className={styles.HostsCol}>
        <img src={Dan} alt="" className={styles.host}/>
        <div className={styles.HostsText}>
            <h3>Daniel Etim-Effiong</h3>
            <p>Male Host</p>
        </div>
    </div>
    </div>
    </div>

  )
}
