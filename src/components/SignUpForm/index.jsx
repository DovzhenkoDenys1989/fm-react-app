import React, { Component } from "react";
import style from "./SignUpForm.module.css";

const initialValues = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
}

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {...initialValues}


  }
  submitHandler = (event) => {
    const {registerUser} = this.props;
    event.preventDefault();
    console.log(event);
    registerUser(this.state);
    this.setState({...initialValues})
  };

  handleChange = ({target: {name, value}}) => {
    this.setState({[name]: value});
  }

  render() {
    const {firstname, lastname, email, password} = this.state;
    return (
      <form className={style.container} onSubmit={this.submitHandler}>
        <input
          value={firstname}
          onChange={this.handleChange}
          className={style.input}
          type="text"
          name="firstname"
          placeholder="Введите имя"
        />
        <input
          value={lastname}
          onChange={this.handleChange}
          className={style.input}
          type="text"
          name="lastname"
          placeholder="Введите фамилию"
        />
        <input
          value={email}
          onChange={this.handleChange}
          className={style.input}
          type="email"
          name="email"
          placeholder="Введите email"
        />
        <input
          value={password}
          onChange={this.handleChange}
          className={style.input}
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
