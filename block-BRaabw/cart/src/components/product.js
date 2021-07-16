import React from 'react';
import '../product.css';

class Product extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="item">
        <img src="/static/products/100_1.jpg" alt="" />
        <h2 className="title">{this.props.product.title}</h2>
        <hr />
        <p className="price">
          $ <strong>{this.props.product.price}</strong>
        </p>
        <button
          onClick={(product) => this.props.handleCart(this.props.product)}
        >
          Add to cart
        </button>
      </div>
    );
  }
}

export default Product;
