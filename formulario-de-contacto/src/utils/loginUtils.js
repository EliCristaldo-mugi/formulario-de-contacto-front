export const LoginFormulario = async (formData, respuesta, setError) => {
  try {
    //manejo de datos vacíos
    if (formData.usuarioOCorreo === '' || formData.password === '') {
      setError('Por favor, complete todos los campos.');
      return;
    }
    //Url de api, cambiar por la de mugi
    const response = await fetch('API_MUGI');
    const users = await response.json();

    const { usuarioOCorreo, password } = formData;
    //busca en la api lo que coincide con la contraseña y el nombre de usuario o mail
    const usuarioEncontrado = users.find(
      (usuario) =>
        (usuario.userName === usuarioOCorreo ||
        usuario.email === usuarioOCorreo) &&
        usuario.password === password 
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
    if (error.message === 'Error') {
      setError('Error de red. Por favor, verifica tu conexión.');
    } else {
      setError('Ocurrió un error inesperado. Por favor, inténtalo de nuevo.');
    }
  }
};