import React, { Component } from "react";

class ClanMembers extends Component {
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
    return <div>list</div>;
  }
}

export default ClanMembers;
