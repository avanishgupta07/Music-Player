import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';

const Navbar = () => {
  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: '#333', borderRadius: '12px', marginBottom: '1rem' }}>
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ fontWeight: 'bold', display: { xs: 'none', sm: 'block' } }}
            >
              My Music Player
            </Typography>
            <Box sx={{ display: 'flex', gap: '1rem' }}>
              <Button color="inherit">Home</Button>
              <Button color="inherit">Library</Button>
              <Button color="inherit">About</Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Container maxWidth="lg">
        <Box
          component="img"
          src="https://www.hollywoodreporter.com/wp-content/uploads/2024/02/MICHAEL-FIRST-LOOK-H-2024.jpg?w=1296&h=730&crop=1"
          alt="Michael Jackson"
          sx={{
            width: '100%',
            height: 'auto',
            maxHeight: '250px',
            objectFit: 'cover',
            borderRadius: '12px',
            marginBottom: '1rem'
          }}
        />
      </Container>
    </>
  );
};

export default Navbar;