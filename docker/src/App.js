import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';


import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

 function App() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" style={{backgroundColor:'#b4bbbf'}}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="#29a9f2" aria-label="menu">
            <MenuIcon />
          </IconButton>
       
        
        
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm" style={{backgroundColor:'#b4bbbf'}}>
     
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '90vh', padding:'35% ', fontSize:'200%', fontStyle:'italic', color:'#63686b'}} >Welcome to SCA Cloud School Application, this is my first assessment.</Typography>
      
        
      </Container>
    </React.Fragment>
  );
}

export default App;




