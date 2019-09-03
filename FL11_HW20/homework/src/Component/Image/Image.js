import React, { Component } from 'react';
import './Image.css';

class Image extends Component  {
  constructor(props){
    super(props);
    this.image = props.image;
  }

  render() {
    return (
      <div className='ImageCard'>
        {this.image}
      </div>
    );
  }
}

export default Image;