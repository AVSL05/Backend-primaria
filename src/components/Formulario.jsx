import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Formulario = () => {
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const validarPassword = () => {
    return password === 'Password'; // Reemplaza 'Password' con la contraseña correcta
  };

  const validarCorreo = () => {
    return correo === 'Juan@gmail.com'; // Reemplaza 'Juan@gmail.com' con el correo correcto
  };

  const handlePersona = () => {
    const esCorreoValido = validarCorreo();
    const esPasswordValido = validarPassword();
    if (esCorreoValido && esPasswordValido) {
      navigate('/biblioteca');
    } else {
      alert('Correo o contraseña incorrectos');
    }
  };

  return (
    <div className="formulario">
      <h1>Inicio de Sesión</h1>
      <input
        type="text"
        placeholder="Correo"
        onChange={(e) => setCorreo(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handlePersona}>Iniciar Sesión</button>
    </div>
  );
};

export default Formulario;