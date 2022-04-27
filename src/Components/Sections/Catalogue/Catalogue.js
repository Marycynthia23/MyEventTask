import React from 'react'
import styles from './Catalogue.module.css'
import A from '../../../images/williams.jpeg'
import B from '../../../images/Timini.jpg'
import C from '../../../images/jidekene.jpeg'
import D from '../../../images/Shaggiiiii.jpeg'
import E from '../../../images/gideon.jpeg'
import F from '../../../images/deyemi.jpeg'
import G from '../../../images/funke.jpeg'
import H from '../../../images/Nancy.png'
import I from '../../../images/StanNze.jpeg'



const actorsDetails = [
    { name: "Williams Uchemba", role: "Dear Affy", image: A},
    { name: "Timini Egbuson", role: "Ponzi", image: B},
    { name: "Jidekene Achufusi", role: "Living in Bondage", image: C},
    { name: "Broda Shaggi", role: "Dwindle", image: D},
    { name: "Gideon Okeke", role: "Loving Rona", image: E},
    // { name: "Shawn Faqua", role: "Soole", image: A, bc: "#f1f0ff" },
    { name: "Deyemi Okanlawon", role: "Omo Ghetto (The Saga)", image: F },
    { name: "Funke Akindele", role: "Omo Ghetto (The Saga)", image: G },
    { name: "Nancy Isime", role: "Kambili", image: H },
    { name: "Stan Nze", role: "RattleSnake", image: I }
  ];
export const Catalogue = () => {
  return (
    <div className={styles.CatalogueCont}>
    <h1 className={styles.CatHeader}>Africa Magic Viewers' Choice Awards </h1>
    <div className={styles.Nominees}>
          {actorsDetails.map((item) => {
            return (
              <div className={styles.NomineesCard} key={item.image}>
                <img src={item.image} alt="human" className={styles.TeamImg} />
                <div className={styles.cardBody}>
                  <p className={styles.name}>{item.name}</p>
                  <p className={styles.role}>{item.role}</p>
                </div>
              </div>
            );
          })}
    
        </div>

    
    </div>
  )
}
