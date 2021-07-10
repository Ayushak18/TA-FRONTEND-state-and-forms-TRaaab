import React from 'react';
import Image from './image';
import '../style/button.css';

class Button extends React.Component {
  constructor(props) {
    super();
    this.state = {
      image: '',
    };
  }

  changeImg = () => {
    this.setState({
      image: this.props.btnName,
    });
  };
  render() {
    return (
      <>
        <button onClick={this.changeImg}>{this.props.btnName}</button>
        <Image imageName={this.state.image} />
      </>
    );
  }
}

export default Button;
