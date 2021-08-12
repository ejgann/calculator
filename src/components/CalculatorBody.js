import React, { Component } from "react";
import Keypad from "./Keypad";
import Screen from "./Screen";

class CalculatorBody extends Component {
  render() {
    let { result } = this.props;

    return (
      <div className="result">
        <p>{result}</p>
      </div>
    )
  };
}

export default CalculatorBody;
