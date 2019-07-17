import React, { Component } from "react";

class Player extends Component {
  render() {
    const player = this.props.player.data;
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
        {player.name} {player.clan.name}
        {list}
      </div>
    );
  }
}

export default Player;
