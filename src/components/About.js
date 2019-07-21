import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div>
        {this.props.showAbout ? (
          <div className="fade">
            <p className="about-paragraph">
              <span className="gold">Charts Royale</span> was created as a data
              visualization tool for the mobile game Clash Royale. It utilizes
              data from{" "}
              <a href="https://royaleapi.com/" className="gold">
                Royale API
              </a>
              . This site was created by{" "}
              <a href="https://ashanevs.github.io/" className="gold">
                Shane Vann-Shirley
              </a>
              , 2019.{" "}
            </p>
            <img
              src="laughingking.jpg"
              alt="laughing-king"
              className="king-pic"
            />
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default About;
