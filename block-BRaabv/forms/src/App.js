import './App.css';
import React from 'react';
import StepOne from './components/stepOne';
import StepTwo from './components/stepTwo';
import StepThree from './components/stepThree';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 1,
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      step: this.state.step + 1,
    });
  };

  handleToFro = () => {
    switch (this.state.step) {
      case 1:
        return <input type="submit" value="Next" />;

      case 2:
        return <input type="submit" value="Next" />;

      case 3:
        return <input type="submit" value="Sumit" />;

      case 4:
        alert('Form Submit Successfully');
    }
  };

  change = (event) => {
    console.log(event.target.value);
  };

  render() {
    return (
      <>
        <h1>Wizard Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.state.step === 1 ? <StepOne change={this.change} /> : ''}
          {this.state.step === 2 ? <StepTwo /> : ''}
          {this.state.step === 3 ? <StepThree /> : ''}
          {this.state.step === 4 ? this.setState({ step: 1 }) : ''}
          {this.handleToFro()}
        </form>
      </>
    );
  }
}

export default App;
