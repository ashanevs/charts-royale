import React, { Component } from "react";

class ClanForm extends Component {
  constructor() {
    super();
    this.state = {
      loading: false
    };
  }
  componentDidMount = () => {
    this.setState({ loading: false });
  };
  showLoadingWheel = (e, func = this.props.handleClanSearch) => {
    e.preventDefault();
    this.setState({ loading: true });
    setTimeout(this.componentDidMount, 8000);
    func(e);
  };
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
        {!this.state.loading ? (
          <button
            type="submit"
            value="Submit"
            className="submit-button"
            onClick={this.showLoadingWheel}
          >
            Submit
          </button>
        ) : (
          <img className="loading-gif" src="loading-wheel.gif" alt="loading" />
        )}
      </form>
    );
  }
}

export default ClanForm;
