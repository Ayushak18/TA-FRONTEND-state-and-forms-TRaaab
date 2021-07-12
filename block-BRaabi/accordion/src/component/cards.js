import React from 'react';
import '../card.css';

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    let hidePara = document.querySelector('p');
    hidePara.classList = 'show';
  };

  render() {
    return (
      <div className="cards">
        <h1>
          <a onClick={this.handleClick} href="#a">
            {this.props.data.Q}
          </a>
        </h1>
        <p className="hide">{this.props.data.A}</p>
      </div>
    );
  }
}

export default Card;
