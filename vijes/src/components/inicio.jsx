import { useState, useEffect } from 'react';

const Navbar = () => {
  const [navbarStyle, setNavbarStyle] = useState('light');
  const [user, setUser] = useState(null);
  const [showAuthModal, setShowAuthModal] = useState(false);

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
    window.location.reload(); // Puedes redirigir si lo prefieres
  };

  const handleLoginSuccess = (loggedInUser) => {
    localStorage.setItem('user', JSON.stringify(loggedInUser));
    setUser(loggedInUser);
    setShowAuthModal(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      const sections = document.querySelectorAll('section');
      let currentSection = null;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          currentSection = section;
        }
      });

      if (currentSection) {
        const sectionId = currentSection.id.toLowerCase();
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
    handleScroll(); // Inicializar
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-${navbarStyle}`}>
      <link rel="stylesheet" href="./nav.css" />
      <input type="checkbox" id="menu-toggle" className="menu-toggle" aria-label="Toggle menu" />
      <label htmlFor="menu-toggle" className="menu-icon" aria-label="Menú de navegación">
        &#9776;
      </label>

      <div className="navbar-content">
        <div className="navbar-title">ViajesUtsh</div>
        <ul className="menu">
          <li><a href="#seccion1">Inicio</a></li>
          <li><a href="#seccion2">Paquetes</a></li>
          <li><a href="#seccion3">Cotizar</a></li>
          <li><a href="#seccion4">Más visitados</a></li>
          <li><a href="#seccion5">Blogs</a></li>
          <li><a href="#seccion6">Costos</a></li>
          <li><a href="#seccion7">Contáctanos</a></li>
          <li><a href="#seccion8">FAQs</a></li>

          <li>
            {user ? (
              <button className="logout-btn" onClick={handleLogout}>
                Cerrar sesión
              </button>
            ) : (
              <button
                className="login-btn"
                onClick={() => window.location.href = '/login'}
              >
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
