import React from 'react';
import Input from './component/input';
import Form from './component/form';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        {/* <Input /> */}
        <Form />
      </React.Fragment>
    );
  }
}

export default App;
