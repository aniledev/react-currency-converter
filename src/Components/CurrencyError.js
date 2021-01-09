import React, { Component } from "react";

export default class CurrencyError extends Component {
  constructor(props) {
    //initialize state wth one property of hasError
    super(props);
    this.setState({
      hasError: false,
    });
  }

  // This lifecycle is invoked after an error has been thrown by a descendant component. It receives the error that was thrown as a parameter and should return a value to update state.
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    // this will conditionally render an error message if hasError is true; otherwise display the children as normal
    if (this.state.hasError) {
      return <h2>Could not display this currency.</h2>;
    }
    return this.props.children;
  }
}
