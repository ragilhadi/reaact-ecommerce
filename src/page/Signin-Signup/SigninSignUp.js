import React from "react";
import Signin from "../Signin/Signin";
import SignUp from "../Signup/SignUp";
import "./SigninSignUp.scss";

const SigninSignUp = () => {
  return (
    <div className="sign-in-and-sign-up">
      <Signin />
      <SignUp />
    </div>
  );
};

export default SigninSignUp;
