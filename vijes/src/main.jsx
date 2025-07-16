import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Navbar from './components/inicio.jsx'
<<<<<<< HEAD
import Seccion1 from './components/seccion1.jsx'
import Seccion2 from './components/seccion2.jsx'
import Seccion6 from './components/seccion6.jsx'
import Seccion7 from './components/Seccion7.jsx'
=======
import Seccion4 from './components/seccion4.jsx'
import Seccion5 from './components/seccion5.jsx'

>>>>>>> origin/Luis

const App = () => {
  return (
    <>
      <Navbar/>
      <Seccion1/>
      <Seccion2/>
      <Seccion6/>
      <Seccion7/>
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
<<<<<<< HEAD
    <App />
=======
    <Navbar/>
    <Seccion4/>
    <Seccion5/>
>>>>>>> origin/Luis
  </StrictMode>,
)
