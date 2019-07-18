import React, { Component } from "react";

class ClanForm extends Component {
  render() {
    return (
      <form>
        Search for a clan by tag (e.g. JG090GV)
        <input
          type="tag"
          name="tag"
          placeholder="Clan tag..."
          className="player-searchbar"
          onChange={this.props.changeHandler}
        />
        <button
          type="submit"
          value="Submit"
          className="submit-button"
          onClick={this.props.handleClanSearch}
        >
          Submit
        </button>
      </form>
    );
  }
}

export default ClanForm;
