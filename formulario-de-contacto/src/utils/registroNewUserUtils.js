export const RegistroNewUser = async (formData, setRegistrationResponse, setError) => {
  
    try {
      const response = await fetch('API_MUGI', {
        method: 'POST', //solicitud post
        headers: {
          'Content-Type': 'application/json', // se envia un JSON
        },
        body: JSON.stringify(formData), //convertir en JSON
      });

    if (response.ok) {
      //setter para manejar errores
      setRegistrationResponse('¡Usuario creado exitosamente!');
    } else {
      const errorData = await response.json(); //detalles del error
      throw new Error(errorData.message || 'Error al registrar el usuario');
    }
    setError(null);
  } catch (error) {
    setError(error.message || 'Ocurrió un error al registrar el usuario. Por favor, inténtalo de nuevo.');
  }
};