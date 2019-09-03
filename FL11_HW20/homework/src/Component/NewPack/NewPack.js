import React, { Component } from 'react';
import './NewPack.css';
import Button from './../Button/Button'

class NewPack extends Component {
  constructor(props){
    super(props);
    this.item = +props.item;
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
    this.arrOffEmo = [];
    for (let i = 0; i < 3; i++) {
      this.arrOffEmo.push(i)
      
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
        // Примітка: важливо обробляти помилки саме тут,
        // а не в блоці catch (), щоб не перехоплювати
        // виключення з помилок в самих компонентах.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  } 

  // render() {
  //   return (
  //     <div className='NewPack'>
  //       <h1>New</h1>
  //       <p>Includes</p>
  //     </div>
  //   );
  // }
  render() {
    const { error, isLoaded, items } = this.state;
    console.log(items)  
     
    if (error) {
      return <div>Помилка: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Завантаження...</div>;
    } else {
      return (
        
        <div className='NewPack'>

          <h1 className='NewPack__header'>New {items[this.item].title} </h1>
          <div className='NewPack-text'>includes </div>
          <div className='NewPack__CharContainer'>
            
            {this.arrOffEmo.map(elem=>items[this.item].emoji[elem].char )}
          </div>
          <div className='NewPack__ButtonContainer'>
            <Button text={items[this.item].price}/>
          </div>
          
        </div>
      );
    }
  }  
}

export default NewPack;