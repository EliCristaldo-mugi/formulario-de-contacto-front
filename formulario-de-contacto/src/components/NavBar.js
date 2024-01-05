import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/SOMOSMUGI.png';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button'; 
import MenuItem from '@mui/material/MenuItem';

const pages = [
  { label: 'Login', path: '/' },
  { label: 'Nuevo Usuario', path: '/LoginNuevoUsuario' }
];

export default function NavBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#d406c7', height: '8vh' }}>
      <Container maxWidth="xl">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '-5.2vh' }}>
            <img
              src={logoImage}
              alt="Logo"
              style={{ display: { xs: 'flex', md: 'none' }, marginRight: 1, marginLeft: '-1vh', maxHeight: '20vh' }} 
            />
            <Typography
              variant="h6"
              noWrap
              component={Link}
              to="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
            </Typography>
          </Box>
  
          <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '-5vh' }}>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page.path}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                  component={Link}
                  to={page.path}
                  onClick={handleCloseNavMenu}
                >
                  {page.label}
                </Button>
              ))}
            </Box>
  
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
                sx={{ marginLeft: 'auto' }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page.path} onClick={handleCloseNavMenu}>
                    <Button
                      fullWidth
                      component={Link}
                      to={page.path}
                      sx={{
                        textAlign: 'left',
                        color: page.label === 'Login' || page.label === 'Nuevo Usuario' ? 'black' : 'inherit',
                        textDecoration: 'none',
                        p: 1,
                      }}
                    >
                      {page.label}
                    </Button>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}