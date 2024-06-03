import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    const { firstName, lastName, email } = values;

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title='Enter User Details' />
          <TextField
            hintText='Enter Your First Name'
            floatingLabelText='First Name'
            onChange={handleChange('firstName')}
            defaultValue={firstName}
          />
          <br />
          <TextField
            hintText='Enter Your Last Name'
            floatingLabelText='Last Name'
            onChange={handleChange('lastName')}
            defaultValue={lastName}
          />
          <br />
          <TextField
            hintText='Enter Your Email'
            floatingLabelText='Email'
            onChange={handleChange('email')}
            defaultValue={email}
          />
          <br />
          <RaisedButton
            label='Continue'
            primary={true}
            style={styles.button}
            onClick={this.continue}
            disabled={!firstName || !lastName || !email }
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15
  }
};

export default FormUserDetails;
