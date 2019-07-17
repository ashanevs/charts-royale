import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import { Route, Switch, Redirect } from "react-router-dom";

import Form from "./components/Form";
import Player from "./components/Player";

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
    axios
      .get("https://api.royaleapi.com/player/" + this.state.tag, {
        headers: {
          Authorization:
            "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Mjc1MCwiaWRlbiI6IjI1MDQzMzU4NDEyMzQ3ODAyNiIsIm1kIjp7fSwidHMiOjE1NjMzMTc2NjQ5MjJ9.G4gAN7044E1oBnhysqh8QxwniMtoeAR8zpvtVZNPhHo"
        }
      })
      .then(response => {
        this.setState({ player: response });
        this.goToPlayer();
      });
  };
  goToPlayer = () => {
    this.props.history.push("/player");
  };
  render() {
    return (
      <div>
        <Route exact path="/" render={() => <Redirect to="/search" />} />
        <Switch>
          <Route
            path="/search"
            render={props => (
              <Form
                player={this.state.player}
                changeHandler={this.changeHandler}
                handlePlayerSearch={this.handlePlayerSearch}
                {...props}
              />
            )}
          />
          <Route
            path="/player"
            render={props => <Player player={this.state.player} {...props} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
