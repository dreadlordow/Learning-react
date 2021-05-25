import React from "react";
import Joi from "joi-browser";
import Form from "./common/Form";

class RegisterForm extends Form {
  state = {
    data: { username: "", password: "", name: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().email().required().label('Username'),
    password: Joi.string().min(5).required().label('Password'),
    name: Joi.string().min(4).required().label('Name'),
  };

  render() {
    return (
      <div>
        <h1>Register</h1>
        <form>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", 'password')}
          {this.renderInput("name", "Name")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
