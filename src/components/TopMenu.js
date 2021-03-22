import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Money';
import { MenuItem } from '@material-ui/core';

const styles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

function TopMenu() {
  const classes = styles();

  return (
    <div>
      <AppBar position='fixed' className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'>
            <MenuIcon />
          </IconButton>
          <MenuItem>
            <Typography variant='h6' className={classes.title}>
              Fund
            </Typography>
          </MenuItem>
        </Toolbar>
      </AppBar>
      <Toolbar/>
    </div>
  );
}

export default TopMenu;