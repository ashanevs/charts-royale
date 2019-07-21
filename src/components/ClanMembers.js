import React, { Component } from "react";

class ClanMembers extends Component {
  render() {
    let clan = this.props.clan;
    let list = clan.members.map((item, index) => {
      return (
        <div key={index}>
          <h2
            className="gold member fade"
            id={item.tag}
            onClick={this.props.handleMemberClick}
          >
            {item.name}
          </h2>
        </div>
      );
    });
    return (
      <div className="member-list-container">
        {list}{" "}
        <h3 className="return-to-top">
          Return to{" "}
          <span onClick={this.props.returnToTop} className="gold">
            Top
          </span>
        </h3>
      </div>
    );
  }
}

export default ClanMembers;
