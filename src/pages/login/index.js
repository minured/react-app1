import React, { Component } from "react";
import "./login.scss";
import Header from "../../components/header";

class Login extends Component {
  render() {
    return (
      <div className="P-login">
        <Header msg="message from login"/>
        <div>login</div>
        <button onClick={this.gotoHome}>Home</button>
      </div>
    );
  }
  gotoHome = () => {
    this.props.history.push("/home");
  };
}

export default Login;
