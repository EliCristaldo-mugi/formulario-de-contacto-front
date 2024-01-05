import React from 'react';
import { Container, Button, Typography, Card, CardContent, TextField } from '@mui/material';

export default function NewUserFormView({ registrationResponse, formData, error, inputChange, handleSubmit, title }) {
  return (
    <Container sx={{ height: '92vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Card sx={{ minWidth: '95%', animation: 'floating 3s ease-in-out infinite', '@keyframes floating':
        { '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0)' },
        },
        
        boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px',
      }}>
        <Card variant="outlined">
          <CardContent>
            <Typography sx={{ marginBottom: '8%' }} variant="h5" component="div">
              {title}
            </Typography>
            <Container sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <TextField id="fullName" label="Nombre completo" variant="standard" value={formData.fullName} onChange={inputChange}/>
      <TextField id="username" label="Nombre de usuario" variant="standard" value={formData.username} onChange={inputChange}/>
      <TextField id="email" label="Correo electrónico" variant="standard" value={formData.email} onChange={inputChange}/>
      <TextField id="password" label="Contraseña" type="password" variant="standard" value={formData.password} onChange={inputChange}/>
      <TextField id="confirmPassword" label="Confirmar contraseña" type="password" variant="standard" value={formData.confirmPassword} onChange={inputChange}/>
            </Container>
          </CardContent>
        </Card>
        {error && (
          <Typography sx={{ marginTop: '20px' }} variant="body1" color="error">
            {error}
          </Typography>
        )}
        {registrationResponse && (
          <Typography sx={{ marginTop: '20px' }} variant="body1" color={registrationResponse.startsWith('¡Usuario creado') ? 'success' : 'error'}>
            {registrationResponse}
          </Typography>
        )}
        <Button variant="contained" sx={{ marginTop: '40px', width: '100px', marginLeft: '5%', marginBottom: '15px', backgroundColor: '#d406c7' }} onClick={handleSubmit}>Registrar</Button>
      </Card>
    </Container>
  );
}