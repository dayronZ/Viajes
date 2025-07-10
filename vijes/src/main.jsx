import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Navbar from './components/inicio.jsx'
import Seccion1 from './components/seccion1.jsx'
import Seccion2 from './components/seccion2.jsx'
import Seccion6 from './components/Seccion6.jsx'
import Seccion7 from './components/Seccion7.jsx'
import Seccion3 from './components/seccion3.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <Seccion1/>
    <Seccion2/>
    <Seccion3/>
    <Seccion6/>
    <Seccion7/>
  </StrictMode>,
)
