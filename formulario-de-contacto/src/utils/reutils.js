//reemplaza el estado actual del formulario
export const actualizaInput = (formData, setFormData) => (event) => {
    setFormData({
      //copiar formData y añade info nueva
      ...formData,
      //busca el id y actualiza formData
      [event.target.id]: event.target.value,
    });
  };

//compara las contraseñas para ver si coinciden
export const validacionPassword = (formData, setError) => {
    if (formData.password !== formData.confirmPassword) {
      setError('Las contraseñas no coinciden');
      return false;
    }
    return true;
  };

  //ver si los datos no están vacíos 
  //¿Habrá una forma de usar esta función para ver si los campos están vacíos en el otro formulario?
export const validacionForm = (formData, setError) => {
    if (Object.values(formData).some(value => value === '')) {
      setError('Por favor, completa todos los campos');
      return false;
    }
    return true;
  };
