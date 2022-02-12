import React, { Component } from "react";
import "./App.css";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      flag: true,
    };
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>Counter:{count}</h1>
        <button onClick={this.handleIncrement}>Increament Count </button>
        <button onClick={this.handleDecrement}>Decreament Count </button>
      </div>
    );
  }
}

export default App;
