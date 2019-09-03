import React, { Component } from 'react';
import Button from '../Button/Button';
import Image from '../Image/Image'
import RateScale from '../RateScale/RateScale'
import CardDescription from '../CardDescription/CardDescription'
import Basket from '../Basket/Basket'
import ReactDOM from 'react-dom';
import './card.css';


class Card extends Component {
  constructor(props){
    super(props);
    this.numberOfItem = +props.item;
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      isChoosen:[]
    };
    this.onChange = this.onChange.bind(this)
  }
  
    onChange(event){
      if(event.target.className==='Button' || event.target.className==='Button_bought') {
        const arr = document.querySelectorAll('.Card button')
        const arrOfReserved = [];
        let sum = 0;

        for (let i = 0; i < this.state.items.length; i++) {
          if(arr[i].className === 'Button_bought') {
            console.log(this.state.items[i].title)
            sum += this.state.items[i].price;
            arrOfReserved.push(
              (
                <div>
                  {this.state.items[i].title+': '+ this.state.items[i].price+'$'}
                </div>
              )              
            ) 
          }          
            
        }
        
        ReactDOM.render((
          <div>
           { arrOfReserved.map((el,item)=>{
             return (<div key={item}>{el}</div>)
           })}
          </div>
        ), document.getElementsByClassName('Basket-container')[0]);
               
        console.log(this.state)      
      }      
    }

  componentDidMount() {
    fetch("http://localhost:1337/emoji-shop")
      .then(res => res.json())
      .then(
        (result) => {
          
          this.setState({
            isLoaded: true,
            items: result.emoji
          });
        },

        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  } 
  
  render() {
    const { error, isLoaded, items } = this.state;

    if (error) {
      return <div>Помилка: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Завантаження...</div>;
    } else {
      return (
        
        <div className='Card col-4' onClick={this.onChange}>
          <Image image={items[this.numberOfItem].emoji[0].char} />
          <CardDescription text={items[this.numberOfItem].title} />
          <RateScale rate={items[this.numberOfItem].stars}/>
          {/* onClick={this.addToChoosen(items[this.numberOfItem])} */}
          <Button text={'Get '+items[this.numberOfItem].price}  data={this.state.isChoosen}/>
        </div>
      );
    }
  }
}


export default Card;