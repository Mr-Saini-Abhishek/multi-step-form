import React, { Component } from "react";
import FormUserDetails from "./FormUserDetails";
import FormPersonalData from "./FormPersonalData";
import Confirm from "./Confirm";
import Success from "./Success";
export class UserForm extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    bio: "",
  };
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };
  render() {
    const { step } = this.state;
    const { firstName, lastName, bio, city, occupation, email } = this.state;
    const values = { firstName, lastName, bio, city, occupation, email };
  
    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
  
      case 2:
        return <FormPersonalData
        nextStep={this.nextStep}
        prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
        
        />
  
      case 3:
        return <Confirm
        nextStep={this.nextStep}
        prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}/>
  
      case 4:
        return <Success/>
  
      default:
        return null; // Handle unknown step gracefully
    }
  }
  
}

export default UserForm;
