import React, { Component, Fragment } from "react";
import "./header.scss";

class Header extends Component {
  render() {
    let { count } = this.props;
    let addBtn;
    if (this.props.count) {
      addBtn = (
        <button onClick={() => this.props.setCount((count += 1))}>
          add Count
        </button>
      );
    }
    return (
      <Fragment>
        <div className="M-header">
          header
          <p>{this.props.msg}</p>
          <p>count from home: {this.props.count}</p>
          {addBtn}
        </div>
      </Fragment>
    );
  }
}

export default Header;
