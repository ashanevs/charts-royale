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
    console.log(e);
    this.setState({ loading: true });
    setTimeout(this.componentWillMount, 8000);
    func(e);
  };
  render() {
    return (
      <form>
        Search for a player by tag (e.g. 208RRCYGL)
        {/* {this.state.loading ? <img src="loading-wheel.gif" /> : ""} */}
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
            // onClick={this.props.handlePlayerSearch}
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
