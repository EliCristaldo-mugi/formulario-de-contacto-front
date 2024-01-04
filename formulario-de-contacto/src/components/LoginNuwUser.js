import React, { useState } from 'react';
import NavBar from './NavBar';
import NewUserFormView from '../view/formNewUserView'; // Asumiendo la ruta y nombre del archivo adecuados
import { RegistroNewUser } from '../utils/registroNewUserUtils'; 


export default function LoginNewUser() {
  const [registrationResponse, setRegistrationResponse] = useState(null);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    password: '',
    confirmaPassword: '',
  });
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = async () => {
    // Verifica si las contraseñas coinciden antes de enviar la solicitud
    if (formData.password !== formData.confirmaPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    await RegistroNewUser(formData, setRegistrationResponse, setError);
  };

  return (
    <div>
      <NavBar />
      <NewUserFormView
        registrationResponse={registrationResponse}
        formData={formData}
        error={error}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        title="Registro de nuevos usuarios"
      />
    </div>
  );
}
