import React, { Component } from 'react';
import './CardContainer.css';
import Card from '../card/card'

class CardContainer extends Component {
  constructor(props){
    super(props);
    this.numberOfPoint = props.numberOfPoint
    this.arrOfCards = [];
    for (let i = 0; i < this.numberOfPoint; i++) {

      this.arrOfCards.push(<Card item={i} key={i+1}/>);
    }
  }
  render() {
    return (
      <div className='CardContainer'>
        {this.arrOfCards.map(elem => (elem))}
      </div>
    );
  }
}

export default CardContainer;