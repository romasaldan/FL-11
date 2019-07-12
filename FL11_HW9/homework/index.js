//0
function getNumbers(string) {
	let arrayOfNumbers = [];
	let counterOfNumbers = 0;
	for (let i=0; i<string.length; i++) {
		let symbolOfString = parseInt(string[i]);
		if (!isNaN(symbolOfString)) {
			arrayOfNumbers[counterOfNumbers] = symbolOfString;
			counterOfNumbers++;
		}		
	}
	return arrayOfNumbers;
}
console.log(getNumbers('n1um3ber95'));
//1
function findTypes() {
	let counterOfTypes = {};
	for (let i = 0;i<arguments.length;i++) {
		let typeOfParameter = typeof arguments[i];
		if (counterOfTypes.hasOwnProperty(typeOfParameter)) {
			counterOfTypes[typeOfParameter] +=1;  
		} else {
			counterOfTypes[typeOfParameter] = 1;
		}
	}
	return counterOfTypes;
}
console.log(findTypes(null,1,'hello',1,'5',true)); 
//2
function executeforEach(array,functionForExecuting) {
	for (let i = 0;i<array.length;i++) {
		functionForExecuting(array[i]);	
	}
}
executeforEach([0,1,1], function(el) {
	console.log(el) 
}); 
//3
function mapArray(array,functionForExecuting) {
	let  newArray = []; 
	executeforEach(array,function(el) {
		newArray.push(functionForExecuting(el))
	})
	return newArray;
}
console.log(mapArray([0, 1, 1], function(el) {
	return el + 3; 
})) 
//4
function filterArray(array,functionForExecuting) {
	let  newArray = [];
	
	executeforEach(array,function(el) {
		newArray.push(functionForExecuting(el))
	})
	return newArray;	
}
console.log(filterArray([2, 5, 8], function(el) { 
	return el > 3; 
}))