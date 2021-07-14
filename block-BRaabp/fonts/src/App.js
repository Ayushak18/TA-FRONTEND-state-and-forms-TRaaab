import React from 'react';
import Font from './component/font';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 'Enter Your Text',
    };
  }

  handleChange = (event) => {
    return this.setState({
      data: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <h1 className="heading">Dynamic Fonts </h1>
        <input onChange={(event) => this.handleChange(event)} type="text" />
        <p>{`${this.state.data}`} </p>
        <div className="Roboto">
          <Font text={this.state.data} />
        </div>
        <div className="Potta">
          <Font text={this.state.data} />
        </div>
        <div className="Lato">
          <Font text={this.state.data} />
        </div>
        <div className="Fraunces">
          <Font text={this.state.data} />
        </div>
        <div className="Yusei">
          <Font text={this.state.data} />
        </div>
      </div>
    );
  }
}

export default App;
