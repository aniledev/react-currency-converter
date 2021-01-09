import React, { Component } from "react";
import "../Styles/App.css";
import Currency from "../Components/Currency";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        Germany: <Currency value={21} locale="de-DE" currency="US" />
        USA: <Currency value={21} locale="en-US" currency="USD" />
      </div>
    );
  }
}
