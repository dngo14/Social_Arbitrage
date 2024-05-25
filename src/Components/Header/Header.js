import React from 'react';
import { Link } from 'react-router-dom';
import {AppBar, Box, Typography, Toolbar, Button, IconButton, List, ListItem, ListItemButton, Drawer, ListItemText, Divider} from "@mui/material/"
import MenuIcon from '@mui/icons-material/Menu';
import "./Header.css"
import SearchBar from './SearchBar';

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
          <Divider orientation="vertical" variant="middle" flexItem style={{backgroundColor: "white", marginRight: 10}}></Divider>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Social Arbitrage
          </Typography>
          <Typography>Search Ticker</Typography>
          <Divider orientation="vertical" variant="middle" flexItem style={{backgroundColor: "white", margin: 10}}></Divider>
          <SearchBar></SearchBar>
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