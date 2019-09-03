import React, { Component } from 'react';
import './Basket.css';
import Button from './../Button/Button'
class Basket extends Component {
  constructor(props){
    super(props);
    this.data = props.data;
    this.state = {
      products: []
   }
};

  render() {
    if (this.state.products.length===0) {
      return (
        <div className='Basket' >
          <p className='Basket-header'>Basket</p>
          <div className='Basket-container'>

          </div>
          <Button  text={'Purchase'} />
        </div>
      )
    } else {
      return (
        <div className='Basket' >
          <p className='Basket-header'>Basket</p>
          <div className='Basket-container'>
            {this.state.products.map((el)=>{
              console.log(el)
              return (
                <div>{el.id}</div>
              )
            })}
          </div>
          <Button text={'Purchase'} />
        </div>
      );
    }

  }
}

export default Basket;