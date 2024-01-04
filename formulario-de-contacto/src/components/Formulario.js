import React, { useState } from 'react';
import NavBar from './NavBar';
import LoginFormView from '../view/formLoginView';
import { LoginFormulario } from '../utils/loginUtils';
import { RestablecimientoPassword } from '../utils/passwordUtils';

export default function Formulario() {
  const [loginResponse, respuesta] = useState(null);
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

  return (
    <div>
      <NavBar />
      <LoginFormView
        loginResponse={loginResponse}
        formData={formData}
        error={error}
        handleInputChange={handleInputChange}
        FormEnvio={async () => {
          await LoginFormulario(formData, respuesta, setError);
        }}
        handleResetPassword={async () => {
          await RestablecimientoPassword(formData, respuesta, setError);
        }}
        title="Login de usuarios"
      />
    </div>
  );
}




