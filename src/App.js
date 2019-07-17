import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";
import axios from "axios";
class App extends Component {
  constructor() {
    super();
    this.state = {
      tag: "",
      player: {}
    };
  }
  changeHandler = e => {
    this.setState({
      tag: e.target.value
    });
  };
  handlePlayerSearch = e => {
    e.preventDefault();
    let config = {
      headers: { Authorization: "bearer " + this.state.tag }
    };
    axios
      .get("https://api.royaleapi.com/player/" + this.state.tag, {
        headers: {
          Authorization:
            "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Mjc1MCwiaWRlbiI6IjI1MDQzMzU4NDEyMzQ3ODAyNiIsIm1kIjp7fSwidHMiOjE1NjMzMTc2NjQ5MjJ9.G4gAN7044E1oBnhysqh8QxwniMtoeAR8zpvtVZNPhHo"
        }
      })
      .then(response => {
        this.setState({ player: response });
      });
  };
  render() {
    return (
      <div>
        <Form
          player={this.state.player}
          changeHandler={this.changeHandler}
          handlePlayerSearch={this.handlePlayerSearch}
        />
      </div>
    );
  }
}

export default App;
