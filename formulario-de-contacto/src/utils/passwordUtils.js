export const RestablecimientoPassword = async (formData, respuesta, setError) => {
  try {
    //manejo de datos vacios
    if (formData.password === '') {
      setError('Por favor, complete todos los campos.');
      return;
    }

    //solicitud POST a API. Todavía no está establecida la lógica del back
    const response = await fetch('url_mugi', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        //datos de restablecimiento de contraseña
        email: formData.email,
        newPassword: formData.password,
      }),
    });

    //respuesta
    if (response.ok) {
      respuesta('Solicitud de restablecimiento de contraseña enviada.');
    } else {
      // manejar errores
      throw new Error('Error al enviar la solicitud');
    }

    setError(null);
  } catch (error) {
    // manejar de errores
    if (error.message === 'Error al enviar la solicitud') {
      setError('Error al enviar la solicitud de restablecimiento. Por favor, inténtalo de nuevo.');
    } else {
      setError('Ocurrió un error inesperado. Por favor, inténtalo de nuevo.');
    }
  }
};