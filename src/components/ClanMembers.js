import React, { Component } from "react";

class ClanMembers extends Component {
  render() {
    let clan = this.props.clan;
    let list = clan.members.map((item, index) => {
      return (
        <div key={index}>
          <h2
            className="gold member"
            id={item.tag}
            onClick={this.props.handleMemberClick}
          >
            {item.name}
          </h2>
        </div>
      );
    });
    return <div className="member-list-container">{list}</div>;
  }
}

export default ClanMembers;
