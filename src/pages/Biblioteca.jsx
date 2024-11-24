import Archivero from '../components/Archivero.jsx';
import LibrosData from '../Libros.js';
import Cabecera from '../components/Cabecera.jsx';

const Biblioteca = () => {
  return (
    <section className="biblioteca-container">
      <Cabecera />
      <Archivero libros={LibrosData} />
    </section>
  );
};

export default Biblioteca;