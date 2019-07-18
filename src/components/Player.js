import React, { Component } from "react";
import PlayerWinChart from "./PlayerWinChart";
import PlayerCurrentDeck from "./PlayerCurrentDeck";
import PlayerRarityChart from "./PlayerRarityChart";

class Player extends Component {
  render() {
    let player = this.props.player.data;
    return (
      <div>
        <div className="name-and-clan-container">
          <h2>
            name: <span className="gold">{player.name}</span>
          </h2>
          <h2>
            clan: <span className="gold">{player.clan.name}</span>
          </h2>
        </div>
        <PlayerWinChart player={this.props.player} />
        {/* <PlayerRarityChart player={this.props.player} /> */}
        <PlayerCurrentDeck player={this.props.player} />
      </div>
    );
  }
}

export default Player;
