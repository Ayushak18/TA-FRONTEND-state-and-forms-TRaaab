import React from 'react';
import '../input.css';

class Input extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <h1>From Inputs</h1>
        <div className="inputs">
          <label>
            Text Input:-
            <input type="text" placeholder="Text Input" />
          </label>

          <label>
            Date Input:-
            <input type="date" />
          </label>

          <label>
            File Input:-
            <input type="file" />
          </label>

          <label>
            Read Only Input:-
            <input type="text" value="Read Only" readOnly />
          </label>

          <label>
            Disbaled Input:-
            <input type="text" disabled />
          </label>

          <label>
            TextArea:-
            <textarea cols="30" rows="10"></textarea>
          </label>

          <label>
            TextArea Disabled:-
            <textarea cols="30" rows="10" disabled></textarea>
          </label>
        </div>
      </React.Fragment>
    );
  }
}

export default Input;
