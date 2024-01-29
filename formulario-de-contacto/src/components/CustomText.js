import { Container, Card, Button, FormControl, InputLabel, Select, MenuItem, Box } from "@mui/material";
import NavBar from "./NavBar";
import TextField from '@material-ui/core/TextField';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios);

//Mock para useEffect
mock.onGet('api/useEffect').reply(200, {
  body: 'Texto',
  size: 12,
  align: 'left',
  color: 'black',
  family: 'Verdana'
});

//Mock para save
mock.onPost('/api/save').reply(200, {
  message: 'Datos guardados con éxito'
});

export default function CustomText() {
  //estados iniciales
  //state: estado actual.        setState: actualizar el estado
  const [text, setText] = useState('');
  const [size, setSize] = useState(12);
  const [align, setAlign] = useState('left');
  const [family, setFamily] = useState('Verdana');
  const [color, setColor] = useState('black');
  const [editar, setEditar] = useState(false);
  const [administrador, setAdministrador] = useState(false);
  

  useEffect(() => {
    // Llamada a la API para obtener los datos iniciales
    axios.get('api/useEffect')
      .then(response => {
        const data = response.data;
        setText(data.body || 'Texto');
        setSize(data.size !== undefined ? data.size : 12);
        setAlign(data.align !== undefined ? data.align : 'left');
        setFamily(data.family !== undefined ? data.family : 'Verdana');
        setColor(data.color !== undefined ? data.color :  'black');
        setAdministrador(true); 
      })
      .catch(error => {
        alert('Error al obtener datos:', error);
      });
  }, []);
       


  const save = async () => {
    try {
      await axios.post('/api/save', { text, size, align, family, color });
      alert('Datos guardados con éxito');
      setEditar(false);
    } catch (error) {
      if (error.response) {
        alert('Error al guardar datos: ', error.response.data );
      } else if (error.request) {
        //la solicitud fue hecha pero no se recibió respuesta
        alert('Error:', error.request);
      } else {
        //error
        alert('Error:', error.message);
      }
    }
  };



  return (
    <div>
      <NavBar />
      <div>
        {editar && administrador ? ( //si editar y administrador son verdaderos
          <Container sx={{ height: '92vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Card sx={{ padding: '2%', minWidth: '95%', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px' }}>
              <div>
                <TextField
                  fullWidth
                  style={{ margin: '20px', width: '92%' }}
                  id="outlined-multiline-static"
                  label="Texto"
                  multiline
                  value={text}
                  onChange={e => setText(e.target.value)}
                />

                <TextField
                  sx={{ width: 300 }}
                  style={{ margin: '20px' }}
                  id="outlined-number"
                  label="Tamaño"
                  type="text"
                  value={family}
                  onChange={e => setFamily(e.target.value)}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />

                <TextField
                  sx={{ width: 300 }}
                  style={{ margin: '20px' }}
                  id="outlined-number"
                  label="Tamaño"
                  type="number"
                  value={size}
                  onChange={e => setSize(e.target.value)}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />

                <TextField
                  sx={{ width: 300 }}
                  style={{ margin: '20px' }}
                  id="outlined-number"
                  label="Color"
                  type="text"
                  value={color}
                  onChange={e => setColor(e.target.value)}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />

                <FormControl sx={{ width: 300 }} style={{ margin: '20px' }}>
                  <InputLabel id="demo-simple-select-label">Alineación</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={align}
                    label="Age"
                    onChange={e => setAlign(e.target.value)}
                  >
                    <MenuItem value="left">Izquierda</MenuItem>
                    <MenuItem value="center">Centro</MenuItem>
                    <MenuItem value="right">Derecha</MenuItem>
                  </Select>
                </FormControl>
              </div><br />
              <Button variant="outlined" onClick={save}>Guardar</Button>
            </Card>
          </Container>
        ) : ( //si editar o administrador no son verdaderos
          <div>
          <Container sx={{ height: '92vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Box style={{ width: '90%', padding: '2%', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px', backgroundColor: `white`, textAlign: 'center' }}>
              <p style={{ fontSize: `${size}px`, fontFamily: `${family}`, textAlign: `${align}`, color: `${color}` }}>{text}</p>
            </Box>
              <Button style={{ marginTop: '20px', color: 'white', border: 'solid 1.5px white' }} variant="outlined" onClick={() => setEditar(true)}>Editar</Button>
            </Container>
          </div>
        )}
      </div>
    </div>
  );
};





/* Crear un componente de react, de texto que se pueda editar:

Tipo de fuente
Tamaño
Alineación
Contenido,
Color
Buscar si se puede usar un color picker

Ej:
https://codepen.io/search/pens?q=color+picker)
Debería estar en un directorio con este esquema: /app/components/CustomText
Y poder importarse desde una page cualquiera y usarlo.

Tiene 2 momentos donde llamaria a una api (hacer con mockito):

1)Es cuando se muestra por primera vez, en un hook de useEffect llamamos a la api que nos diga que tiene cargado:

‌

const CustomText= () => {
  const [text, setText] = useState('Texto de ejemplo');

  useEffect(() => {
    //correr codigo que traiga el texto, tamaño, y etc.
  }, []);
Si no hay nada configurado, establecer valores por defecto y de ejemplo.
{ text: ‘Texto de placeholder’, size: 12, align: ‘left’, color: 'black' }

2) Cuando se guardan los datos editados:
Esto sería mediante un lápiz (o botón de interacción que definamos, no complicarse mucho) que salga al lado del componente o en el evento hover.

Solo si se tiene X permiso (Administrador).

Ejemplo a grandes rasgos del componente, arriba cuando no está siendo editado, abajo en modo de edición:

image.png

La idea es que esto pegue a una api (por ahora usar mockito) para guardar la data nueva, y para traerla al entrar a la página como ya está mencionado arriba.

Los iconos que se usaron en el ejemplo son Icons que están en material. */