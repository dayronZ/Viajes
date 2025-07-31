import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import Navbar from './components/inicio.jsx';
import Seccion1 from './components/seccion1.jsx';
import Seccion2 from './components/seccion2.jsx';
import Seccion3 from './components/seccion3.jsx';
import Seccion4 from './components/seccion4.jsx';
import Seccion5 from './components/seccion5.jsx';
import Seccion6 from './components/seccion6.jsx';
import Seccion7 from './components/Seccion7.jsx';
import Seccion8 from './components/Seccion8.jsx';
import Seccion9 from './components/Seccion9.jsx';

const App = () => {
  return (
    <>
      <Navbar />
      <Seccion1 />
      <Seccion2 />
      <Seccion3 />
      <Seccion4 />
      <Seccion5 />
      <Seccion6 />
      <Seccion9/>
      <Seccion7 />
      <Seccion8/>
    </>
  );
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    </StrictMode>
);