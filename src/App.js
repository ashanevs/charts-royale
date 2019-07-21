import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import { Route, Switch, Redirect } from "react-router-dom";

import PlayerForm from "./components/PlayerForm";
import ClanForm from "./components/ClanForm";
import Player from "./components/Player";
import Clan from "./components/Clan";
import Header from "./components/Header";
import About from "./components/About";

const authToken =
  "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Mjc1MCwiaWRlbiI6IjI1MDQzMzU4NDEyMzQ3ODAyNiIsIm1kIjp7fSwidHMiOjE1NjMzMTc2NjQ5MjJ9.G4gAN7044E1oBnhysqh8QxwniMtoeAR8zpvtVZNPhHo";
class App extends Component {
  constructor() {
    super();
    this.state = {
      tag: "",
      player: {},
      clan: {},
      about: false
    };
  }
  changeHandler = e => {
    this.setState({
      tag: e.target.value
    });
  };
  handleAboutClick = e => {
    e.preventDefault();
    if (!this.state.about) {
      this.setState({ about: true });
    } else {
      this.setState({ about: false });
    }
  };
  handlePlayerSearch = e => {
    e.preventDefault();
    axios
      .get("https://api.royaleapi.com/player/" + this.state.tag, {
        headers: {
          Authorization: authToken
        }
      })
      .then(response => {
        this.setState({ player: response.data });
        this.goToPlayer();
      });
  };
  handleClanSearch = e => {
    e.preventDefault();
    axios
      .get("https://api.royaleapi.com/clan/" + this.state.tag, {
        headers: {
          Authorization: authToken
        }
      })
      .then(response => {
        this.setState({ clan: response.data });
        this.goToClan();
      });
  };
  handleMemberClick = e => {
    e.preventDefault();
    axios
      .get("https://api.royaleapi.com/player/" + e.target.id, {
        headers: {
          Authorization: authToken
        }
      })
      .then(response => {
        this.setState({ player: response.data });
        this.goToPlayer();
        window.scrollTo(0, 0);
      });
  };
  handleClanClick = e => {
    e.preventDefault();
    axios
      .get("https://api.royaleapi.com/clan/" + e.target.id, {
        headers: {
          Authorization:
            "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Mjc1MCwiaWRlbiI6IjI1MDQzMzU4NDEyMzQ3ODAyNiIsIm1kIjp7fSwidHMiOjE1NjMzMTc2NjQ5MjJ9.G4gAN7044E1oBnhysqh8QxwniMtoeAR8zpvtVZNPhHo"
        }
      })
      .then(response => {
        this.setState({ clan: response.data });
        this.goToClan();
        window.scrollTo(0, 0);
      });
  };
  handleLogoClick = () => {
    if (this.state.about) {
      this.setState({ about: false });
    }
  };
  goToPlayer = () => {
    this.props.history.push("/player");
  };
  goToClan = () => {
    this.props.history.push("/clan");
  };
  render() {
    return (
      <div className="app-container">
        <Header handleLogoClick={this.handleLogoClick} />
        <Route exact path="/" render={() => <Redirect to="/search" />} />
        <Switch>
          <Route
            path="/search"
            render={props => (
              <div>
                {!this.state.about ? (
                  <PlayerForm
                    // player={this.state.player}
                    changeHandler={this.changeHandler}
                    handlePlayerSearch={this.handlePlayerSearch}
                    {...props}
                  />
                ) : (
                  ""
                )}
                {!this.state.about ? (
                  <ClanForm
                    // player={this.state.player}
                    changeHandler={this.changeHandler}
                    handleClanSearch={this.handleClanSearch}
                    {...props}
                  />
                ) : (
                  ""
                )}
                <About showAbout={this.state.about} />
                {!this.state.about ? (
                  <h2
                    className="gold about-link bottom"
                    onClick={this.handleAboutClick}
                  >
                    About
                  </h2>
                ) : (
                  <h2 className="bottom">
                    Return to{" "}
                    <span
                      className="gold about-link"
                      onClick={this.handleAboutClick}
                    >
                      Search
                    </span>
                  </h2>
                )}
              </div>
            )}
          />
          <Route
            path="/player"
            render={props => (
              <Player
                player={this.state.player}
                handleClanClick={this.handleClanClick}
                {...props}
              />
            )}
          />
          <Route
            path="/clan"
            render={props => (
              <Clan
                clan={this.state.clan}
                handleMemberClick={this.handleMemberClick}
                {...props}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
