// index.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
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
import Seccion9 from './components/Seccion9.jsx'; // Asegúrate de que este archivo exista

import LoginForm from './components/LoginForm.jsx';
import RegisterForm from './components/RegisterForm.jsx';
import RecoveryForm from './components/RecoveryForm.jsx';

// Página principal
const Home = () => (
  <>
    <Seccion1 />
    <Seccion2 />
    <Seccion3 />
    <Seccion4 />
    <Seccion5 />
    <Seccion6 />
    <Seccion9 />
    <Seccion7 />
    <Seccion8 />
  </>
);

// Layout con Navbar condicional
const AppLayout = () => {
  const location = useLocation();
  const hideNavbarPaths = ['/login', '/register', '/recovery'];
  const shouldHideNavbar = hideNavbarPaths.includes(location.pathname.toLowerCase());

  return (
    <>
      {!shouldHideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/recovery" element={<RecoveryForm />} />
      </Routes>
    </>
  );
};

// App principal
const App = () => (
  <BrowserRouter>
    <AppLayout />
  </BrowserRouter>
);

// Render
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
