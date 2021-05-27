import React, { Component } from "react";
import cx from "classnames";
import style from "./SignUpForm.module.css";
import FormInput from "./FormInput";

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

  firstnameChange() {
    
  }
  lastnameChange() {
    
  }
  emailChange() {
    
  }
  passwordChange({ target: { value } }) {
    const isValid = value.length >= 8;
    this.setState({password: value, ispasswordValid: isValid });
  }

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
        <FormInput value={firstname} onChange={} isValid={isfirstnameValid} placeholder="Введите имя" />
        <FormInput value={lastname} onChange={} isValid={islastnameValid} placeholder="Введите фамилию" />
        <FormInput value={email} onChange={} isValid={isemailValid} placeholder="Введите email" type="email" />
        <FormInput value={password} onChange={this.passwordChange} isValid={ispasswordValid} placeholder="Введите пароль" type="password" />
        <input className={style.input} type="submit" />
      </form>
    );
  }
}

export default SignUpForm;

/*
  1. Написать функции-обработчики изменений имени, фамилии, email.
  2. Добавить валидацию этих полей.
*/