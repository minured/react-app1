import React, { Component } from "react";
import "./home.scss";
import Header from "../../components/header";
import http from "../../http";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
  }
  render() {
    return (
      <div className="P-home">
        <Header setCount={this.setCount} count={this.state.count} />
        <div>home</div>
        <button onClick={this.gotoLogin}>login</button>
        <button onClick={this.getData}>getData</button>
      </div>
    );
  }
  gotoLogin = () => {
    this.props.history.push("/login");
  };

  setCount = (value) => {
    this.setState(
      {
        count: value,
      },
      () => {
        console.log(`new count: ${this.state.count}`);
      }
    );
  };

  getData = async () => {
    // 该路径的ajax 会被mock.js拦截， 并返回指定的数据
    const res = await http.get("/getData");
    console.log(res);
  };
}

export default Home;
