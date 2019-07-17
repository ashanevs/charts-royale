import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      tag: ""
    };
  }

  render() {
    return (
      <form>
        <input type="tag" name="tag" onChange={this.props.changeHandler} />
        <input
          type="submit"
          value="Submit"
          onClick={this.props.handlePlayerSearch}
        />
      </form>
    );
  }
}

export default Form;
