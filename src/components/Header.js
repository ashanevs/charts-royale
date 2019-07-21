import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="header-container gold fade">
        <Link to="/">
          <h1 onClick={this.props.handleLogoClick}>Charts Royale</h1>
        </Link>
      </div>
    );
  }
}

export default Header;
