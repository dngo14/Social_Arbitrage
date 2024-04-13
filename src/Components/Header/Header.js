import React from 'react';
import { Link } from 'react-router-dom';
import {AppBar, Box, Typography, Toolbar, Button, IconButton, List, ListItem, ListItemButton, Drawer, ListItemText} from "@mui/material/"
import MenuIcon from '@mui/icons-material/Menu';
import "./Header.css"

function Header() {
const [drawerOpen, setDrawerOpen] = React.useState(false);

const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
    }
    setDrawerOpen(open);
  };

   const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {['Home', 'Social Arbitrage', 'About'].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton component={Link} to={text === 'Home' ? '/' : `/${text.toLowerCase()}`}>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar className='Header'>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Social Arbitrage
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor={'left'}
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        {list()}
      </Drawer>
    </React.Fragment>
  );
}

export default Header;