import React, { Component } from "react";
import ClanMembers from "./ClanMembers";
import ClanHistoryChart from "./ClanHistoryChart";
import ClanWarChart from "./ClanWarChart";
import { Link } from "react-router-dom";
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
    let clanCheck = this.props.clan.name;
    return (
      <div>
        {clanCheck ? (
          <div className="clan-container">
            <h2>
              name: <span className="gold">{clan.name}</span>
            </h2>
            <h3 onClick={this.handleClick} className="member-selector gold">
              View Members
            </h3>
          </div>
        ) : (
          ""
        )}
        {!clanCheck ? (
          <h3>
            Return{" "}
            <Link to="/" className="gold">
              home
            </Link>{" "}
            to search for a clan!
          </h3>
        ) : (
          ""
        )}
        {!this.state.viewMembers && clanCheck ? (
          <ClanWarChart clan={clan} />
        ) : (
          " "
        )}
        {!this.state.viewMembers && clanCheck ? (
          <ClanHistoryChart
            clan={clan}
            handleMemberClick={this.props.handleMemberClick}
          />
        ) : (
          " "
        )}
        {this.state.viewMembers && clanCheck ? (
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
