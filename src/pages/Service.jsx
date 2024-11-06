import React from 'react'
import Header from '../components/Header';
import Cards from '../components/Cards';
import Sprites from '../components/Sprites';
import Footer from '../components/Footer';
import Partners from '../components/Partners';
import '../scss/style.scss';

const Service = () => {
  return (
    <>
    <div className="wrapper">
        <Header/>
        <Cards/>
    </div>
    <main>
      <div className="service">
        <Partners/>  
      </div>
    </main>
    <Footer/>
    <Sprites/>
    </>
  )
}

export default Service;