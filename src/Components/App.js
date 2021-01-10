import React, { Component } from "react";
import "../Styles/App.css";
import Currency from "../Components/Currency";
import CurrencyError from "../Components/CurrencyError";
class App extends Component {
  render() {
    return (
      // wrap app JSX in CurrencyError component
      <div className="App">
        <CurrencyError>
          Germany: <Currency value={21} locale="de-DE" currency="US" />
          USA: <Currency value={21} locale="en-US" currency="USD" />
        </CurrencyError>
      </div>
    );
  }
}

export default App;
