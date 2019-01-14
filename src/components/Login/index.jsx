import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { compose } from 'redux';
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'

const styles = {
  root: {
    flexGrow: 1,
    marginTop: 90,
  },
  grow: {
    flexGrow: 1,
  },
  button: {
    marginTop: 10,
  },
};

class Login extends Component {

  state = {
    email: '',
    password: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  handleOnSubmit = event => {
    event.preventDefault()
    this.props.signIn(this.state)
  }

  render() {
    const { classes } = this.props
    // const { authError } = this.props
    return (
    <div className={classes.root}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
        <form className={classes.container} noValidate autoComplete="off">
        <div>
            <TextField
              id="email"
              label="E-Mail"
              className={classes.textField}
              value={this.state.email}
              onChange={this.handleChange}
              margin="normal"
            /></div>
            <div>
            <TextField
              id="password"
              label="password"
              type="password"
              className={classes.textField}
              value={this.state.password}
              onChange={this.handleChange}
              margin="normal"
            />
          </div>
        </form>
        <Button variant="contained" color="primary" className={classes.button} onClick={this.handleOnSubmit}>
          Login
        </Button>
          {/* {authError ? <p>{authError}</p> : null } */}
        </Grid>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    // authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }
}

// null mapStateToProps, mapDispatchToProps
export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
)(Login)