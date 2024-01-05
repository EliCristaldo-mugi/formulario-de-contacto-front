import React, { useState } from 'react';
import NavBar from './NavBar';
import LoginFormView from '../view/formLoginView';
import { LoginFormulario } from '../utils/loginUtils';
import { RestablecimientoPassword } from '../utils/passwordUtils';
import { actualizaInput } from '../utils/reutils';

export default function Formulario() {
  //useState: devuelve dos arrays, uno con info actual y otra actualizada
  //responde a cambios en los datos
  const [loginResponse, respuesta] = useState(null);
  const [formData, setFormData] = useState({
    //datos que luego se llenan al completar el form
    usuarioOCorreo: '',
    password: '',
  });
  const [error, setError] = useState(null);

  //actualización del correo y contraseña
  const inputChange = actualizaInput(formData, setFormData);

  return (
    <div>
      <NavBar />
      <LoginFormView
        loginResponse={loginResponse}
        formData={formData}
        error={error}
        inputChange={inputChange}
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



