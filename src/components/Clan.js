import React, { Component } from "react";
import ClanMembers from "./ClanMembers";
class Clan extends Component {
  render() {
    let clan = this.props.clan;
    let list = clan.members.map((item, index) => {
      return (
        <div className="gold" key={index}>
          <h2
            className="member"
            id={item.tag}
            onClick={this.props.handleMemberClick}
          >
            {item.name}
          </h2>
        </div>
      );
    });
    return (
      <div>
        <div className="clan-container">
          <h2>
            name: <span className="gold">{clan.name}</span>
          </h2>
          {/* <h3>
            description: <span>{clan.description}</span>
          </h3> */}
          <h3>Members</h3>
        </div>
        <div className="member-list-container">{list}</div>
      </div>
    );
  }
}

export default Clan;
