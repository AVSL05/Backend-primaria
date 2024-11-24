import { useState, useEffect, useRef } from 'react';
import './components.css'; // archivo de estilos para el menú

const Cabecera = () => {
  // Estado para manejar la visibilidad del menú
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // Función para alternar la visibilidad del menú
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Cerrar el menú si se hace clic fuera de él
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header>
      <div className="header-container">
        <div>
          <img className='Logo' src="https://cdn-icons-png.flaticon.com/512/23/23358.png" alt="logo" />
        </div>
        <h1>Biblioteca Web</h1>
        <div className="dropdown" ref={menuRef}>
          <button onClick={toggleMenu} className="dropdown-button">
            Menú
          </button>
          {isOpen && (
            <ul className="dropdown-menu">
              <li className="dropdown-item">Usuario</li>
              <li className="dropdown-item">Libros</li>
              <li className="dropdown-cerrarSesion"><a href="/">Cerrar Sesión</a></li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};

export default Cabecera;
