import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link } from 'react-router-dom';
import logo from '../image/logo.png';

export default function ButtonAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMobile = useMediaQuery('(max-width:600px)');

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: 'black' }}>
        <Toolbar>
          <img src={logo} alt="Logo" style={{ height: '70px', marginRight: '20px' }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <b>GAMES</b>
          </Typography>
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ ml: 'auto' }}
                onClick={handleMenuOpen}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem component={Link} to="/home" onClick={handleMenuClose}>
                  Home
                </MenuItem>
                <MenuItem component={Link} to="/spinTheWheel" onClick={handleMenuClose}>
                  Spin The Wheel
                </MenuItem>
                <MenuItem component={Link} to="/hotSlot" onClick={handleMenuClose}>
                  Hot Slot
                </MenuItem>
                <MenuItem component={Link} to="/scratchCard" onClick={handleMenuClose}>
                  Scratch Card
                </MenuItem>
              </Menu>
            </>
          ) : (
            <>
              <Button
                color="inherit"
                component={Link}
                to="/home"
                sx={{ '&:hover': { backgroundColor: 'white', color: 'black' } }}
              >
                Home
              </Button>
              <Button
                color="inherit"
                component={Link}
                to="/spinTheWheel"
                sx={{ '&:hover': { backgroundColor: 'white', color: 'black' } }}
              >
                Spin The Wheel
              </Button>
              <Button
                color="inherit"
                component={Link}
                to="/hotSlot"
                sx={{ '&:hover': { backgroundColor: 'white', color: 'black' } }}
              >
                Hot Slot
              </Button>
              <Button
                color="inherit"
                component={Link}
                to="/scratchCard"
                sx={{ '&:hover': { backgroundColor: 'white', color: 'black' } }}
              >
                Scratch Card
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
