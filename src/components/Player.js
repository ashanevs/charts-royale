import React, { Component } from "react";
import PlayerWinChart from "./PlayerWinChart";
import PlayerCurrentDeck from "./PlayerCurrentDeck";

class Player extends Component {
  render() {
    let player = this.props.player.data;
    // let list = player.currentDeck.map((item, index) => {
    //   return (
    //     <div key={index}>
    //       {item.name}
    //       <img src={item.icon} />
    //     </div>
    //   );
    // });
    return (
      <div>
        <h1>{player.name}</h1>
        <h2>{player.clan.name}</h2>
        <PlayerWinChart player={this.props.player} />
        <PlayerCurrentDeck player={this.props.player} />
      </div>
    );
  }
}

export default Player;
