import React, { Component } from "react";
import cx from "classnames";
import style from "./SignUpForm.module.css";
import FormInput from "./FormInput";

const initialValues = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
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

  validateName = (value) => {
    return true;
  }
  validateEmail = (value) => {
    return true;
  }
  validatePassword = (value) => {
    const regex = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g
    return value.length === 0 || regex.test(value);
  };
  
  render() {
    const {
      firstname,
      lastname,
      email,
      password,
    } = this.state;
    return (
      <form className={style.container} onSubmit={this.submitHandler}>
        <FormInput name="firstname" value={firstname} onChange={this.handleChange} validationHandler={this.validateName} placeholder="Введите имя" />
        <FormInput name="lastname" value={lastname} onChange={this.handleChange} validationHandler={this.validateName} placeholder="Введите фамилию" />
        <FormInput name="email" value={email} onChange={this.handleChange} validationHandler={this.validateEmail} placeholder="Введите email" type="email" />
        <FormInput name="password" value={password} onChange={this.handleChange} validationHandler={this.validatePassword} placeholder="Введите пароль" type="password" />
        <input className={style.input} type="submit" />
      </form>
    );
  }
}

export default SignUpForm;

/*
  1. Написать функции-обработчики изменений имени, фамилии, email.
  2. Реализовать удаление пробелов во всех полях.
  3. Добавить валидацию этих полей.
*/