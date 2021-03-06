import React, { Component } from "react";
import { Link } from "react-router-dom";

class TopPlayers extends Component {
  constructor() {
    super();
    this.state = {
      topplayers: {}
    };
  }
  returnToTop = () => {
    window.scrollTo(0, 0);
  };
  render() {
    let topCheck = Object.entries(this.props.topplayers).length;
    if (topCheck > 0) {
      let list = this.props.topplayers.slice(0, 50).map((item, index) => {
        return (
          <div key={index}>
            <h2
              className="gold member fade"
              id={item.tag}
              onClick={this.props.handleTopPlayerClick}
            >
              {item.name}
            </h2>
          </div>
        );
      });
      return (
        <div className="member-list-container">
          {" "}
          {list}
          <h3 className="return-to-top">
            Return to{" "}
            <span onClick={this.returnToTop} className="gold">
              Top
            </span>
          </h3>
        </div>
      );
    } else
      return (
        <h3 className="fade">
          Return{" "}
          <Link to="/" className="gold">
            home
          </Link>{" "}
          to load top players!
        </h3>
      );
  }
}

export default TopPlayers;
