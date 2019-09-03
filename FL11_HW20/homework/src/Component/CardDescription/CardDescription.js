import React, { Component } from 'react';
import './CardDescription.css';

class CardDescription extends Component {
  constructor(props){
    super(props);
    this.text = props.text;
  }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {
    return (
      <div className='CardDescription'>
        {this.text}
      </div>
    );
  }
}

export default CardDescription;