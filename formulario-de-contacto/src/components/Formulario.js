import React, { useState } from 'react';
import NavBar from './NavBar';
import LoginFormView from '../utils/formView';

export default function Formulario() {

  const [loginResponse, setLoginResponse] = useState(null);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const handleFormSubmit = async () => {
    try {
      //manejo de datos vacíos
      if (formData.nombre === '' || formData.email === '' || formData.password === '') {
        setError('Por favor, complete todos los campos.');
        return;
      }
      //Url de api, cambiar por la de mugi
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const users = await response.json();

      const { nombre, email, password } = formData;
      const usuarioEncontrado = users.find(
        (usuario) =>
          usuario.name === nombre &&
          usuario.email === email &&
          usuario.username === password 
      );

      //respuesta exitosa 200-299
      if (usuarioEncontrado) {
        setLoginResponse('¡Login exitoso!');
        //respuesta erronea
      } else {
        setLoginResponse('Error en la autenticación. Por favor, verifica tus datos.');
      }
      setError(null);
      //orto error
    } catch (error) {
      if (error.message === 'Network Error') {
        setError('Error de red. Por favor, verifica tu conexión.');
      } else {
        setError('Ocurrió un error inesperado. Por favor, inténtalo de nuevo.');
      }
    }
  };


// REESTABLECIMIENTO DE CONTRASEÑA
  const handleResetPassword = () => {

    setLoginResponse('Solicitud de restablecimiento de contraseña enviada.');
  }


//view navbar y formview
  return (
    <div>
      <NavBar />
      <LoginFormView
        loginResponse={loginResponse}
        formData={formData}
        error={error}
        handleInputChange={handleInputChange}
        handleFormSubmit={handleFormSubmit}
        handleResetPassword={handleResetPassword}
      />
    </div>
  );
}








