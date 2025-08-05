import { useState, useEffect } from 'react';
import AuthModal from './AuthModal.jsx';

const Navbar = () => {
  const [navbarStyle, setNavbarStyle] = useState('light');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
      } catch (err) {
        console.error('Error parsing user from localStorage', err);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    window.location.reload(); // o redirigir si prefieres
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      const sections = document.querySelectorAll('section');
      let currentSection = null;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          currentSection = section;
        }
      });

      if (currentSection) {
        const sectionId = currentSection.id;
        const darkSections = ['seccion1', 'seccion3', 'seccion5', 'seccion7'];
        const lightSections = ['seccion2', 'seccion4', 'seccion6'];

        if (darkSections.includes(sectionId)) {
          setNavbarStyle('dark');
        } else if (lightSections.includes(sectionId)) {
          setNavbarStyle('light');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-${navbarStyle}`}>
      <link rel="stylesheet" href="./nav.css" />
      <input type="checkbox" id="menu-toggle" className="menu-toggle" />
      <label htmlFor="menu-toggle" className="menu-icon">&#9776;</label>

      <div className="navbar-content">
        <div className="navbar-title">ViajesUtsh</div>
        <ul className="menu">
          <li><a href="#seccion1">Inicio</a></li>
          <li><a href="#seccion2">Paquetes</a></li>
          <li><a href="#seccion3">Todo Incluido</a></li>
          <li><a href="#seccion4">Más visitados</a></li>
          <li><a href="#seccion5">Blogs</a></li>
          <li><a href="#seccion6">Costos</a></li>
          <li><a href="#seccion7">Contáctanos</a></li>
          
          {/* Mostrar botón según estado de login */}
          <li>
            {user ? (
              <button className="logout-btn" onClick={handleLogout}>
                Cerrar sesión
              </button>
            ) : (
              <button className="login-btn" onClick={() => window.open('/login', '_blank')}>
                Login
              </button>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
