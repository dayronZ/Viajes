import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [navbarStyle, setNavbarStyle] = useState('light');
  const [user, setUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Detectar cambio de tamaño para actualizar isMobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Cargar usuario desde localStorage
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

  // Logout
  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/login');
    setShowModal(false);
  };

  // Cambiar estilo navbar según scroll y secciones
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
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (location.pathname.startsWith('/cotizador')) {
    return null;
  }

  return (
    <>
      <nav className={`navbar navbar-${navbarStyle}`}>
        <link rel="stylesheet" href="./nav.css" />

        <div className="navbar-content">
          {isMobile ? (
            <button
              className="navbar-title"
              style={{ background: 'none', border: 'none', cursor: 'pointer' }}
              onClick={() => setShowModal(true)}
              aria-label="Abrir menú"
            >
              ViajesUtsh
            </button>
          ) : (
            <div className="navbar-title">ViajesUtsh</div>
          )}

          {!isMobile && (
            <ul className="menu">
              <li><a href="#seccion1">Inicio</a></li>
              <li><a href="#seccion2">Paquetes</a></li>
              <li><a href="#seccion3">Todo Incluido</a></li>
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
                  <button className="login-btn" onClick={() => navigate('/login')}>
                    Login
                  </button>
                )}
              </li>
            </ul>
          )}
        </div>
      </nav>

      {isMobile && showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-menu" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setShowModal(false)}>
              &times;
            </button>
            <ul className="menu">
              <li><a href="#seccion1" onClick={() => setShowModal(false)}>Inicio</a></li>
              <li><a href="#seccion2" onClick={() => setShowModal(false)}>Paquetes</a></li>
              <li><a href="#seccion3" onClick={() => setShowModal(false)}>Cotiza</a></li>
              <li><a href="#seccion4" onClick={() => setShowModal(false)}>Más visitados</a></li>
              <li><a href="#seccion5" onClick={() => setShowModal(false)}>Blogs</a></li>
              <li><a href="#seccion6" onClick={() => setShowModal(false)}>Costos</a></li>
              <li><a href="#seccion9" onClick={() => setShowModal(false)}>Testimonios</a></li>
              <li><a href="#seccion7" onClick={() => setShowModal(false)}>Contáctanos</a></li>
              <li><a href="#seccion8" onClick={() => setShowModal(false)}>FAQs</a></li>
              <li>
                {user ? (
                  <button className="logout-btn" onClick={handleLogout}>
                    Cerrar sesión
                  </button>
                ) : (
                  <button
                    className="login-btn"
                    onClick={() => {
                      navigate('/login');
                      setShowModal(false);
                    }}
                  >
                    Login
                  </button>
                )}
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
