import React from 'react';
import '../style/button.css';

class Section extends React.Component {
  constructor(props) {
    super(props);
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
        {this.state.image ? (
          <div className="section">
            <img src={`assets/${this.props.btnName}.jpg`} alt="Basketball" />
          </div>
        ) : (
          ''
        )}
      </>
    );
  }
}

export default Section;
