import './components.css';
import PropTypes from 'prop-types';

const Archivero = ({ libros }) => {
  const LibrosLista = () => {
    return libros.map((libro, index) => (
      <div className='container' key={index}>
        <h2>{libro.Nombre}</h2>
        <p>{libro.Autor}</p>
      </div>
    ));
  };

  return (
    <div className='Archivero'>
      <LibrosLista />
    </div>
  );
};

Archivero.propTypes = {
  libros: PropTypes.arrayOf(
    PropTypes.shape({
      Nombre: PropTypes.string.isRequired,
      Autor: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Archivero;