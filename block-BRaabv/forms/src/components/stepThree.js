import React from 'react';

class StepThree extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <React.Fragment>
        <h1>From Step Three</h1>
        <input type="password" placeholder="Enter your password" />
        {console.log(this.state)}
      </React.Fragment>
    );
  }
}

export default StepThree;
