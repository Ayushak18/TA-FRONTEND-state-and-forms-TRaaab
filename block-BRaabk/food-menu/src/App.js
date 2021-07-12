import './App.css';
import data from './data.json';
import Item from './component/item';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: 'all',
    };
  }

  handleClick = (event) => {
    let category = event.target.innerText;
    this.setState({
      category: category,
    });
  };

  everyFood = () => {
    return data.map((each) => <Item item={each} />);
  };

  render() {
    return (
      <>
        <h1>Menu</h1>
        <div className="menu-category">
          <button>
            <a onClick={(event) => this.handleClick(event)} href="#a">
              all
            </a>
          </button>
          <button>
            <a onClick={(event) => this.handleClick(event)} href="#a">
              breakfast
            </a>
          </button>
          <button>
            <a onClick={(event) => this.handleClick(event)} href="#a">
              lunch
            </a>
          </button>
          <button>
            <a onClick={(event) => this.handleClick(event)} href="#a">
              shakes
            </a>
          </button>
        </div>
        {this.state.category === 'all'
          ? this.everyFood()
          : data.map((each) =>
              each.category === this.state.category ? <Item item={each} /> : ''
            )}
      </>
    );
  }
}

export default App;
