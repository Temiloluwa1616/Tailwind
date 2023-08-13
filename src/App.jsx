import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import LandingPage from './landing/Landingpage'
// import Navbar from './mylanding/Navbar'
import Hero from './mylanding/Hero'
import { Routes, Route } from "react-router-dom";
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
import HomePage from './Musica/Homepage'
import Sidebar from './Musica/Sidebar'
import Album from './Musica/Album'
import Collections from './Musica/Collections'



function App() {


  return (
    <div className='app'>
          {/* <Navbar/>
          <Hero/>
          <FirstSection/>
          <SecondSec/> */}


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
          
          {/* <Sidebar/> */}
          <Routes>
            <Route>
            <Route path="/" element={<HomePage/>} />
          <Route path="/album" element={<Album/>} />
          <Route path= "/collection" element={<Collections/>} />
            </Route>
          </Routes>



    </div>
  )
}

export default App
