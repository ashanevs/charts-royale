import React, { Component } from "react";

class Form extends Component {
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
        <input
          type="submit"
          value="Submit"
          className="submit-button"
          onClick={this.props.handlePlayerSearch}
        />
      </form>
    );
  }
}

export default Form;
