import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Login.scss";

class Login extends Component {
  /*********************Constructor*********************/
  state = {
    email: "",
    password: "",
    remember: false,
    formErrors: {
      email: { isValid: true, message: "" },
      password: { isValid: true, message: "" }
    }
  };
  /*********************Constructor*********************/

  /*********************Form Handler*********************/
  changeHandler = event => {
    const name = event.target.name;
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;

    this.setState(
      {
        [name]: value
      },
      () => {
        this.validateField(name, value);
      }
    );
  };

  validateField(fieldName, value) {
    let formErrors = this.state.formErrors;

    switch (fieldName) {
      case "email":
        formErrors.email.isValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
          value
        );
        formErrors.email.message = formErrors.email.isValid
          ? ""
          : " is invalid";
        break;
      case "password":
        formErrors.password.isValid = value.length >= 6;
        formErrors.password.message = formErrors.password.isValid
          ? ""
          : " is too short";
        break;
      default:
        break;
    }

    this.setState({
      formErrors: formErrors
    });
  }

  // Retrive value from Input
  changeHandler1 = (data, event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (
      this.state.formErrors.email.isValid &&
      this.state.formErrors.password.isValid
    ) {
      console.log(this.state);
    } else {
      alert("Form Invalid");
    }
  };

  /*********************Form Handler*********************/

  /*********************Render Mrthod*********************/
  render() {
    return (
      <div className="wrapper">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group header">
            <span>Sign In</span>
          </div>
          <div className="form-group">
            <label className="form-label required">Email Address</label>
            <input
              className="form-control"
              type="text"
              name="email"
              required
              value={this.state.email}
              placeholder="Please Enter Email"
              onChange={this.changeHandler}
            />
            {this.state.email ? (
              <div className="error">
                {!this.state.formErrors.email.isValid &&
                  this.state.formErrors.email.message}
              </div>
            ) : null}
          </div>
          <div className="form-group">
            <label className="form-label required">Password</label>
            <input
              className="form-control"
              type="password"
              name="password"
              value={this.state.password}
              placeholder="Please Enter Password"
              onChange={this.changeHandler}
              //onChange={this.changeHandler.bind(this, this.state.password)}
            />
            {this.state.password ? (
              <div className="error">
                {!this.state.formErrors.password.isValid &&
                  this.state.formErrors.password.message}
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="form-group">
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                name="remember"
                onChange={this.changeHandler}
              />
              <label className="form-check-label">Remember me</label>
            </div>
          </div>
          <div className="form-group">
            <input type="submit" className="btn btn-block btn-primary" value="SIGN IN"/>
          </div>
          <div className="form-row bottom-group">
            <div className="col">
              <span>Forgot Password</span>
            </div>
            <div className="form-group col">
              <span className="float-right">
                Don't have an account?
                <Link to="/sign-up" className="nav-link">
                  Sign Up
                </Link>
              </span>
            </div>
          </div>
        </form>
      </div>
    );
  }
  /*********************Render Mrthod*********************/
}

export default Login;
