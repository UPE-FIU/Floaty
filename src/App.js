import React, { Component } from "react";
import Loadable from "react-loadable";

import "./scss/App.scss";

const AsyncPage = Loadable({
  loader: () => import("./Page"),
  loading: () => <div>loading page...</div>,
  modules: ["Page"]
});

class App extends Component {
  render() {
    return <AsyncPage />;
  }
}

export default App;
