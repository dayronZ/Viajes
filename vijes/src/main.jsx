import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

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

import LoginForm from './components/LoginForm.jsx';
import RegisterForm from './components/RegisterForm.jsx';
import RecoveryForm from './components/RecoveryForm.jsx';

const Home = () => (
  <>
    <Seccion1 />
    <Seccion2 />
    <Seccion3 />
    <Seccion4 />
    <Seccion5 />
    <Seccion6 />
    <Seccion7 />
    <Seccion8 />
    <Seccion9 />
  </>
);

// Layout que controla visibilidad del navbar según ruta
const AppLayout = () => {
  const location = useLocation();
  const hideNavbarPaths = ['/login', '/register', '/recovery'];
  const shouldHideNavbar = hideNavbarPaths.includes(location.pathname.toLowerCase());

  return (
    <>
      {!shouldHideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={<LoginForm onSuccess={() => (window.location.href = '/')} />}
        />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/recovery" element={<RecoveryForm />} />
      </Routes>
    </>
  );
};

const App = () => (
  <BrowserRouter>
    <AppLayout />
  </BrowserRouter>
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);

