function Hamburger(type,calories,secretIngredient) {
  let _calories;
  let _amountOfBites = 0;
  let _ingredients = {}
  if(calories<0 || typeof calories!=='number') {
    console.log('value should be number more than 0. We can not create instance of Hamburger. Please enter valid data');
    return;
  } else {
    _calories = calories;
  }
  if(secretIngredient) {
    _ingredients = {
      cheese: false,
      tomato: 0,
      secret: true
    }    
  } else {
    _ingredients = {
      cheese: false,
      tomato: 0,
      secret: false
    }    
  }
  this.type = type;
  this.getCalories = function () {
    return calories; 
  }
  this.setCalories = function(value) {
    if(value<0 ||typeof value!=='number') {
      console.log('value should be number more than 0')
    } else {
      calories = value;
    }
  }
  this.addCheese = function() {
    if(_amountOfBites>0) {
      console.log('Sorry, you can not add cheese');
    } else {
      if(_ingredients.cheese) {
        console.log('Sorry, you can add cheese only once');
      } else {
        const AMOUNT_CALORIES_IN_CHEESE =120;
        this.setCalories(this.getCalories()+AMOUNT_CALORIES_IN_CHEESE)
        _ingredients.cheese = true;        
      }
    }
  }
  this.addTomato = function() {
    if(_amountOfBites>0) {
      console.log(`Sorry, you can'not add tomato`)
    } else {
      const MAX_AMOUNT_OF_TOMATOES = 2
      if(_ingredients.tomato<MAX_AMOUNT_OF_TOMATOES) {
        const AMOUNT_CALORIES_IN_TOMATO = 20;
        this.setCalories(this.getCalories()+AMOUNT_CALORIES_IN_TOMATO)
        _ingredients.tomato = _ingredients.tomato+1;          
      } else {
        console.log('Sorry, you can add tomato only twice');
      }     
    }       
  }
  this.addSecretIngedient = function() {
    if(_amountOfBites>0) {
      console.log('Sorry, you can not add secret ingredient')
    } else {
      if(!_ingredients.cheese&& _ingredients.tomato===0&& !_ingredients.secret) {
        const AMOUNT_CALORIES_IN_SECRET = 100;
        this.setCalories(this.getCalories()+AMOUNT_CALORIES_IN_SECRET)    
		_ingredients.secret = true;
      } else {
        console.log('Sorry, you can add secret ingredient only before another ingredient and only once');
      }
    }
  }
  this.bite = function () {
    _amountOfBites++;
  }
  this.info = function () {
    let secret = (_ingredients.secret)?'with secret ingredient, ':'without secret ingredient, '
    let cheese = (_ingredients.cheese)?'with cheese, ':'without cheese, '
    let tomato = (_ingredients.tomato>1)?'with '+_ingredients.tomato+' tomatoes, ':'with '+_ingredients.tomato+ ' tomato, '
    let bites = (_amountOfBites>1)?'is bited '+ _amountOfBites+' times.':'is bited '+ _amountOfBites+' time.'
    let calories = 'Total calories: '+this.getCalories()+'.'
    return this.type+' hamburger: '+secret+cheese+tomato+bites+calories;
  }  
}
const myHamb = new Hamburger('classic',600)
