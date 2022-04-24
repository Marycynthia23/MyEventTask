import React from 'react'
import { Nav } from '../Sections/Nav/Nav';
import { Hero } from '../Sections/Hero/Hero';
import { Catalogue} from '../Sections/Catalogue/Catalogue';
import styles from './Home.module.css'
import { Sponsors } from '../Sections/Sponsors/Sponsors';
import { Hosts } from '../Sections/Hosts/Hosts';
import {Form} from '../Sections/Form/Form';
import { Footer } from '../Sections/Footer/Footer';

export const Home = () => {
  return (
    <div className={styles.HomeCont}>
    <Nav/>
    <Hero/>
    <Catalogue/>
    <Sponsors/>
    <Hosts/>
    <Form/>
    <Footer/>
    </div>
  )
}
