import React, { Component } from "react";
class PlayerForm extends Component {
  constructor() {
    super();
    this.state = {
      loading: false
    };
  }
  showLoadingWheel = e => {
    e.preventDefault();
    this.setState({ loading: true });
  };
  render() {
    return (
      <form>
        Search for a player by tag (e.g. 208RRCYGL)
        {this.state.loading ? <img src="loading-wheel.gif" /> : ""}
        <input
          type="text"
          name="tag"
          placeholder="Player tag..."
          className="player-searchbar"
          onChange={this.props.changeHandler}
        />
        <button
          type="submit"
          value="Submit"
          className="submit-button"
          // onClick={this.props.handlePlayerSearch}
          onClick={(this.showLoadingWheel, this.props.handlePlayerSearch)}
        >
          Submit
        </button>
      </form>
    );
  }
}

export default PlayerForm;
