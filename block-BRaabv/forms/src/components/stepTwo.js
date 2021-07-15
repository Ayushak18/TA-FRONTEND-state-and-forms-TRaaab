import React from 'react';

class StepTwo extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <React.Fragment>
        <h1>From Step Two</h1>
        <input type="username" placeholder="Enter your username" />
      </React.Fragment>
    );
  }
}

export default StepTwo;
