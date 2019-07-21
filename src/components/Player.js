import React, { Component } from "react";
import { Link } from "react-router-dom";
import PlayerWinChart from "./PlayerWinChart";
import PlayerCurrentDeck from "./PlayerCurrentDeck";
import PlayerRarityChart from "./PlayerRarityChart";
import PlayerCardLevelsChart from "./PlayerCardLevelsChart";

class Player extends Component {
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
            <h2 onClick={this.props.handleClanClick}>
              clan:{" "}
              <span id={player.clan.tag} className="clan-name gold">
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
        {!playerCheck ? (
          <h3>
            Return{" "}
            <Link to="/" className="gold fade">
              home{" "}
            </Link>{" "}
            to search for a player!
          </h3>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Player;

// {
//   !this.state.viewMembers ? (
//     <ClanHistoryChart
//       clan={clan}
//       handleMemberClick={this.props.handleMemberClick}
//     />
//   ) : (
//     " "
//   )
// }
