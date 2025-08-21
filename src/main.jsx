import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import './Responsive.css'

import Navbar, { AboutSection, Contect, Footer, HeroSection, MobileNav, Saprater, Service } from './App'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <MobileNav />
    <HeroSection />
    <Saprater />
    <AboutSection />
    <Saprater />
    <Service />
    <Saprater />
    <Contect />
    <Saprater />
    <Footer />
  </StrictMode>,
)
