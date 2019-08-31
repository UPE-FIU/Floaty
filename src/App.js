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
    return (
      <div className="App">
        <div className="App-intro">
          <h1>Hello there Steven!</h1>
          <br />
          <br />
          <AsyncPage />
        </div>
      </div>
    );
  }
}

export default App;
