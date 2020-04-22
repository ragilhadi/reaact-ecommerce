import React, { Component } from "react";
import FormInput from "../../components/Form-input/FormInput";
import CustomButton from "../../components/Custom-button/CustomButton";
import { signInWithGoogle } from "../../firebase/Firebase";

import "./Signin.scss";

export class Signin extends Component {
  state = {
    email: "",
    password: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I have already an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            required
            handleChange={this.handleChange}
            label="Email"
          />

          <FormInput
            name="password"
            type="paassword"
            value={this.state.password}
            handleChange={this.handleChange}
            label="Password"
            required
          />

          <CustomButton type="submit"> Sign In </CustomButton>
          <CustomButton onClick={signInWithGoogle}>
            {" "}
            Sign In With Google{" "}
          </CustomButton>
        </form>
      </div>
    );
  }
}

export default Signin;
