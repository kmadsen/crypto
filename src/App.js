import { Component, Fragment } from 'react';

import { withStyles } from "@material-ui/core/styles";
import TopMenu from './components/TopMenu';
import FundCard from './components/FundCard';
import { Toolbar } from '@material-ui/core';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  toolbar: theme.mixins.toolbar,
});

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <TopMenu />
        <FundCard className={classes.toolbar}/>
      </Fragment>
    );
  }
}

export default withStyles(styles)(App)
