import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';

import {PAGES} from '../Constants'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  }
}));

//TODO: Properly Center the Title
//TODO: dynamically remove the home icon when we are at home
function NavBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="relative">
        <Toolbar>
          <IconButton onClick={() => props.callBack(PAGES.GAME_SELECT)} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <HomeRoundedIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" noWrap>
            TIC-TAC-TOE
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar