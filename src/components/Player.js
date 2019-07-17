import React, { Component } from "react";
import PlayerWinChart from "./PlayerWinChart";

class Player extends Component {
  render() {
    let player = this.props.player.data;
    let list = player.currentDeck.map((item, index) => {
      return (
        <div key={index}>
          {item.name}
          <img src={item.icon} />
        </div>
      );
    });
    return (
      <div>
        <PlayerWinChart player={this.props.player} />
        {player.name} {player.clan.name}
        {list}
      </div>
    );
  }
}

export default Player;
