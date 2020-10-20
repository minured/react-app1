import React, { Fragment } from "react";

// import 默认寻找index.js
import Home from "./pages/home";
import Login from "./pages/login";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <h1>hello react</h1>
      <HashRouter>
        <Switch>
          {/* exact 精准匹配 */}
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/login" component={Login} />
          {/* 前面都没有匹配成功，就会跳转到 Redirect指定的路径 */}
          <Redirect to={"/home"} />
        </Switch>
      </HashRouter>
    </Fragment>
  );
}

export default App;
