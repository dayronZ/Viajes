import Swal from 'sweetalert2'
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [navbarStyle, setNavbarStyle] = useState("light");
  const [user, setUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (err) {
        console.error("Error parsing user from localStorage", err);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
    setShowModal(false);
    Swal.fire("Esperamos tenerte de regreso pronto!");
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      const sections = document.querySelectorAll("section");
      let currentSection = null;

      sections.forEach((section) => {
        if (
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          currentSection = section;
        }
      });

      if (currentSection) {
        const sectionId = currentSection.id.toLowerCase();
        const darkSections = ["seccion1", "seccion3", "seccion5", "seccion7"];
        const lightSections = ["seccion2", "seccion4", "seccion6"];

        if (darkSections.includes(sectionId)) setNavbarStyle("dark");
        else if (lightSections.includes(sectionId)) setNavbarStyle("light");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (location.pathname.startsWith("/cotizador")) {
    return null;
  }

  return (
    <>
      {/* Bootstrap CDN */}
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-LN+7fdVzj6u52u30Kp6M/trliBMCMKTyK833zpbD+pXdCLuTusPj697FH4R/5mcr"
        crossOrigin="anonymous"
      />

      {/* Custom global styles to remove body margin and prevent white line */}
      <style>{`
        body, html, #root {
          margin: 0;
          padding: 0;
          background-color: #111; /* Match modal bg or navbar dark bg */
          overflow-x: hidden;
        }
        /* Remove any extra margin/padding on navbar-toggler in mobile */
        .navbar-toggler {
          border: none;
          outline: none;
        }
      `}</style>

      <nav
        className={`navbar navbar-expand-lg ${
          navbarStyle === "dark" ? "navbar-dark bg-dark" : "navbar-light bg-light"
        } fixed-top shadow`}
      >
        <div className="container">
          <a className="navbar-brand fw-bold" href="#seccion1">
            ViajesUtsh
          </a>
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setShowModal(true)}
            aria-label="Abrir menú"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {!isMobile && (
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#seccion1">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#seccion2">
                  Paquetes
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#seccion3">
                  Todo Incluido
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#seccion4">
                  Más visitados
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#seccion5">
                  Blogs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#seccion6">
                  Costos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#seccion9">
                  Testimonios
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#seccion7">
                  Contáctanos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#seccion8">
                  FAQs
                </a>
              </li>
              <li className="nav-item">
                {user ? (
                  <button className="btn btn-outline-danger ms-2" onClick={handleLogout}>
                    Cerrar sesión
                  </button>
                ) : (
                  <button
                    className="btn btn-outline-primary ms-2"
                    onClick={() => navigate("/login")}
                  >
                    Login
                  </button>
                )}
              </li>
            </ul>
          )}
        </div>
      </nav>

      {/* Modal menú móvil */}
      {isMobile && showModal && (
        <div
          onClick={() => setShowModal(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.9)",
            zIndex: 3000,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          aria-modal="true"
          role="dialog"
        >
          <nav
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: "#111",
              width: "90vw",
              maxWidth: "400px",
              height: "auto",
              borderRadius: "8px",
              padding: "2rem 1.5rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1.5rem",
            }}
          >
            <button
              onClick={() => setShowModal(false)}
              aria-label="Cerrar menú"
              style={{
                background: "none",
                border: "none",
                fontSize: "2rem",
                color: "white",
                cursor: "pointer",
                alignSelf: "flex-end",
                marginBottom: "1rem",
              }}
            >
              &times;
            </button>

            {[
              { href: "#seccion1", label: "Inicio" },
              { href: "#seccion2", label: "Paquetes" },
              { href: "#seccion3", label: "Cotiza" },
              { href: "#seccion4", label: "Más visitados" },
              { href: "#seccion5", label: "Blogs" },
              { href: "#seccion6", label: "Costos" },
              { href: "#seccion9", label: "Testimonios" },
              { href: "#seccion7", label: "Contáctanos" },
              { href: "#seccion8", label: "FAQs" },
            ].map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setShowModal(false)}
                style={{
                  color: "white",
                  fontSize: "1.3rem",
                  textDecoration: "none",
                  fontWeight: "500",
                  transition: "color 0.3s ease",
                  textAlign: "center",
                  width: "100%",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#0d25fdff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
              >
                {label}
              </a>
            ))}

            <div style={{ marginTop: "1rem", width: "100%" }}>
              {user ? (
                <button
                  onClick={handleLogout}
                  style={{
                    width: "100%",
                    padding: "10px",
                    backgroundColor: "#dc3545",
                    border: "none",
                    borderRadius: "6px",
                    color: "white",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: "background-color 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#b02a37")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#dc3545")}
                >
                  Cerrar sesión
                </button>
              ) : (
                <button
                  onClick={() => {
                    navigate("/login");
                    setShowModal(false);
                  }}
                  style={{
                    width: "100%",
                    padding: "10px",
                    backgroundColor: "#a3d28e",
                    border: "none",
                    borderRadius: "6px",
                    color: "white",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: "background-color 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#084298")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#0d6efd")}
                >
                  Login
                </button>
              )}
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;