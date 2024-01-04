export const RegistroNewUser = async (userData, respuesta, setError) => {
  
    try {
      const response = await fetch('URL_API', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
  
      // Manejar la respuesta del servidor
      if (response.ok) {
        respuesta('Usuario registrado exitosamente.');
      } else {
        throw new Error('Error al registrar el usuario');
      }
      setError(null);
    } catch (error) {
      setError('Ocurrió un error al registrar el usuario. Por favor, inténtalo de nuevo.');
    }
  };