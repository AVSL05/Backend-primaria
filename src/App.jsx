import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Formulario from './components/Formulario.jsx';
import Biblioteca from './pages/Biblioteca.jsx';

const App = () => {
  return (
    <BrowserRouter>
    <Link to='/'>
    </Link>

    <Routes>
      <Route path='/' element = {<Formulario/>}/>
      <Route path='/biblioteca' element = {<Biblioteca/>}/>
    </Routes>
    </BrowserRouter>
  );
};

export default App;