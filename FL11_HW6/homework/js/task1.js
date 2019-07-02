let a1 = +prompt('enter a1',0); 
let a2 = +prompt('enter a2',0); 
let b1 = +prompt('enter b1',0); 
let b2 = +prompt('enter b2',0); 
let c1 = +prompt('enter c1',0); 
let c2 = +prompt('enter c2',0); 
let dimensionOfSpace = 2;
let firstCondition =(a1+b1)/dimensionOfSpace===c1;
let secondCondition = (a2+b2)/dimensionOfSpace===c2;
if (firstCondition&&secondCondition) {
	console.log(true);
} else {
	console.log(false);
}