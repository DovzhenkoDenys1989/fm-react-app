import React, { Component } from "react";
import cx from "classnames";
import style from "./SignUpForm.module.css";

const initialValues = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  isfirstnameValid: true,
  islastnameValid: true,
  isemailValid: true,
  ispasswordValid: true,
};

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...initialValues };
  }
  submitHandler = (event) => {
    const { registerUser } = this.props;
    event.preventDefault();
    registerUser({ ...this.state });
    this.setState({ ...initialValues });
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value, [`is${name}Valid`]: !value.includes(" ") });
  };

  render() {
    const {
      firstname,
      lastname,
      email,
      password,
      isemailValid,
      isfirstnameValid,
      islastnameValid,
      ispasswordValid,
    } = this.state;
    return (
      <form className={style.container} onSubmit={this.submitHandler}>
        <input
          value={firstname}
          onChange={this.handleChange}
          className={cx(style.input, {[style.invalidInput]: !isfirstnameValid}, {[style.validInput]: isfirstnameValid})}
          type="text"
          name="firstname"
          placeholder="Введите имя"
        />
        <input
          value={lastname}
          onChange={this.handleChange}
          className={cx(style.input, {[style.invalidInput]: !islastnameValid}, {[style.validInput]: islastnameValid})}
          type="text"
          name="lastname"
          placeholder="Введите фамилию"
        />
        <input
          value={email}
          onChange={this.handleChange}
          className={cx(style.input, {[style.invalidInput]: !isemailValid}, {[style.validInput]: isemailValid})}
          type="email"
          name="email"
          placeholder="Введите email"
        />
        <input
          value={password}
          onChange={this.handleChange}
          className={cx(style.input, {[style.invalidInput]: !ispasswordValid}, {[style.validInput]: ispasswordValid})}
          type="password"
          name="password"
          placeholder="Введите пароль"
        />
        <input className={style.input} type="submit" />
      </form>
    );
  }
}

export default SignUpForm;
