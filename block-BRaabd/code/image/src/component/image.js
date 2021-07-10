import React from 'react';
import '../style/image.css';

class Image extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="image">
        <img src="assets/basketball.jpg" alt="Basketball" />
      </div>
    );
  }
}

export default Image;
