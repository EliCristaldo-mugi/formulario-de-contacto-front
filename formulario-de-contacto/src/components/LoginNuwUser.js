import React, { useState } from 'react';
import NavBar from './NavBar';
import NewUserFormView from '../view/formNewUserView';
import { RegistroNewUser } from '../utils/registroNewUserUtils';
import { actualizaInput, validacionPassword, validacionForm } from '../utils/reutils';

export default function LoginNewUser() {
  //almacenar la respuesta del registro
  const [registrationResponse, setRegistrationResponse] = useState(null);
  //almacenar datos del form
  //useState devuelve estado actual y estado actualizado
  const [formData, setFormData] = useState({
    fullName: '',
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState(null);

  //actualiza los datos del formulario cuando los campos cambian
  const inputChange = actualizaInput(formData, setFormData);
  
  //validar el formulario y las contraseñas cuando se dispara el evento 'handleSubmit'
  const mensajeError = async () => {
    setError(null);
    const FormValid = validacionForm(formData, setError);
    const PasswordValid = validacionPassword(formData, setError);

    if (!FormValid || !PasswordValid) return;

    try {
      //función para registrar un nuevo usuario
      await RegistroNewUser(formData, setRegistrationResponse, setError);
    } catch (error) {
      setError('Ocurrió un error al registrar el usuario. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <div>
      <NavBar />
      <NewUserFormView
        registrationResponse={registrationResponse}
        formData={formData}
        error={error}
        inputChange={inputChange}
        handleSubmit={mensajeError}
        title="Registro de nuevos usuarios"
      />
    </div>
  );
}
