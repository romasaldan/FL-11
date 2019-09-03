import React from 'react';
import ReactDOM from 'react-dom';

import './App.css'
import CardContainer from './Component/CardContainer/CardContainer'
import NewPack from './Component/NewPack/NewPack'
import Basket from './Component/Basket/Basket'

function App() {
  return (
      <div className='App'>
        <div className='App-left'>
          <NewPack item={3}/>  
          
          <CardContainer numberOfPoint={7}/>
        </div>
        <div className='App-right'>
          <Basket data={[]}/>
        </div>
      </div>

      
      

  );
}

export default App;
