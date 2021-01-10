import React, { Component } from "react";
import "../Styles/Currency.css";

export default class Currency extends Component {
  render() {
    const money = new Intl.NumberFormat(this.props.locale, {
      style: "currency",
      currency: this.props.currency,
    }).format(this.props.value);

    return <div className="Currency">{money}</div>;
  }
}
