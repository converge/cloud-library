import React, { Component, Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from '../Login'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Search from '../Search'
import Admin from '../Admin'
import Users from '../Users'
import Books from '../Books'
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class Base extends Component {

  render() {
    const { classes } = this.props
    return (
      <Fragment>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Cloud Library
          </Typography>
            <Button color="inherit">---</Button>
          </Toolbar>
        </AppBar>

        <Switch>
          <Route path='/' exact component={Login} />
          <Route path='/books' exact component={Books} />
          <Route path='/search' exact component={Search} />
          <Route path='/admin' exact component={Admin} />
          <Route path='/admin/users' exact component={Users} />
        </Switch>
      </Fragment>
    )
  }
}

export default withStyles(styles)(Base)