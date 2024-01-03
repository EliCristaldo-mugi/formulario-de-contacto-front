import React from 'react';
import { Container, Button, Typography, Card, CardContent, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

export default function LoginFormView({ loginResponse, formData, error, handleInputChange, handleFormSubmit, handleResetPassword }) {
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
            <Typography sx={{ marginBottom: '12%' }} variant="h5" component="div">
              Login de usuarios
            </Typography>
            <Container sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <TextField id="nombre" label="Nombre" variant="standard" sx={{ marginTop: '60px' }} value={formData.nombre} onChange={handleInputChange}/>
              <TextField id="email" label="Mail" variant="standard" sx={{ marginTop: '25px' }} value={formData.email} onChange={handleInputChange}/>
              <TextField id="password" label="Contraseña" type="password" autoComplete="current-password" variant="standard" sx={{ marginTop: '25px' }} value={formData.password} onChange={handleInputChange}/>
            </Container>
          </CardContent>
        </Card>
        {error && (
          <Typography sx={{ marginTop: '20px' }} variant="body1" color="error">
            {error}
          </Typography>
        )}
        {loginResponse && (
          <Typography sx={{ marginTop: '20px' }} variant="body1" color={loginResponse.startsWith('¡Login exitoso') ? 'success' : 'error'}>
            {loginResponse}
          </Typography>
        )}
        <Button id="button_reestablecer_usuarios" variant="contained" sx={{ marginTop: '40px', width: '120px', alignSelf: 'center', marginLeft: '10px', marginBottom: '15px', backgroundColor: '#905fff' }} onClick={handleResetPassword}>Restablecer</Button>
        <Button id="button_login_usuarios" variant="contained" endIcon={<SendIcon />} sx={{ marginTop: '40px', width: '100px', marginLeft: '5%', marginBottom: '15px', backgroundColor: '#d406c7' }} onClick={handleFormSubmit}>Enviar</Button>
      </Card>
    </Container>
  );
}
