const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white shadow z-50">
      <ul className="flex justify-around p-4">
        <li>
          <a href="#seccion1" className="hover:text-blue-500">Inicio</a>
        </li>
        <li>
          <a href="#seccion2" className="hover:text-blue-500">Acerca</a>
        </li>
        
      </ul>
    </nav>
  );
};

export default Navbar;
