import React, { Component } from "react";
class PlayerForm extends Component {
  constructor() {
    super();
    this.state = {
      loading: false
    };
  }
  componentWillMount = () => {
    this.setState({ loading: false });
  };
  showLoadingWheel = (e, func = this.props.handlePlayerSearch) => {
    e.preventDefault();
    this.setState({ loading: true });
    setTimeout(this.componentWillMount, 8000);
    func(e);
  };
  render() {
    return (
      <form className="fade">
        Search for a player by tag (e.g. 208RRCYGL)
        <input
          type="text"
          name="tag"
          placeholder="Player tag..."
          className="player-searchbar"
          onChange={this.props.changeHandler}
        />
        {!this.state.loading ? (
          <button
            type="submit"
            value="Submit"
            className="submit-button"
            onClick={this.showLoadingWheel}
          >
            {" "}
            Submit
          </button>
        ) : (
          <img className="loading-gif" src="loading-wheel.gif" alt="loading" />
        )}
      </form>
    );
  }
}

export default PlayerForm;
