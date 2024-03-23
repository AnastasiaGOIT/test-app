import React from 'react';
import { Toolbar, Typography, Button } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';

export const AppBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          MyApp
        </Typography>
        <NavLink to="/catalog">Catalog</NavLink>
        <Button color="inherit" component={Link} to="/favorites">
          Favorites
        </Button>
      </Toolbar>
    </AppBar>
  );
};
