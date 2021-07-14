import React from 'react';
import '../address.css';

class Address extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      address: '',
      zip: '',
      city: '',
      country: '',
      checked: false,
    };
  }

  handleChange = (event) => {
    let { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleCheck = (event) => {
    this.setState({
      checked: event.target.checked,
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="shipping">
          <h1>Shipping Address</h1>
          <form className="flex">
            <label>
              Address:-
              <input
                onChange={this.handleChange}
                type="text"
                placeholder="Eg. Near Clock tower"
                name="address"
              />
            </label>

            <label>
              ZIP:-
              <input
                onChange={this.handleChange}
                type="text"
                name="zip"
                placeholder="Eg. 123456"
              />
            </label>

            <label>
              City:-
              <input
                onChange={this.handleChange}
                type="text"
                placeholder="Eg. Dehradun"
                name="city"
              />
            </label>

            <label>
              Country:-
              <input
                onChange={this.handleChange}
                type="text"
                placeholder="Eg. India"
                name="country"
              />
            </label>
          </form>
        </div>

        <label>
          Same as shipping address
          <input onClick={this.handleCheck} className="check" type="checkbox" />
        </label>

        <div className="billing">
          <h1>Billing Address</h1>
          <form className="flex">
            <label>
              Address:-
              <input
                type="text"
                placeholder="Eg. Near Clock tower"
                readOnly
                value={this.state.checked ? this.state.address : ''}
              />
            </label>

            <label>
              ZIP:-
              <input
                type="text"
                placeholder="Eg. 123456"
                readOnly
                value={this.state.checked ? this.state.zip : ''}
              />
            </label>

            <label>
              City:-
              <input
                type="text"
                placeholder="Eg. Dehradun"
                readOnly
                value={this.state.checked ? this.state.city : ''}
              />
            </label>

            <label>
              Country:-
              <input
                type="text"
                placeholder="Eg. India"
                readOnly
                value={this.state.checked ? this.state.country : ''}
              />
            </label>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Address;
