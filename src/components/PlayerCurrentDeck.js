import React, { Component } from "react";

class PlayerCurrentDeck extends Component {
  render() {
    let player = this.props.player.data;
    let list = player.currentDeck.map((item, index) => {
      return (
        <div className="current-deck-card-container" key={index}>
          <h3>{item.name}</h3>
          <img src={item.icon} className="card-icon" alt="card-icon" />
        </div>
      );
    });
    return (
      <div className="current-deck-container">
        <h2>Current Deck</h2>
        <div className="current-deck-card-list">{list}</div>
      </div>
    );
  }
}

export default PlayerCurrentDeck;
