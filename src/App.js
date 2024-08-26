import React, {Component} from "react";
import CurrencyInput from "./components/CurrencyInput";

class App extends Component {
  state={
    from: 'USD',
    to: 'INR',
    rate : 1,
    fromAmt: 1,
    toAmt: 1,
  }
  render() {
    return <div className="currency-converter">
      <CurrencyInput/>
      <CurrencyInput/>
    </div>;
  }
}

export default App;
