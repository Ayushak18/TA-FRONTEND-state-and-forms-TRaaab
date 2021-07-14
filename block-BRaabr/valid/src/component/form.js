import React from 'react';
import '../form.css';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      repassword: '',
      errors: {
        username: '',
        email: '',
        password: '',
        repassword: '',
      },
    };
  }

  validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  checkPass = (password, repassword) => {
    console.log(password, repassword);
  };

  handleChange = (event) => {
    event.preventDefault();

    let { name, value } = event.target;

    let errors = this.state.errors;

    switch (name) {
      case 'email':
        errors.email = this.validateEmail(this.state.email)
          ? ''
          : 'Email is not valid';

      case 'username':
        errors.username =
          this.state.username.length < 3
            ? 'Username must be atleast 3 char'
            : '';

      case 'password':
        errors.password =
          this.state.password.length < 6
            ? 'Password should be 6 char long'
            : '';

      case 'repassword':
        errors.repassword = this.checkPass(
          this.state.password,
          this.state.repassword
        );
    }

    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    alert('Form Submitted');
  };

  render() {
    return (
      <React.Fragment>
        <h1>Register With Us</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Username:-
            <input
              onChange={this.handleChange}
              type="text"
              placeholder="Enter Username"
              name="username"
            />
          </label>

          <label>
            Email:-
            <input
              onChange={this.handleChange}
              type="email"
              placeholder="Enter your email"
              name="email"
            />
          </label>

          <label>
            Password:-
            <input
              onChange={this.handleChange}
              type="password"
              placeholder="Password"
              name="password"
            />
          </label>

          <label>
            Confirm Password:-
            <input
              onChange={this.handleChange}
              type="password"
              placeholder="Confirm Password"
              name="repassword"
            />
          </label>
          <input type="submit" value="Sumit" />
        </form>
      </React.Fragment>
    );
  }
}

export default Form;
