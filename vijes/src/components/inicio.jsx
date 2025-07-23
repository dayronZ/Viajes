import { useState, useEffect } from 'react';
import AuthModal from './AuthModal.jsx';

const Navbar = () => {
  const [navbarStyle, setNavbarStyle] = useState('light');
  const [showAuthModal, setShowAuthModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset for navbar height
      
      // Get all sections
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
        
        // Define which sections need dark navbar
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
    handleScroll(); // Check initial position
    
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
          <li><a href="#seccion2" >Paquetes</a></li>
          <li><a href="#seccion3">Todo Incluido</a></li>
          <li><a href="#seccion4">Mas visitados</a></li>
          <li><a href="#seccion5">Blogs</a></li>
          <li><a href="#seccion6">Costos</a></li>
          <li><a href="#seccion7">Contactanos</a></li>
          <li><button className="login-btn" onClick={() => window.open('/login', '_blank')}>Login</button></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
