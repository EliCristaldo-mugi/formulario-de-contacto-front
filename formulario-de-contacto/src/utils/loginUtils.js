export const LoginFormulario = async (formData, respuesta, setError) => {
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
        respuesta('¡Login exitoso!');
        //respuesta erronea
      } else {
        respuesta('Error en la autenticación. Por favor, verifica tus datos.');
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