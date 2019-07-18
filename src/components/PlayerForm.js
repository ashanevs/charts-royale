import React, { Component } from "react";

class PlayerForm extends Component {
  render() {
    return (
      <form>
        Search for a player by clan tag (e.g. 208RRCYGL)
        <input
          type="tag"
          name="tag"
          placeholder="Player tag..."
          className="player-searchbar"
          onChange={this.props.changeHandler}
        />
        <button
          type="submit"
          value="Submit"
          className="submit-button"
          onClick={this.props.handlePlayerSearch}
        >
          Submit
        </button>
      </form>
    );
  }
}

export default PlayerForm;
