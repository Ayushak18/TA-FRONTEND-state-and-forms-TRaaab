import './App.css';
import React from 'react';
import Product from './components/product';
import data from './data.json';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      product: [],
      cartTotal: 0,
    };
  }

  handleCart = (product) => {
    this.setState({
      product: [...this.state.product, product],
    });
  };

  showCartAndHandleTotal = () => {
    let cartDiv = document.querySelector('.cart-div');
    cartDiv.className = 'show-cart';
    let cartTotalPrice = [];
    cartTotalPrice = this.state.product.map((eachProduct) => eachProduct.price);
    let total = cartTotalPrice.reduce((acc, cv) => {
      acc = acc + cv;
      return acc;
    });
    this.setState({
      cartTotal: total,
    });
  };

  closeCart = () => {
    let cartDiv = document.querySelector('.show-cart');
    return (cartDiv.className = 'cart-div');
  };

  // handleDeleteProduct = (event, eachProduct) => {
  //   console.log(eachProduct);
  // };

  handleCartTotal = () => {
    return alert(`Your total bill - $ ${this.state.cartTotal}`);
  };

  render() {
    return (
      <div>
        <div className="cart-button-section">
          <button onClick={this.showCartAndHandleTotal} className="cart">
            Cart {this.state.product.length}
          </button>
        </div>
        <div className="cart-div">
          <div className="cart-content">
            {this.state.product.map((eachProduct) => (
              <>
                <span className="heading-span">{eachProduct.title} </span>
                <span>$ {eachProduct.price}</span>
                <button
                // onClick={(event, eachProduct) =>
                //   this.handleDeleteProduct(event, eachProduct)
                // }
                >
                  X
                </button>
                <br />
              </>
            ))}
          </div>
          <div className="cart-total">
            <button onClick={this.handleCartTotal}>Checkout</button>
          </div>
          <button className="close-cart" onClick={this.closeCart}>
            Close
          </button>
        </div>
        <h1 className="cart-heading">Shopping Cart</h1>
        <div className="product-container">
          {data.products.map((product) => {
            return <Product product={product} handleCart={this.handleCart} />;
          })}
        </div>
      </div>
    );
  }
}

export default App;
