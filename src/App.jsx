import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import LandingPage from './landing/Landingpage'
// import Navbar from './mylanding/Navbar'
import Hero from './mylanding/Hero'
import FirstSection from './mylanding/FirstSection'
import SecondSec from './mylanding/SecondSec'
import Navbar from './piggyclone/Navbar'
import Heroo from './piggyclone/Heroo'
import Secone from './piggyclone/Secone'
import Sectwo from './piggyclone/Sectwo'
import Footer from './piggyclone/Footer'
import Navbarr from './Boltclone/Navbarr'
import BoltHero from './Boltclone/BoltHero'
import SeconeB from './Boltclone/SeconeB'
import SectwoB from './Boltclone/SectwoB'
import Map from './Boltclone/Map'
import SecThree from './Boltclone/SecThree'
import LastSec from './Boltclone/LastSec'

function App() {


  return (
    <div className='app'>
          <Navbar/>
          <Hero/>
          <FirstSection/>
          <SecondSec/>
          {/* <LandingPage/> */}

          {/* <Navbar/>
          <Heroo/>
          <Secone/>
          <Sectwo/>
          <Footer/> */}

          {/* <Navbarr/>
          <BoltHero/>
          <SeconeB/>
          <SectwoB/>
          <Map/>
          <SecThree/>
          <LastSec/> */}
          

    </div>
  )
}

export default App
