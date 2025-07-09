import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Navbar from './components/inicio.jsx'
import Seccion4 from './components/seccion4.jsx'
import Seccion5 from './components/seccion5.jsx'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <Seccion4/>
    <Seccion5/>
  </StrictMode>,
)
