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
  returnToTop = () => {
    window.scrollTo(0, 0);
  };
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
          <div>
            <img
              src="laughingking.jpg"
              alt="laughing-king"
              className="king-pic"
            />
            <h3>
              Return{" "}
              <Link to="/" className="gold fade">
                home
              </Link>{" "}
              to search for a clan!
            </h3>
          </div>
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
            returnToTop={this.returnToTop}
          />
        ) : (
          " "
        )}
        {!this.state.viewMembers && clanCheck ? (
          <h3 className="return-to-top">
            Return to{" "}
            <span onClick={this.returnToTop} className="gold">
              Top
            </span>
          </h3>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Clan;
