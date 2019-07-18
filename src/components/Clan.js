import React, { Component } from "react";
import ClanMembers from "./ClanMembers";
class Clan extends Component {
  constructor() {
    super();
    this.state = {
      viewMembers: false
    };
  }
  render() {
    let clan = this.props.clan;
    return (
      <div>
        <div className="clan-container">
          <h2>
            name: <span className="gold">{clan.name}</span>
          </h2>
          <h3>Members</h3>
        </div>
        {/* <div className="member-list-container">{list}</div> */}
        <ClanMembers
          clan={clan}
          handleMemberClick={this.props.handleMemberClick}
        />
      </div>
    );
  }
}

export default Clan;
