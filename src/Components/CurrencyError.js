import React, { Component } from "react";

export default class CurrencyError extends Component {
  constructor(props) {
    //initialize state wth one property of hasError
    super(props);
    this.setState({
      hasError: false,
    });
  }
  render() {
    return <div className="CurrencyError"></div>;
  }
}
