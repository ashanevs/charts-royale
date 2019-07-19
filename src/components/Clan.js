import React, { Component } from "react";
import ClanMembers from "./ClanMembers";
import ClanHistoryChart from "./ClanHistoryChart";
class Clan extends Component {
  constructor() {
    super();
    this.state = {
      viewMembers: false
    };
  }
  handleClick = e => {
    e.preventDefault();
    if (!this.state.viewMembers) {
      this.setState({ viewMembers: true });
    } else {
      this.setState({ viewMembers: false });
    }
  };
  render() {
    let clan = this.props.clan;
    return (
      <div>
        <div className="clan-container">
          <h2>
            name: <span className="gold">{clan.name}</span>
          </h2>
          <h3 onClick={this.handleClick} className="member-selector gold">
            View Members
          </h3>
        </div>
        {!this.state.viewMembers ? (
          <ClanHistoryChart
            clan={clan}
            handleMemberClick={this.props.handleMemberClick}
          />
        ) : (
          " "
        )}
        {this.state.viewMembers ? (
          <ClanMembers
            clan={clan}
            handleMemberClick={this.props.handleMemberClick}
          />
        ) : (
          " "
        )}
      </div>
    );
  }
}

export default Clan;
