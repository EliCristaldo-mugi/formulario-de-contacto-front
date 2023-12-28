import * as React from 'react';
import { Container, Button } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';

export default function Formulario() {
  const card = (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ marginBottom: '12%' }} variant="h5" component="div">
          Login de usuarios
        </Typography>
        <Container sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>

          <TextField id="nombre_login_usuarios" label="Nombre" variant="standard" sx={{ marginTop: '60px' }}/>
          <TextField id="mail_login_usuarios" label="Mail" variant="standard" sx={{ marginTop: '25px' }}/>
          <TextField id="password_login_usuarios" label="Contraseña" type="password" autoComplete="current-password" variant="standard" sx={{ marginTop: '25px' }} />
          <Button id="button_login_usuarios" variant="contained" endIcon={<SendIcon />} sx={{ marginTop: '40px', width: '100px', marginLeft: '70%', backgroundColor: '#d406c7' }}>Enviar</Button>
        </Container>
      </CardContent>
    </React.Fragment>
  );

  return (
    <Container sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
      <Box sx={{ minWidth: '95%', animation: 'floating 3s ease-in-out infinite', '@keyframes floating': 
      { '0%': { transform: 'translateY(0)' }, 
      '50%': { transform: 'translateY(-10px)' }, 
      '100%': { transform: 'translateY(0)' },},

          boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px',
        }}
      >
        <Card variant="outlined">{card}</Card>
      </Box>
    </Container>
  );
}