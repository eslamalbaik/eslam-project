import React from 'react'
import { Header, Hero, AboutUs, Projects, Contact, Footer } from './Components'
import './index.css';


const App = () => {
  return (
    <div className='inline-block h-[1111px] relative bg-secondary-light dark:bg-primary-dark transition duration-300 box-content'>
      <Header />
      <br />
      <Hero />
      <AboutUs />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

