import React, { Component } from 'react';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf'; 
import StarBorderIcon from '@material-ui/icons/StarBorder';
import './RateScale.css';
class RateScale extends Component {
  constructor(props){
    super(props);
    this.rate = props.rate;
    this.arr = [];
    for (let i = 0; i < 5; i++) {
      if( this.rate > i ) {
        if ((this.rate-i)>=1) {
          this.arr.push((<StarIcon key={i}/>));
        } else {
          this.arr.push((<StarHalfIcon key={i}/>));
        }
      } else {
        this.arr.push((<StarBorderIcon key={i}/>));
      }
    }
  }

  render() {
    return (
      <div className='RateScale'>
          {this.arr.map(x => (x))}
      </div>
    );
  }
}

export default RateScale;