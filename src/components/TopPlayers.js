import React, { Component } from "react";
import axios from "axios";

class TopPlayers extends Component {
  constructor() {
    super();
    this.state = {
      topplayers: {}
    };
  }
  render() {
    let list = this.props.topplayers.slice(0, 50).map((item, index) => {
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

export default TopPlayers;
