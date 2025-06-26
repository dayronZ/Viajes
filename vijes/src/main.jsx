import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Navbar from './components/inicio.jsx'
import Seccion1 from './components/seccion1.jsx'
import Seccion2 from './components/seccion2.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <Seccion1/>
    <Seccion2/>
  </StrictMode>,
)
