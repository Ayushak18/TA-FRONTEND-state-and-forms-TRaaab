import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      step: 1,
      active: '',
      maxValue: Infinity,
    };
  }

  handleIncrement = () => {
    if (this.state.maxValue - this.state.counter >= this.state.step) {
      this.setState({
        counter: this.state.counter + this.state.step,
      });
    }
  };

  handleDecrement = () => {
    this.setState({
      counter: this.state.counter - this.state.step,
    });
  };

  handleReset = () => {
    this.setState({
      counter: 0,
      step: 1,
      maxValue: Infinity,
    });
  };

  setStep = (event) => {
    let step = Number(event.target.innerText);
    this.setState({
      step: step,
    });
  };

  setMax = (event) => {
    let maxValue = Number(event.target.innerText);
    this.setState({
      maxValue: maxValue,
    });
  };

  render() {
    return (
      <>
        <div>
          <h1>{this.state.counter}</h1>
        </div>
        <div className="steps">
          <h2>Steps</h2>
          <div>
            <button
              className={this.state.step === 5 ? 'active' : ''}
              onClick={(event) => this.setStep(event)}
            >
              5
            </button>
            <button
              className={this.state.step === 10 ? 'active' : ''}
              onClick={(event) => this.setStep(event)}
            >
              10
            </button>
            <button
              className={this.state.step === 15 ? 'active' : ''}
              onClick={(event) => this.setStep(event)}
            >
              15
            </button>
          </div>
        </div>
        <div>
          <h2>Max Value</h2>
          <button
            className={this.state.maxValue === 15 ? 'active' : ''}
            onClick={(event) => this.setMax(event)}
          >
            15
          </button>
          <button
            className={this.state.maxValue === 100 ? 'active' : ''}
            onClick={(event) => this.setMax(event)}
          >
            100
          </button>
          <button
            className={this.state.maxValue === 200 ? 'active' : ''}
            onClick={(event) => this.setMax(event)}
          >
            200
          </button>
        </div>
        <div>
          <button onClick={this.handleIncrement}>Increament</button>
          <button onClick={this.handleDecrement}>Decreament</button>
          <button onClick={this.handleReset}>Reset</button>
        </div>
      </>
    );
  }
}

export default App;
