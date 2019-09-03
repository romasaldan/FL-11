import React, { Component } from 'react';
import './Button.css';
import Basket from './../Basket/Basket'

import Card from './../card/card'

class Button extends Component {
  constructor(props){
    super(props);
    this.text = props.text;

    this.state = {     
      data: props.data,
      bought: 'Button'
    }
    this.toggleClass = this.toggleClass.bind(this)
  }
  toggleClass () {
    if(this.state.bought==='Button') {
      this.setState({
        bought:'Button_bought'
      }) 
    } else {
      this.setState({
        bought:'Button'
      })
    }
  }

  render() {
    return (
      <button className={this.state.bought} onClick={this.toggleClass} >
        ({this.text}$)
      </button>
    );

  }
}

export default Button;