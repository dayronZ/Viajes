const Navbar = () => {
  return (
    <nav className="navbar">
      <link rel="stylesheet" href="./nav.css" />
      <input type="checkbox" id="menu-toggle" className="menu-toggle" />
      <label htmlFor="menu-toggle" className="menu-icon">&#9776;</label>

      <ul className="menu">
        <li><a href="#seccion1">Inicio</a></li>
        <li><a href="#seccion2" >Paquetes</a></li>
        <li><a href="#seccion3">Todo Incluido</a></li>
        <li><a href="#seccion4">Mas visitados</a></li>
        <li><a href="#seccion5">Blogs</a></li>
        <li><a href="#seccion6">Costos</a></li>
        <li><a href="#seccion7">Contactanos</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
