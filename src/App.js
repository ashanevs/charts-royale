import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";
class App extends Component {
  constructor() {
    super();
    this.state = {
      tag: ""
    };
  }
  changeHandler = event => {
    this.setState({
      tag: event.target.value
    });
  };
  render() {
    return (
      <div>
        <Form player={this.state.player} changeHandler={this.changeHandler} />
      </div>
    );
  }
}

export default App;
