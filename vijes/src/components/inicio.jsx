const Navbar = () => {
  return (
<<<<<<< HEAD
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
=======
    <nav className="fixed top-0 w-full bg-white shadow z-50">
      <ul className="flex justify-around p-4">
        <li>
          <a href="#seccion1" className="hover:text-blue-500">Inicio</a>
        </li>
        <li>
          <a href="#seccion2" className="hover:text-blue-500">seccion2</a>
        </li>
        <li>
          <a href="#seccion6" className="hover:text-blue-500">seccion6</a>
        </li>
        <li>
          <a href="#seccion7" className="hover:text-blue-500">seccion7</a>
        </li>
        
>>>>>>> 0de944e0bbefbe21a7ac641f5766305cb8cf5c55
      </ul>
    </nav>
  );
};

export default Navbar;
