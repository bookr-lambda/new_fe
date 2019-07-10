import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import { users } from "../App.js";

class AddUserForm extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      name: "",
      email: ""
    };
  }

  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    axios.post("http://", this.state).then(res => console.log(res.data));
    this.props.history.push("/login");
  };

  cancelForm = e => {
    e.preventDefault();
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="user-form">
        <form onSubmit={this.handleSubmit}>
          <h2>Create a new Account</h2>
          <label>Name </label>
          <input
            type="name"
            placeholder="Name"
            name="name"
            value={this.state.name}
            onChange={this.handleInput}
          />
          <br />
          <label>Username </label>
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={this.state.username}
            onChange={this.handleInput}
          />
          <br />
          <label>Email </label>
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={this.state.email}
            onChange={this.handleInput}
          />
          <br />
          <label>Password </label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={this.state.password}
            onChange={this.handleInput}
          />
          <button className="add-user-btn">Register</button>
        </form>
      </div>
    );
  }
}
export default connect(
  null,
  { addUser }
)(AddUser);
