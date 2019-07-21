import React, { Component } from "react";
import { Link } from "react-router-dom";
import PlayerWinChart from "./PlayerWinChart";
import PlayerCurrentDeck from "./PlayerCurrentDeck";
import PlayerRarityChart from "./PlayerRarityChart";
import PlayerCardLevelsChart from "./PlayerCardLevelsChart";

class TopPlayer extends Component {
  returnToTop = () => {
    window.scrollTo(0, 0);
  };
  render() {
    let player = this.props.player;
    let playerCheck = this.props.player.name;
    return (
      <div>
        {playerCheck ? (
          <div className="name-and-clan-container fade">
            <h2>
              name: <span className="gold">{player.name}</span>
            </h2>
            <h2>
              clan:{" "}
              <span id={player.clan.tag} className="gold">
                {player.clan.name}
              </span>
            </h2>
          </div>
        ) : (
          ""
        )}
        {playerCheck ? <PlayerWinChart player={this.props.player} /> : ""}
        {playerCheck ? <PlayerRarityChart player={this.props.player} /> : ""}
        {playerCheck ? (
          <PlayerCardLevelsChart player={this.props.player} />
        ) : (
          ""
        )}
        {playerCheck ? <PlayerCurrentDeck player={this.props.player} /> : ""}
        {playerCheck ? (
          <h3 className="return-to-top">
            Return to{" "}
            <span onClick={this.returnToTop} className="gold">
              Top
            </span>
          </h3>
        ) : (
          ""
        )}

        {!playerCheck ? (
          <div>
            {" "}
            <img
              src="laughingking.jpg"
              alt="laughing-king"
              className="king-pic"
            />
            <h3>
              Return{" "}
              <Link to="/" className="gold">
                home{" "}
              </Link>{" "}
              to search for a player!
            </h3>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default TopPlayer;
