import React from 'react';

class StepOne extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <React.Fragment>
        <h1>From Step One</h1>
        <input
          type="email"
          placeholder="Enter your email"
          onChange={this.props.change}
        />
      </React.Fragment>
    );
  }
}

export default StepOne;
