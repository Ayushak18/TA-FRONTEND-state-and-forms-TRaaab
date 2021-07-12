import React from 'react';
import '../item.css';

class Item extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="item">
        <h3>
          {this.props.item.title}
          {` (Category - ${this.props.item.category})`}
        </h3>
        <p>{`$ ${this.props.item.price}`}</p>
        <img src={this.props.item.img} alt={this.props.item.title} />
        <p>{this.props.item.desc}</p>
      </div>
    );
  }
}

export default Item;
